function loadRouteC() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    
    ctx.fillStyle = 'beige';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    
    let collectible = { x: 200, y: 200, width: 30, height: 30 };
  
    
    function drawCollectible() {
      ctx.fillStyle = 'gold';
      ctx.fillRect(collectible.x, collectible.y, collectible.width, collectible.height);
    }
    
    
    function checkItemCollection() {
      
    }
  
    
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCollectible();
  
      
      checkItemCollection();
      
      requestAnimationFrame(update);
    }
    
    update();
  }
  