import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Example for Gmail:
  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: "no-reply@genztech.lk",
      pass: "#4zsWsUxckqz3RYf",
    },
  });
  
  const { name, email,subjet,phone, message } = req.body;

  const mailOptions = {
    from: 'no-reply@genztech.lk',
    to: email,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
  
}
