/**
 * Appointment Controller
 * Handles appointment submissions and health check responses.
 * (Structured cleanly for database integration when needed)
 */

// In-memory appointments list for current session (no permanent DB required)
const appointmentsStore = [];

const createAppointment = (req, res) => {
  try {
    const appointmentData = req.sanitizedAppointment;

    // Generate unique reference id
    const referenceId = `APPT-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const savedRecord = {
      id: referenceId,
      ...appointmentData,
      status: 'RECEIVED',
    };

    appointmentsStore.push(savedRecord);

    console.log(`[APPOINTMENT RECEIVED] ${referenceId} - ${savedRecord.name} (${savedRecord.phone}) on ${savedRecord.date} at ${savedRecord.time}`);

    return res.status(200).json({
      success: true,
      message: 'Appointment request received successfully.',
      data: savedRecord,
    });
  } catch (error) {
    console.error('Error processing appointment:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your appointment. Please try again or call directly.',
    });
  }
};

const getHealthStatus = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  createAppointment,
  getHealthStatus,
};
