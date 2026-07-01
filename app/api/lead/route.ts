import { NextRequest, NextResponse } from "next/server";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name");
  const phone = formData.get("phone");
  const photos = formData.getAll("photo").filter((value): value is File => value instanceof File);

  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (typeof phone !== "string" || !phone.trim()) {
    return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  }

  if (photos.length === 0) {
    return NextResponse.json(
      { error: "Please attach at least one photo of the dent." },
      { status: 400 }
    );
  }

  for (const photo of photos) {
    if (!ALLOWED_TYPES.includes(photo.type)) {
      return NextResponse.json(
        { error: "Photos must be JPEG, PNG, or WebP." },
        { status: 400 }
      );
    }
    if (photo.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Each photo must be 10MB or smaller." },
        { status: 400 }
      );
    }
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    const forwardData = new FormData();
    forwardData.set("name", name);
    forwardData.set("phone", phone);
    forwardData.set("email", String(formData.get("email") ?? ""));
    forwardData.set("vehicle", String(formData.get("vehicle") ?? ""));
    forwardData.set("message", String(formData.get("message") ?? ""));
    photos.forEach((photo) => forwardData.append("photo", photo, photo.name));

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      body: forwardData,
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { error: "We couldn't submit your request. Please call or text us instead." },
        { status: 502 }
      );
    }
  } else {
    console.warn("LEAD_WEBHOOK_URL is not set — lead was received but not forwarded.", {
      name,
      phone,
    });
  }

  return NextResponse.json({ ok: true });
}
