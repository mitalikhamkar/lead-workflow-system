function classifyLead(source) {
    if (source === 'Instagram') {
        return 'Social Lead';
    } else if (source === 'Website') {
        return 'Organic Lead';
    } else {
        return 'Other Lead';
    }
}

module.exports = { classifyLead };
