/* Configuração de Geometrias 3D Continuas */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 65, /* Quantidade de nós geométricos */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00e5ff" /* Cor ciano neon nas formas */
    },
    "shape": {
      "type": ["polygon", "circle"], /* Mistura de Polígonos Geométricos */
      "stroke": {
        "width": 1,
        "color": "#00e5ff"
      },
      "polygon": {
        "nb_sides": 6 /* Formas hexagonais/poligonais */
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 160, /* Distância que conecta as linhas */
      "color": "#00e5ff",
      "opacity": 0.25,
      "width": 1.2
    },
    "move": {
      "enable": true,
      "speed": 2.5, /* Velocidade constante do movimento automático */
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" /* Conecta linhas no mouse se passar por cima */
      },
      "onclick": {
        "enable": true,
        "mode": "push" /* Adiciona mais formas se clicar */
      }
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.6
        }
      }
    }
  },
  "retina_detect": true
});