/**
 * Middleware to validate appointment booking payloads
 */
const validateAppointment = (req, res, next) => {
  const { name, phone, date, time, reason } = req.body || {};

  const errors = [];

  // Validate Name
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Please enter a valid full name (minimum 2 characters).');
  }

  // Validate Phone (Indian 10-digit number format or international with country code)
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{3,6}$/;
  if (!phone || typeof phone !== 'string' || !phoneRegex.test(phone.trim())) {
    errors.push('Please enter a valid 10-digit contact phone number.');
  }

  // Validate Date
  if (!date || typeof date !== 'string' || date.trim().length === 0) {
    errors.push('Please select a preferred appointment date.');
  }

  // Validate Time
  if (!time || typeof time !== 'string' || time.trim().length === 0) {
    errors.push('Please select a preferred time slot.');
  }

  // Validate Reason
  if (!reason || typeof reason !== 'string' || reason.trim().length < 3) {
    errors.push('Please provide the reason for your consultation or symptoms.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors,
    });
  }

  // Sanitize values
  req.sanitizedAppointment = {
    name: name.trim(),
    phone: phone.trim(),
    date: date.trim(),
    time: time.trim(),
    reason: reason.trim(),
    submittedAt: new Date().toISOString(),
  };

  next();
};

module.exports = {
  validateAppointment,
};
