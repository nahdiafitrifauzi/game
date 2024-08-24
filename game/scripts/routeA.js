function loadRouteA() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    
    let player = { x: 100, y: 100, width: 50, height: 50 };
    let enemy = { x: 300, y: 100, width: 50, height: 50 };
    
    
    function drawPlayer() {
      ctx.fillStyle = 'green';
      ctx.fillRect(player.x, player.y, player.width, player.height);
    }
    
    
    function drawEnemy() {
      ctx.fillStyle = 'red';
      ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    }
  
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayer();
      drawEnemy();
      
   
      
      requestAnimationFrame(update);
    }
    
    update();
  }
  