const glow = document.querySelector('.cursor-glow');
let x = 0, y = 0;

document.addEventListener('mousemove', (e) => {
  x = e.clientX;
  y = e.clientY;
});

function animate() {
  glow.style.left = x + 'px';
  glow.style.top = y + 'px';
  requestAnimationFrame(animate);
}

animate();

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

hero.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;

  heroContent.style.transform = `
    rotateY(${x}deg)
    rotateX(${y}deg)
    translateZ(40px)
  `;
});

hero.addEventListener('mouseleave', () => {
  heroContent.style.transform = 'rotateY(0) rotateX(0)';
});

const steve = document.querySelector('.steve');

hero.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 35;
  const y = (window.innerHeight / 2 - e.pageY) / 35;

  if (steve) {
    steve.style.transform = `
      translate(${x}px, ${y}px)
      rotate(${x * 0.3}deg)
    `;
  }
});

hero.addEventListener('mouseleave', () => {
  if (steve) {
    steve.style.transform = 'translate(0,0) rotate(0)';
  }
});

const registerBtn = document.querySelector('.register-btn');

setInterval(() => {
  if (registerBtn) {
    registerBtn.classList.toggle('active');
  }
}, 1800);

registerBtn.addEventListener('mouseenter', () => {
  steve.style.filter = 'drop-shadow(0 0 35px rgba(229,9,20,1))';
});

registerBtn.addEventListener('mouseleave', () => {
  steve.style.filter = 'drop-shadow(0 0 20px rgba(229,9,20,0.8))';
});
