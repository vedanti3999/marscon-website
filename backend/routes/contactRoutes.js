const express  = require('express');
const router   = express.Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const {
  submitContact,
  getAllContacts,
  updateContactStatus,
} = require('../controllers/contactController');

// Validation rules for contact form
const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name must be under 100 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Enter a valid email address')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  body('phone')
    .optional()
    .trim()
    .isLength({ max: 20 }).withMessage('Phone number too long'),
  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Company name too long'),
];

// Routes
// POST   /api/contact         – Submit enquiry (public)
router.post('/', contactValidation, validate, submitContact);

// GET    /api/contact         – View all submissions (admin)
router.get('/', getAllContacts);

// PATCH  /api/contact/:id/status – Update status (admin)
router.patch('/:id/status', updateContactStatus);

module.exports = router;
