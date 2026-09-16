const express = require('express');
const router = express.Router();
const { createAppointment, getHealthStatus } = require('../controllers/appointmentController');
const { validateAppointment } = require('../middleware/validation');

// GET /api/health
router.get('/health', getHealthStatus);

// POST /api/appointment
router.post('/appointment', validateAppointment, createAppointment);

module.exports = router;
