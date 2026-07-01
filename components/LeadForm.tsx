"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-md border border-graphite/20 bg-graphite/10 px-4 py-3 text-sm font-medium text-graphite">
        Thanks! We&apos;ve received your photo and details — we&apos;ll text
        you a free estimate shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Full name"
          required
          className="rounded-md border border-graphite/30 bg-white px-3 py-2 text-sm text-graphite placeholder:text-graphite/50"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone number"
          required
          className="rounded-md border border-graphite/30 bg-white px-3 py-2 text-sm text-graphite placeholder:text-graphite/50"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="email"
          type="email"
          placeholder="Email (optional)"
          className="rounded-md border border-graphite/30 bg-white px-3 py-2 text-sm text-graphite placeholder:text-graphite/50"
        />
        <input
          name="vehicle"
          type="text"
          placeholder="Car make/model"
          className="rounded-md border border-graphite/30 bg-white px-3 py-2 text-sm text-graphite placeholder:text-graphite/50"
        />
      </div>
      <textarea
        name="message"
        placeholder="Tell us about the dent (optional)"
        rows={3}
        className="rounded-md border border-graphite/30 bg-white px-3 py-2 text-sm text-graphite placeholder:text-graphite/50"
      />
      <input
        name="photo"
        type="file"
        accept="image/png,image/jpeg,image/webp"
        multiple
        required
        className="rounded-md border border-graphite/30 bg-white px-3 py-2 text-sm text-graphite"
      />

      {status === "error" && (
        <p className="text-sm font-medium text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-graphite px-6 py-3 text-sm font-semibold text-silver hover:bg-graphite/90 disabled:opacity-60 transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send My Photo for a Free Estimate"}
      </button>
    </form>
  );
}
