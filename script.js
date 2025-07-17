// Typing Effect
const text = "Welcome to NeuroCore AI Systems.";
let index = 0;
const speed = 70;

function type() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
    }
}
window.onload = type;

// Particles JS
tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
        number: { value: 80 },
        color: { value: "#00f2ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: "out"
        }
    },
    interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100 } }
    },
    background: { color: "#0b0c10" }
});
