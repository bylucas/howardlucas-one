//Loader
function spinner() {
    const spin = document.getElementById('loader-wrapper');
    setTimeout(function () {
      spin.classList.add('loaded')
    }, 100)
}

//Back to Top
class Backtotop {
  constructor() {
    this.backbutton = document.getElementById("topBtn");
  }

  init() {
    window.onscroll = ('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.backbutton.style.display = "block";
      } else {
        this.backbutton.style.display = "none";
      }
    });

    this.backbutton.addEventListener('click', () => {
      this.top();
    });
  }

  top() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
      window.scrollBy(0, -50);
      this.timeout = setTimeout(() => {
        this.top();
      }, 10);
    }
  }
}

const backtotop = new Backtotop();
backtotop.init();
////////////////////////////////////////////////////

//button
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName('ripple') [0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }
/////////////////////////////////////////////////////////

//Smooth Scroll
function smoothScroll(target) {
  const element = document.getElementById(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      smoothScroll(target);
    });
  });
});

//Modal
const submit = document.querySelector(".modal-button")
const popup = document.querySelector(".popup-wrapper")
const effect = document.querySelector(".popup")
const close = document.querySelector(".popup-close")

submit.addEventListener("click", () => {
  popup.style.display = "block"
  effect.classList.add('enter')
})

close.addEventListener("click", () => {
  popup.style.display = "none"
})

popup.addEventListener("click", (e) => {
  if (e.target.className === "popup-wrapper") {
    popup.style.display = "none"
  }
})


