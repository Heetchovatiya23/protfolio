"use client";

import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus("submitting");
    if (!form.name || !form.email || !form.message) {
      alert("Please complete all fields.");
      setStatus("idle");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Failed to send message");
      setStatus("success");
      // Preserve the user's input so it doesn't disappear after sending.
    } catch (err) {
      console.error(err);
      setError("Unable to send message. Please try again.");
      setStatus("error");
    } finally {
      if (status !== "success") setStatus("idle");
    }
  };

  return (
    <SectionWrapper id="contact" kicker="Connect" title="Contact">
      <form onSubmit={handleSubmit} className="grid gap-6 rounded-3xl border border-border bg-card p-8">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm uppercase tracking-[0.2em] text-muted">Name</label>
          <input
            id="name"
            className="rounded-xl border border-border bg-transparent px-4 py-3"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm uppercase tracking-[0.2em] text-muted">Email</label>
          <input
            id="email"
            type="email"
            className="rounded-xl border border-border bg-transparent px-4 py-3"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm uppercase tracking-[0.2em] text-muted">Message</label>
          <textarea
            id="message"
            className="min-h-[160px] rounded-xl border border-border bg-transparent px-4 py-3"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Project details, timelines, goals..."
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
          {status === "success" && <p className="text-sm text-green-600">Message sent!</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
      </form>
    </SectionWrapper>
  );
};

export default Contact;

