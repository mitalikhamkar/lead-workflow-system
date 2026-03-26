function validateLead(lead) {
    if (!lead.email || !lead.email.includes('@')) {
        return { valid: false, message: 'Invalid email format' };
    }
    return { valid: true };
}

module.exports = { validateLead };
