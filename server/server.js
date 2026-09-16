const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for development frontend
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Parse incoming JSON requests
app.use(express.json());

// API routes
app.use('/api', appointmentRoutes);

// Serve static frontend build assets if available
const buildPath = path.join(__dirname, '../build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  // Fallback if build has not been generated yet
  app.get('/', (req, res) => {
    res.json({
      clinic: "Dr. SHASHI'S ORTHO CLINIC",
      status: 'API server active',
      frontendDevServer: 'http://localhost:3000',
      health: '/api/health',
      appointmentEndpoint: '/api/appointment',
    });
  });
}

// Start listening
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`Dr. Shashi's Ortho Clinic Express API`);
  console.log(`Server listening on port ${PORT}`);
  console.log(`Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});
