const nodemailer = require('nodemailer');

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host:   process.env.EMAIL_HOST   || 'smtp.gmail.com',
  port:   parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send contact form email notification to MARSCON team
 */
const sendContactEmail = async ({ name, email, phone, company, subject, message }) => {
  const mailOptions = {
    from:    process.env.EMAIL_FROM  || `"MARSCON Website" <noreply@marscon.in>`,
    to:      process.env.EMAIL_TO    || 'marscon.india@gmail.com',
    subject: `New Enquiry: ${subject || 'General Enquiry'} – from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0d1b2e; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #f47c20; margin: 0; font-size: 22px;">MARSCON – New Website Enquiry</h2>
        </div>
        <div style="background: #f5f7fa; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e8edf3;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1a202c; width: 140px;">Name:</td>
              <td style="padding: 8px 0; color: #4a5568;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1a202c;">Email:</td>
              <td style="padding: 8px 0; color: #4a5568;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `<tr><td style="padding:8px 0;font-weight:bold;color:#1a202c;">Phone:</td><td style="padding:8px 0;color:#4a5568;"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
            ${company ? `<tr><td style="padding:8px 0;font-weight:bold;color:#1a202c;">Company:</td><td style="padding:8px 0;color:#4a5568;">${company}</td></tr>` : ''}
            ${subject ? `<tr><td style="padding:8px 0;font-weight:bold;color:#1a202c;">Subject:</td><td style="padding:8px 0;color:#4a5568;">${subject}</td></tr>` : ''}
            <tr>
              <td colspan="2" style="padding-top: 16px;">
                <strong style="color: #1a202c;">Message:</strong>
                <p style="margin-top: 8px; color: #4a5568; line-height: 1.7; background: white; padding: 14px; border-radius: 6px; border-left: 4px solid #f47c20;">${message.replace(/\n/g, '<br/>')}</p>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e8edf3; font-size: 12px; color: #8a9ab0;">
            Sent from MARSCON website contact form — ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </div>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

/**
 * Send auto-reply to the person who submitted the form
 */
const sendAutoReply = async ({ name, email }) => {
  const mailOptions = {
    from:    process.env.EMAIL_FROM || `"MARSCON" <noreply@marscon.in>`,
    to:      email,
    subject: 'Thank you for contacting MARSCON',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0d1b2e; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #f47c20; margin: 0;">MARSCON Industrial Solutions</h2>
        </div>
        <div style="background: #ffffff; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8edf3;">
          <p style="color: #1a202c; font-size: 16px;">Dear <strong>${name}</strong>,</p>
          <p style="color: #4a5568; line-height: 1.7;">Thank you for reaching out to MARSCON. We have received your enquiry and our team will get back to you within <strong>24 business hours</strong>.</p>
          <p style="color: #4a5568; line-height: 1.7;">For urgent requirements, please call us at <strong>(+91) 7744091318</strong>.</p>
          <div style="margin: 28px 0; padding: 20px; background: #f5f7fa; border-radius: 8px; border-left: 4px solid #f47c20;">
            <p style="margin: 0; color: #1a202c; font-weight: bold;">MARSCON Industrial Solutions</p>
            <p style="margin: 6px 0 0; color: #4a5568; font-size: 14px;">Plot No, GP-89, Swami Plaza, MIDC Chinchwad, Pune – 411019</p>
            <p style="margin: 4px 0 0; color: #4a5568; font-size: 14px;">📞 (+91) 7744091318 | ✉️ marscon.india@gmail.com</p>
          </div>
          <p style="color: #8a9ab0; font-size: 13px;">Engineering Change. Delivering Productivity.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail, sendAutoReply };
