const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const playButton = document.getElementById('playButton');
const restartButton = document.getElementById('restartButton');
const mainMenuButton = document.getElementById('mainMenuButton');
const restart1Button = document.getElementById('restart1Button');
const mainMenu1Button = document.getElementById('mainMenu1Button');
const restart2Button = document.getElementById('restart2Button');
const mainMenu2Button = document.getElementById('mainMenu2Button');
const restart3Button = document.getElementById('restart3Button');
const mainMenu3Button = document.getElementById('mainMenu3Button');
const levelButton = document.getElementById('chooseLvl');
const controlsButton = document.getElementById('controlsBtn');
const lvl1 = document.getElementById('lvl1');
const lvl2 = document.getElementById('lvl2');
const lvl3 = document.getElementById('lvl3');
let scrollX = 0; // Начальное положение скролла
const scrollSpeed = 5;

let hero = null;
let enemy = null; 
let menu = null;
let currentLevel = null;
let currentLevelIndex = 0; // Индекс текущего уровня
let keysPressed = {};
let isGameOver = false;
let isLevelComplete = false;
let isFullscreen = false;
let startTime;
let timerElement = document.getElementById('timer');
let timerInterval;
let spikeDamageCooldown = 0;
let isPaused = false;
let chest = null; // Переменная для хранения сундука


document.addEventListener('keydown', (event) => {
  keysPressed[event.code] = true;
});

window.addEventListener('keyup', (event) => {
    keysPressed[event.code] = false;
});

function loadLevel(levelIndex) {
  // ...

  // Устанавливаем размер канваса в зависимости от уровня
  switch (levelIndex) {
    case 0:
      setCanvasSize(2200, 1080);
      break;
    case 1:
      setCanvasSize(5920, 1080);
      break;
    case 2:
      setCanvasSize(5920, 1080);
      break;
    // ...
  }
}

function setCanvasSize(width, height) {
  canvas.width = width;
  canvas.height = height;
  canvasWidth = width;
}

// При загрузке уровня:


function updateGame() {
  if (isPaused) { // Проверка, находится ли игра в паузе
    return; // Выход из функции, если игра на паузе
  }
  hero.update();
  hero.updateHP(); 
  
      for (const enemy of currentLevel.enemies) {
        enemy.update(hero);         
        if (Collision.checkEnemyCollision(hero, enemy) && enemy.attackCooldown <= 0) {
          // Нанести урон герою
          hero.hp -= enemy.damage;
      
          // Отправить атаку врага в кулдаун
          enemy.attackCooldown = enemy.attackCooldownTime;
          enemy.isAttacking = true;                   
        }  
        if (enemy.type === 'boss') {
          enemy.updateBossHP(); 
    
          if (enemy.hp <= 0 && !chest) { // Проверка, умер ли босс и есть ли сундук
            enemy.die(); // Вызываем метод die() объекта enemy
          }
    
          if (enemy.type === 'boss') {
            enemy.updateBossHP();
      
            if (enemy.hp <= 0 && !chest) { // Проверяем, умер ли босс и появился ли сундук
              chest = new Chest(4000, 840); // Создаем сундук в фиксированной позиции
              console.log("Chest X:", chest.x); // Вывод координаты X сундука
              console.log("Chest Y:", chest.y); // Вывод координаты Y сундука
              
             } 
            if (chest) {             
              if (Collision.checkChestCollision(hero, chest)) {
                console.log("Столкновение с сундуком!");
                stopTimer();
                isPaused = true;
                menu.showVictoryScreen();
              } 
            }  
          }
        } 
      }    
      
      
        
      
      let collisionDirection = Collision.getCollisionDirection(hero, currentLevel.platforms);        
      let collisionType = Collision.checkWallCollision(hero, currentLevel.platforms); // Получаем тип платформы 
         
      if (collisionType) {
        if (collisionType === "spikes_L1-2" || collisionType === "spikes_L3") {
          // Обработка столкновения с шипами
          
          if (collisionDirection === "left") {                 
            damage(); 
            hero.x -= 15;                  
          } else if (collisionDirection === "right") {                           
            damage();
            hero.x += 15;                                
          } else if (collisionDirection === "up") {                                    
            damage();
            hero.x -= 5;                     
          } else if (collisionDirection === "down") {                                
            damage();                     
          }      
        } else if (collisionType === "lava_L1-2" || collisionType === "lava_L3" || collisionType === "water_L1-2") {
          // Обработка столкновения с лавой
          if (collisionDirection === "up") { 
            hero.y += 35;                
            hero.hp = 0;                      
          } else if (collisionDirection === "down") {                                
            hero.y += hero.jumpHeight;          
          }      
        } else {
          // ... обычная обработка столкновения со стеной                 
      
            if (collisionDirection === "left") {                 
              hero.x -= hero.speed;                   
            } else if (collisionDirection === "right") {                           
              hero.x += hero.speed;                                
            } else if (collisionDirection === "up") {                                    
              hero.groundLevel = Collision.getPlatformHeightFromBottomCollision(hero, currentLevel.platforms) - hero.height;          
            } else if (collisionDirection === "down") {                                
              hero.y += hero.jumpHeight;          
            }      
        }            
      }     
      else{
        let closest = Collision.findClosestBlockTop(hero, currentLevel.platforms);
        if(closest !== null){          
            hero.groundLevel = closest - 1 - hero.height;           
        }
      }
    
  
      // Обновление таймера задержки урона
      if (spikeDamageCooldown > 0) {
        spikeDamageCooldown -= 1000; // Уменьшаем таймер на 1 секунду в каждом кадре
      }
      
    

      if (Collision.checkFinishCollision(hero, currentLevel.finishZone)) {
        isLevelComplete = true;         
        stopTimer(); 
        isPaused = true;
        menu.showWinScreen();       
      }

      // Проверка, не опустилось ли ХП до нуля
      if (hero.hp <= 0) {          
        hero.updateHP();      
        isPaused = true;
        isGameOver = true; // Устанавливаем флаг экрана смерти
        stopTimer();
        menu.showDeathScreen();        
      }   
      if(currentLevelIndex !== 0){ 
      const targetScrollX = hero.x - canvas.width / 3.5; // Целевое положение скролла
      scrollX = lerp(scrollX, targetScrollX, scrollSpeed / 500); // Линейная интерполяция для плавного движения
      scrollX = Math.max(0, scrollX); // Ограничение слева
      scrollX = Math.min( canvasWidth- canvas.width * (1/2), scrollX, scrollX); 
      // Применение скролла к холсту
      canvas.style.transform = `translateX(-${scrollX}px)`; 
    }            
      
}
function damage(){
  if (spikeDamageCooldown <= 0) {            
    hero.hp -= 5;
    spikeDamageCooldown = 60000; 
  }
}  

function restartLevel() {    
  // Оживление врагов
for (const enemy of currentLevel.enemies) {    
  enemy.hp = enemy.maxHP;
  console.log('123');
}
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function updateTimer() {
  if (!isGameOver) {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;
    let minutes = Math.floor(elapsedTime / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

function stopTimer() {
  clearInterval(timerInterval); 
}


function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateGame();     
  const gameRenderer = new GameRenderer(ctx);
  gameRenderer.renderGame(currentLevel, hero); 
  requestAnimationFrame(gameLoop);  
}

// Загрузка ресурсов
window.onload = () => {
    

    menu = new Menu(playButton);
    currentLevel = levels[currentLevelIndex];    
    
    playButton.addEventListener('click', () => {
    loadLevel(currentLevelIndex);
    menu.showGame();    
    hero = new Hero();
    gameLoop();   
    startTime = Date.now();  
    });
    
    restartButton.addEventListener('click', () => {
      isGameOver = false;
      isPaused = false; 
      menu.hideDeathScreen();       
      hero = new Hero();      
      startTime = Date.now();
    restartLevel();
    });
   
    mainMenuButton.addEventListener('click', () => {
      isGameOver = false;
      isLevelComplete = false;
      isPaused = false; 
      menu.hideDeathScreen(); // Скрываем deathScreen
      menu.hideGame(); // Скрываем игровой экран
      hero = null;  
      
    });
    
    restart1Button.addEventListener('click', () => {      
      isLevelComplete = false;
      isPaused = false; 
      menu.hideWinScreen();      
      hero = new Hero();
      restartLevel();  
      startTime = Date.now();
    });
   
    mainMenu1Button.addEventListener('click', () => {      
      isLevelComplete = false;
      isPaused = false; 
      menu.hideWinScreen(); 
      menu.hideGame();    
      hero = null; 
    });
    restart2Button.addEventListener('click', () => {      
      isLevelComplete = false;
      isPaused = false; 
      menu.hideVictoryScreen();      
      hero = new Hero();  
      chest = null;    
      startTime = Date.now();
      restartLevel();
    });
   
    mainMenu2Button.addEventListener('click', () => {      
      isLevelComplete = false;
      isPaused = false; 
      menu.hideVictoryScreen(); 
      menu.hideGame();    
      hero = null; 
    });
    restart3Button.addEventListener('click', () => {      
      isLevelComplete = false;
      isPaused = false; 
      menu.hidePausScreen();      
      hero = new Hero();      
      startTime = Date.now();
      restartLevel();
    });
   
    mainMenu3Button.addEventListener('click', () => {      
      isLevelComplete = false;
      isPaused = false; 
      menu.hidePausScreen(); 
      menu.hideGame();    
      hero = null; 
    });

    continueButton.addEventListener('click', () => {
      isLevelComplete = false; // Сброс флага завершения уровня
      isPaused = false; 
      menu.hideWinScreen(); // Скрыть экран победы   
      currentLevelIndex++;    
      currentLevel = levels[currentLevelIndex]; 
      loadLevel(currentLevelIndex);
      hero = new Hero();      
      startTime = Date.now();
    }); 
    
    levelButton.addEventListener('click', () => {
      menu.toggleLevels();
    });

    controlsButton.addEventListener('click', () => {
      menu.toggleControls();
    });

    lvl1.addEventListener('click', () => {
      currentLevelIndex = 0;
      currentLevel = levels[currentLevelIndex];
      loadLevel(currentLevelIndex);
      console.log(canvas.wight);  
      menu.toggleLevels();
      menu.showGame();    
      hero = new Hero();
      gameLoop();   
      startTime = Date.now();
    });

    lvl2.addEventListener('click', () => {
      currentLevelIndex = 1;
      currentLevel = levels[currentLevelIndex];
      loadLevel(currentLevelIndex);
      menu.toggleLevels();
      menu.showGame();    
      hero = new Hero();
      gameLoop();   
      startTime = Date.now();
    });

    lvl3.addEventListener('click', () => {
      currentLevelIndex = 2;
      currentLevel = levels[currentLevelIndex];
      loadLevel(currentLevelIndex);
      menu.toggleLevels();
      menu.showGame();    
      hero = new Hero();
      gameLoop();   
      startTime = Date.now();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !isGameOver && !isLevelComplete) {
        isPaused = !isPaused; // Переключение состояния паузы

        if (isPaused) {
          // Остановка музыки или других звуковых эффектов
          // Отображение паузы на экране (например, текстом или изображением)
          menu.showPausScreen();
        } else {
          // Возобновление музыки или других звуковых эффектов
          // Скрытие экрана паузы
          menu.hidePausScreen();
        }
      }
    }); 
 
}