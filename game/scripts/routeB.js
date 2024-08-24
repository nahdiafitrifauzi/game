function loadRouteB() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    
    let puzzlePiece = { x: 150, y: 150, width: 50, height: 50 };
  
    
    function drawPuzzlePiece() {
      ctx.fillStyle = 'orange';
      ctx.fillRect(puzzlePiece.x, puzzlePiece.y, puzzlePiece.width, puzzlePiece.height);
    }
    
    
    function checkPuzzleCompletion() {
      
    }
  
    
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPuzzlePiece();
  
      
      checkPuzzleCompletion();
      
      requestAnimationFrame(update);
    }
    
    update();
  }
  