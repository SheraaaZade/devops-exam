// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isEightChar = (label) => label.length >= 8;

module.exports.containsSpecialChar = (label) => {
    if (!label) return false;
    console.log(label);
    const found = /[^a-zA-Z0-9]/.test(label);
    return found;
};


exports.isEmpty = isEmpty;
exports.isEightChar = isEightChar;
