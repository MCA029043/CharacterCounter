const input = document.getElementById("input");
const countElement = document.getElementById("count");
const remainingElement = document.getElementById("remaining");

const maxCharacters = 50;

input.addEventListener("input", function () {
    const inputText = input.value;
    
    if (inputText.length > maxCharacters) {
        input.value = inputText.substring(0, maxCharacters);
    }
    
    const characterCount = input.value.length;
    countElement.textContent = characterCount;
    
    const remainingCharacters = maxCharacters - characterCount;
    remainingElement.textContent = remainingCharacters;
});
