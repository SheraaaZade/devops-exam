/* istanbul ignore file */
try {
    const {
        isEmpty,
        isEightChar,
        containsNumber,
        containsSpecialChar,
    } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
        feedbackMessageText = isEmpty(gamerTagValue)
            ? "Gamer tag cannot be empty"
            : "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;
        errorMessageText =
            isEightChar(gamerTagValue) ||
            containsNumber(gamerTagValue) ||
            containsSpecialChar(gamerTagValue)
                ? "Error with the name choosen"
                : "Gamer tag is valid !";
        checkButton.textContent = errorMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
