window.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'glow-bg';
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext('2d');
    let w, h;
  
    function resizeCanvas() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
  
    function drawGlowLines() {
      ctx.clearRect(0, 0, w, h);
  
      const centerX = w / 2;
      const centerY = h / 2;
  
      for (let i = 0; i < 50; i++) {
        const angle = (i / 50) * Math.PI * 2;
        const length = Math.random() * h * 0.4 + 100;
  
        const x = centerX + Math.cos(angle) * length;
        const y = centerY + Math.sin(angle) * length;
  
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(255, 255, 200, 0.06)';
        ctx.lineWidth = 1;
        ctx.shadowColor = 'rgba(255, 255, 200, 0.2)';
        ctx.shadowBlur = 20;
        ctx.stroke();
      }
  
      requestAnimationFrame(drawGlowLines);
    }
  
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawGlowLines();
  };