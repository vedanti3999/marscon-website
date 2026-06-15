const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true, maxlength: 100 },
    email:   { type: String, required: true, trim: true, lowercase: true },
    phone:   { type: String, trim: true, default: '' },
    company: { type: String, trim: true, default: '' },
    subject: { type: String, trim: true, default: 'General Enquiry' },
    message: { type: String, required: true, trim: true },
    status:  {
      type:    String,
      enum:    ['new', 'read', 'replied', 'closed'],
      default: 'new',
    },
    ipAddress: { type: String, default: '' },
  },
  { timestamps: true }
);

// Index for faster queries
contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1 });
contactSchema.index({ email: 1 });

module.exports = mongoose.model('Contact', contactSchema);
