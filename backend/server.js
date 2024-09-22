const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const auth_email = process.env.AUTH_EMAIL;
const auth_pass = process.env.AUTH_PASS;
const client_email = process.env.CLIENT_EMAIL;

app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: auth_email, 
    pass: auth_pass, 
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: `"Rich Paints" <${auth_email}>`,
    to: client_email,
    subject: subject || "New Email from Visitor",
    replyTo: email,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #333;">New Message from Visitor</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f9f9f9; font-size: 14px; padding: 10px; border: 1px solid #ddd;">
          ${message}
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send(info);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
