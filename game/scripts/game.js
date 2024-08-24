const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentRoute = 'menu'; 

function drawMenu() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Pilih Rute:', canvas.width / 2, canvas.height / 2 - 50);
  ctx.fillText('Rute A', canvas.width / 2, canvas.height / 2);
  ctx.fillText('Rute B', canvas.width / 2, canvas.height / 2 + 50);
  ctx.fillText('Rute C', canvas.width / 2, canvas.height / 2 + 100);
}

function startGame() {
  if (currentRoute === 'menu') {
    drawMenu();
  } else {
    
    switch (currentRoute) {
      case 'A':
        loadRouteA();
        break;
      case 'B':
        loadRouteB();
        break;
      case 'C':
        loadRouteC();
        break;
    }
  }
}

function handleMouseClick(event) {
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;

  if (currentRoute === 'menu') {
    if (y > canvas.height / 2 - 30 && y < canvas.height / 2) {
      currentRoute = 'A';
    } else if (y > canvas.height / 2 + 20 && y < canvas.height / 2 + 70) {
      currentRoute = 'B';
    } else if (y > canvas.height / 2 + 70 && y < canvas.height / 2 + 120) {
      currentRoute = 'C';
    }

    startGame();
  }
}

canvas.addEventListener('click', handleMouseClick);
window.onload = startGame;
