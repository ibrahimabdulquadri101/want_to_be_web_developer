'use strict'
const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
function formatCheckInput(content) {
    // 1 remove all non-alphanumeric characters (punctuation, spaces and symbols)

    let newContent = [];
    const regex = /[a-zA-Z0-9]/ig;
    for (const c of content) {
        if (c.match(regex)) {
            newContent.push(c);
        }
    }
    // 2 turn all to LowerCase

    const newString = newContent.join("").toLowerCase();
    return newString;

}

function showInput() {
    if (!userInput.value) {
        alert("Please input a value");
    }
    else {
        const formattedContent = formatCheckInput(userInput.value);
        if (formattedContent.split("").reverse().join("") === formattedContent) {
            console.log(`${userInput.value} is a palindrome`);
            resultDiv.innerHTML = `${userInput.value} is a palindrome`;
        } else {
            console.log(`${userInput.value} is not a palindrome`);
            resultDiv.innerHTML = `${userInput.value} is not a palindrome`;
        }

    }
};
checkBtn.addEventListener('click', showInput);