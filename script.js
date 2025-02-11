// Enhanced interaction
const adjectives = ["magical", "adventurous", "heartwarming", "unforgettable", "joyful"];
let currentAdj = 0;
const noButtonPhrases = ["Not this time! 💔", "Think again? 🤔", "Still no? 🥺", "Try me! 😉", "Ha Ha!🤣"]; // Array of phrases for the "No" button with emojis

function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}

// Dynamic message
function cycleAdjectives() {
    const container = document.getElementById('adjective-container');
    container.style.opacity = 0;

    setTimeout(() => {
        container.textContent = adjectives[currentAdj];
        container.style.opacity = 1;
        currentAdj = (currentAdj + 1) % adjectives.length;
    }, 500);
}
// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
        page.style.transform = 'scale(0)';
    });
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active-page');
    activePage.style.animation = 'cardEntrance 1s 0.5s forwards';
}

// Function to randomly change the "No" button text
function changeNoButtonText() {
    const noBtn = document.getElementById('noBtn');
    const randomIndex = Math.floor(Math.random() * noButtonPhrases.length);
    noBtn.textContent = noButtonPhrases[randomIndex];
}

// Function to move the "No" button randomly
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute'; // Ensure the button can be positioned
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Event listeners
document.getElementById('yesBtn').addEventListener('click', () => {
    showPage('page2'); // Ensure the page is shown
    document.getElementById('page2').innerHTML = `
        <h1 class="dynamic-text">My heart did a happy dance! 💖💃</h1>
        <div class="message-box">
            <p class="dynamic-text">So excited to be your Valentine! 🎉</p>
        </div>
        <button onclick="showPage('page1')" class="dynamic-text default-button-text">Do you love me more? 💘</button>
    `;
    setInterval(createHearts, 250);
    setInterval(cycleAdjectives, 2000);
});

document.getElementById('noBtn').addEventListener('click', () => {
    showPage('page3');
});

// Remove mouseover event listener
/*document.getElementById('noBtn').addEventListener('mouseover', function () {
    this.style.transform = `translate(
        ${Math.random() * 100 - 50}px,
        ${Math.random() * 100 - 50}px
    )`;
    this.style.backgroundColor = '#2a9d8f';
    changeNoButtonText(); // Call the function to change the text
});*/

// Set interval to change the "No" button text every 2 seconds (adjust as desired)
setInterval(changeNoButtonText, 2000);

// Set interval to move the "No" button randomly every 1 second (adjust as desired)
setInterval(moveNoButton, 1000);

// Call moveNoButton once when the page loads (optional, to start it immediately)
moveNoButton();

// Initialize adjective cycling
setInterval(cycleAdjectives, 2000);
