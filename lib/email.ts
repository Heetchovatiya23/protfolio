export async function sendEmail({
  name,
  email,
  message
}: {
  name: string;
  email: string;
  message: string;
}) {
  // TODO: integrate with your provider (Resend/SendGrid/etc.)
  console.log("Email send stub", { name, email, message });
  return { ok: true };
}

