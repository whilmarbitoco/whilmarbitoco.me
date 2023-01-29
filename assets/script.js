/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0,
      "random": true
    },
    "size": {
      "value": 2,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 2,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      }
    }
  },
  "retina_detect": true
});