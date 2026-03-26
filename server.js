const express = require('express');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Main Lead API Routes
app.use('/api/leads', leadRoutes);

// Helper route for checking server status
app.get('/', (req, res) => {
    res.send('Lead Workflow System Server is running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
