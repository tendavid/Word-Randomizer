// Initialize an empty array to hold the words
let wordArray = [];

// Function to capitalize the first letter of each word
function capitalizeWords(words) {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

// Function to randomize words
function randomizeWords() {
    const input = document.getElementById("wordInput").value.trim();
    if (!input) {
        alert("Please enter some words!");
        return;
    }
    // Split words by commas, newlines, or spaces
    wordArray = input.split(/\s*[\n,]\s*/).filter(word => word);
    shuffleWords();
}

// Function to shuffle and display words
function shuffleWords() {
    wordArray.sort(() => Math.random() - 0.5); // Shuffle array
    const capitalizedWords = capitalizeWords(wordArray); // Capitalize words
    
    // Create a block for each word and add to the output
    document.getElementById("output").innerHTML = capitalizedWords.map(word => 
        `<div class="word-block">${word}</div>`
    ).join('');
}

// Function to clear everything
function clearAll() {
    document.getElementById("wordInput").value = "";
    document.getElementById("output").innerHTML = "";
    wordArray = [];
}
