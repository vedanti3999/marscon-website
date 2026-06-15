const express  = require('express');
const router   = express.Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { subscribe, unsubscribe } = require('../controllers/newsletterController');

const emailValidation = [
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Enter a valid email address')
    .normalizeEmail(),
];

// POST /api/newsletter/subscribe
router.post('/subscribe', emailValidation, validate, subscribe);

// DELETE /api/newsletter/unsubscribe
router.delete('/unsubscribe', emailValidation, validate, unsubscribe);

module.exports = router;
