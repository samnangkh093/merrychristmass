// Music control
let music = document.getElementById('bg-music');
let isMusicPlaying = false;

function toggleMusic() {
  if (isMusicPlaying) {
    music.pause();
    isMusicPlaying = false;
  } else {
    music.play();
    isMusicPlaying = true;
  }
}

// Snow effect using particles.js
function celebrateSnow() {
  particlesJS('snow', {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'top',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: 'repulse'
        },
        onclick: {
          enable: false,
          mode: 'push'
        }
      }
    }
  });
}
