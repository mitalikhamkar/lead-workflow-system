const { validateLead } = require('../services/validationService');
const { classifyLead } = require('../services/classificationService');
const { determinePriority } = require('../services/actionService');
const Lead = require('../models/leadModel');

const processLead = (req, res) => {
    const { name, email, source } = req.body;

    // Build model
    const lead = new Lead(name, email, source);

    // Step 1: Validation
    const validationResult = validateLead(lead);
    if (!validationResult.valid) {
        return res.status(400).json({ status: 'Error', error: validationResult.message });
    }

    // Step 2: Classification
    const category = classifyLead(lead.source);

    // Step 3: Action Trigger
    const priority = determinePriority(category);

    // Final response
    const responseData = {
        name: lead.name,
        email: lead.email,
        source: lead.source,
        category,
        priority
    };

    return res.status(200).json({
        status: 'Processed',
        data: responseData
    });
};

module.exports = { processLead };
