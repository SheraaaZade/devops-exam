// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isEightChar = (label) => label.length >= 8;

module.exports.containsSpecialChar = (label) => /[^a-zA-Z]/.test(label);

module.exports.containsNumber = (label) => /\d/.test(label);

exports.isEmpty = isEmpty;
exports.isEightChar = isEightChar;
