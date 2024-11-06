import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const options = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    text: message,
  };
  //await transporter.sendMail(options);
  const info = await transporter.sendMail(options);
  // console.log("Email sent:", info.messageId);
};

// import nodemailer from "nodemailer";

// // Configure the transporter for nodemailer
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com", // Replace with your SMTP server, e.g., 'smtp.gmail.com' for Gmail
//   port: 587, // Port, usually 587 for TLS, 465 for SSL, or 25 for non-encrypted
//   secure: false, // Use true for 465, false for other ports
//   auth: {
//     user: "swatirani910567@gmail.com", // Replace with your email
//     pass: "tfjl dire ybhb zicp", // Replace with your email password or app-specific password
//   },
// });

// /**
//  * Sends an email to the specified recipient.
//  * @param {Object} options - The email options.
//  * @param {string} options.email - Recipient email address.
//  * @param {string} options.subject - Email subject.
//  * @param {string} options.message - Email message body.
//  */
// export const sendEmail = async ({ email, subject, message }) => {
//   try {
//     await transporter.sendMail({
//       from: '"Swati Auction Team" <your_email@example.com>', // Sender address
//       to: email, // Recipient address
//       subject: subject, // Subject line
//       text: message, // Plain text body
//     });

//     console.log(`Email sent successfully to ${email}`);
//   } catch (error) {
//     console.error(`Error sending email to ${email}:`, error);
//   }
// };
