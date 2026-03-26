function determinePriority(category) {
    if (category === 'Social Lead') {
        return 'Medium';
    } else if (category === 'Organic Lead') {
        return 'High';
    } else {
        return 'Low';
    }
}

module.exports = { determinePriority };
