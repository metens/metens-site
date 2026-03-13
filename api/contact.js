import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "Contact Form <contact@nathanmetens.dev>",
      to: "nathanmetens1@gmail.com",
      subject: "New message from portfolio site",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true });

  } catch (error) {
    res.status(500).json({ error });
  }
}
