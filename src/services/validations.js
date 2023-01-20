// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isEightChar = (label) => label.length >= 8;

module.exports.containsSpecialChar = (label) => /[^a-zA-Z]/.test(label);

module.exports.containsNumber = (label) => {
    if (!label) return false;
    const found = /\d/.test(label);
    return found;
};


exports.isEmpty = isEmpty;
exports.isEightChar = isEightChar;
