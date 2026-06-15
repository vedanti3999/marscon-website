const Newsletter = require('../models/Newsletter');

/**
 * POST /api/newsletter/subscribe
 */
const subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      if (existing.active) {
        return res.status(200).json({ success: true, message: 'You are already subscribed!' });
      }
      // Re-activate
      existing.active = true;
      await existing.save();
      return res.status(200).json({ success: true, message: 'Your subscription has been reactivated.' });
    }

    await Newsletter.create({ email });

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing to MARSCON updates!',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/newsletter/unsubscribe
 */
const unsubscribe = async (req, res, next) => {
  try {
    const { email } = req.body;
    await Newsletter.findOneAndUpdate({ email }, { active: false });
    res.json({ success: true, message: 'You have been unsubscribed.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { subscribe, unsubscribe };
