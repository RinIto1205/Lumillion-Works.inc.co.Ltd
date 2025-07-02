const lightCanvas = document.getElementById('lightlines-bg');
const lightCtx = lightCanvas.getContext('2d');

function resizeLight() {
  lightCanvas.width = window.innerWidth;
  lightCanvas.height = window.innerHeight;
}
resizeLight();
window.addEventListener('resize', resizeLight);

let lines = [];
for (let i = 0; i < 20; i++) {
  lines.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    length: 300 + Math.random() * 300,
    speed: 0.5 + Math.random(),
    opacity: 0.1 + Math.random() * 0.3
  });
}

function drawLightLines() {
  lightCtx.clearRect(0, 0, lightCanvas.width, lightCanvas.height);
  lightCtx.globalCompositeOperation = "lighter";

  lines.forEach(line => {
    lightCtx.beginPath();
    const grad = lightCtx.createLinearGradient(line.x, line.y, line.x + line.length, line.y - line.length);
    grad.addColorStop(0, `rgba(255,255,255,0)`);
    grad.addColorStop(0.5, `rgba(255,255,255,${line.opacity})`);
    grad.addColorStop(1, `rgba(255,255,255,0)`);

    lightCtx.strokeStyle = grad;
    lightCtx.lineWidth = 2;
    lightCtx.moveTo(line.x, line.y);
    lightCtx.lineTo(line.x + line.length, line.y - line.length);
    lightCtx.stroke();

    line.x += line.speed;
    line.y -= line.speed;

    if (line.x > lightCanvas.width || line.y < 0) {
      line.x = Math.random() * lightCanvas.width;
      line.y = lightCanvas.height + Math.random() * 100;
    }
  });

  requestAnimationFrame(drawLightLines);
}
drawLightLines();