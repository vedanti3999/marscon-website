const Contact    = require('../models/Contact');
const { sendContactEmail, sendAutoReply } = require('../config/mailer');

/**
 * POST /api/contact
 * Submit a contact form enquiry
 */
const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // 1. Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      phone:     phone   || '',
      company:   company || '',
      subject:   subject || 'General Enquiry',
      message,
      ipAddress: req.ip,
    });

    // 2. Send email notification to MARSCON team
    try {
      await sendContactEmail({ name, email, phone, company, subject, message });
    } catch (mailErr) {
      // Log but don't fail the request if email fails
      console.warn('⚠️  Contact email notification failed:', mailErr.message);
    }

    // 3. Send auto-reply to user
    try {
      await sendAutoReply({ name, email });
    } catch (mailErr) {
      console.warn('⚠️  Auto-reply email failed:', mailErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will get back to you within 24 hours.',
      data:    { id: contact._id },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/contact
 * Get all contact submissions (admin use)
 */
const getAllContacts = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;

    const filter = {};
    if (status) filter.status = status;

    const total    = await Contact.countDocuments(filter);
    const contacts = await Contact
      .find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json({
      success: true,
      total,
      page:    parseInt(page),
      pages:   Math.ceil(total / limit),
      data:    contacts,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /api/contact/:id/status
 * Update contact status (admin use)
 */
const updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' });
    res.json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContact, getAllContacts, updateContactStatus };
