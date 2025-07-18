// Typing Effect
const text = "Welcome to the amazing world of websites created by Raj.";
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

// Particles JS (Attractive Animation)
tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
        number: { value: 150 },
        color: { value: "#00f2ff" }, // Same neon blue
        shape: { type: "circle" },
        opacity: {
            value: 1.2,
            random: true,
            anim: { enable: true, speed: 0.8, opacity_min: 0.3, sync: false }
        },
        size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 1, size_min: 1, sync: false }
        },
        move: {
            enable: true,
            speed: 1.5, // Slightly faster
            direction: "none",
            outModes: "out",
            random: true, // Random movement for dynamic feel
            straight: false,
            attract: { enable: false }
        },
        links: {
            enable: true,
            distance: 110,
            color: "#00f2ff",
            opacity: 1.4,
            width: 2,
            blink: true // Lines slightly blink
        }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 200, links: { opacity: 0.7 } },
            push: { quantity: 3 }
        }
    },
    background: { color: "#0b0c10" }
});
