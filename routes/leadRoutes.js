const express = require('express');
const router = express.Router();
const { processLead } = require('../controllers/leadController');

// POST /api/leads
router.post('/', processLead);

module.exports = router;