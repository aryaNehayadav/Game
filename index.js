// Get elements
const userChoiceSpan = document.getElementById('userChoice');
const computerChoiceSpan = document.getElementById('computerChoice');
const gameResultSpan = document.getElementById('gameResult');
const message = document.getElementById('message');

// Possible choices
const choices = ['rock', 'paper', 'scissors'];

// Attach click event listeners to buttons
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        
        // Update UI
        userChoiceSpan.textContent = capitalize(userChoice);
        computerChoiceSpan.textContent = capitalize(computerChoice);
        gameResultSpan.textContent = result;
        message.textContent = "You chose " + capitalize(userChoice) + "!";
    });
});

// Generate computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine winner
function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a draw!";
    } else if ((user === 'rock' && computer === 'scissors') ||
               (user === 'paper' && computer === 'rock') ||
               (user === 'scissors' && computer === 'paper')) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Capitalize first letter of string
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
