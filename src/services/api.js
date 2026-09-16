/**
 * API Service for Dr. Shashi's Ortho Clinic
 * Communicates with the Express backend
 */

// Use relative API path (works with Webpack proxy in development and reverse proxy in production)
const API_BASE_URL = '/api';

export const submitAppointmentRequest = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/appointment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit appointment request.');
    }

    return {
      success: true,
      message: data.message || 'Appointment request received successfully.',
      data: data.data,
    };
  } catch (error) {
    console.error('API Error submitting appointment:', error);
    return {
      success: false,
      message: error.message || 'Could not connect to appointment service. Please call directly at +91-6361446411.',
    };
  }
};

export const checkServerHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    return {
      online: response.ok,
      ...data,
    };
  } catch (error) {
    return {
      online: false,
      message: 'Server unreachable',
    };
  }
};
