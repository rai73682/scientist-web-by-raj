// Typing Effect
const phrases = ["Modern Websites", "Responsive Designs", "Futuristic UI"];
let phraseIndex = 0;
let letterIndex = 0;
const speed = 100;
const eraseSpeed = 50;
const delayBetweenPhrases = 1500;

function typeText() {
    const textSpan = document.getElementById("typed-text");
    if (letterIndex < phrases[phraseIndex].length) {
        textSpan.innerHTML += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeText, speed);
    } else {
        setTimeout(eraseText, delayBetweenPhrases);
    }
}

function eraseText() {
    const textSpan = document.getElementById("typed-text");
    if (letterIndex > 0) {
        textSpan.innerHTML = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, speed);
    }
}

window.onload = () => {
    typeText();

    // Floating Code Icon Generator
    const icons = ["< />", "{ }", "JS", "AI", "C++", "HTML", "CSS", "🤖"];
    const count = 30;
    for (let i = 0; i < count; i++) {
        const el = document.createElement("div");
        el.className = "floating-icon";
        el.innerText = icons[Math.floor(Math.random() * icons.length)];
        el.style.top = `${Math.random() * 100}vh`;
        el.style.left = `${Math.random() * 100}vw`;
        el.style.animationDuration = `${5 + Math.random() * 15}s`;
        el.style.animationDuration = `${15 + Math.random() * 35}s`;
        el.style.fontSize = `${14 + Math.random() * 20}px`;
        document.getElementById("custom-particles").appendChild(el);
    }
};
document.querySelectorAll(".footer-icon").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        const sound = document.getElementById("hoverSound");
        sound.currentTime = 0;
        sound.play();
    });
});
document.querySelectorAll(".footer-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        const sound = document.getElementById("hoverSound");
        sound.currentTime = 0;
        sound.play();
    });
});
