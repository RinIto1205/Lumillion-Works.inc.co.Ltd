const galaxy = document.getElementById('galaxy-bg');
const gCtx = galaxy.getContext('2d');

function resizeGalaxy() {
  galaxy.width = window.innerWidth;
  galaxy.height = window.innerHeight;
}
resizeGalaxy();
window.addEventListener('resize', resizeGalaxy);

function drawGalaxy() {
  const gradient = gCtx.createRadialGradient(
    galaxy.width / 2, galaxy.height / 2, 0,
    galaxy.width / 2, galaxy.height / 2, galaxy.width
  );
  gradient.addColorStop(0, '#0f0c29');
  gradient.addColorStop(0.5, '#302b63');
  gradient.addColorStop(1, '#24243e');

  gCtx.fillStyle = gradient;
  gCtx.fillRect(0, 0, galaxy.width, galaxy.height);
}

function animateGalaxy() {
  drawGalaxy();
  requestAnimationFrame(animateGalaxy);
}
animateGalaxy();