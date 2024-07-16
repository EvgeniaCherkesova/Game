class Hero {
    constructor() {
      this.x = currentLevel.initialPosition.x;
      this.y = currentLevel.initialPosition.y;
      this.width = 60;
      this.height = 127;
      this.isSprinting = false;
      this.speed = 4;
      this.isJumping = false;
      this.jumpHeight = 14;
      this.jumpVelocity = 0;
      this.gravity = 0.5;
      this.attacking = false;
      this.attackCooldown = 0;
      this.hp = 100; 
      this.isDashCooldown = false; // Флаг затенения
      this.dashCooldownTimer = 0; // Таймер кулдауна в секундах (для отображения)
      this.dashCooldown = 0;      
      this.damage = 10;
      this.groundLevel = currentLevel.initialPosition.y; 
      this.direction = 1; 
      // this.HeroAnimation = new HeroAnimation(this);   
      
      this.idleSprite = new Image();
      this.idleSprite.src = "assets/images/hero/idle2.png";
      this.idleSprite2 = new Image();
      this.idleSprite2.src = "assets/images/hero/idle.png";
      this.walkingSprite = new Image();
      this.deadSprite = new Image();
      this.deadSprite.src = "assets/images/hero/idle.png";
      this.deadSprite2 = new Image();
      this.deadSprite2.src = "assets/images/hero/idle.png";
      this.walkingSprite = new Image();
      this.walkingSprite.src = "assets/images/hero/walking.png";
      this.walkingSprite2 = new Image();
      this.walkingSprite2.src = "assets/images/hero/walking2.png";
      this.attackSprite = new Image();
      this.attackSprite.src = "assets/images/hero/attack.png";
      this.attackSprite2 = new Image();
      this.attackSprite2.src = "assets/images/hero/attack2.png";
      this.currentFrame = 0; // Текущий кадр анимации
      this.frameWidth = 140; // Ширина одного кадра в спрайт-листе
      this.frameHeight = 150; // Высота одного кадра в спрайт-листе
      this.totalFrames = 6; // Общее количество кадров в спрайт-листе
      this.animationSpeed = 25; // Скорость анимации (количество кадров в секунду)
      this.currentAnimation  = "idle"; 
      this.lastFrameTime = Date.now();  
    }
  
    update() {
      
      // Передвижение влево-вправо
      if (keysPressed['KeyA'] ^ keysPressed['KeyD']) { // XOR
        if (keysPressed['KeyA']) {
            this.isSprinting = true;        
            hero.x -= hero.speed; 
            this.direction = -1;                  
        } else if (keysPressed['KeyD']) { 
            this.isSprinting = true;          
            hero.x += hero.speed; 
            this.direction = 1;                  
        }            
      }  
      else{
        this.isSprinting = false;
      }           

     // Прыжок
      if (keysPressed['Space'] && !this.isJumping) {
        this.isJumping = true;       
        this.jumpVelocity = -this.jumpHeight;
      }
       
      this.y += this.jumpVelocity;
      this.jumpVelocity += this.gravity;
      if (this.y >= this.groundLevel) { 
        this.isJumping = false;
        this.y = this.groundLevel;
        this.jumpVelocity = 0;
      } 
    
      // Атака
      if (keysPressed['KeyF'] && !this.attacking && this.attackCooldown <= 0)  {
        this.attacking = true;
        this.attackCooldown = 100;        
      
        // Создаем область атаки в направлении взгляда героя
        let attackArea = {
          x: hero.x + hero.width * this.direction, // Центр героя + смещение в направлении взгляда
          y: hero.y, 
          width: 200, // Ширина области атаки
          height: hero.height 
        };        
      
        // Проверяем столкновения с врагами
        for (const enemy of currentLevel.enemies) {
          if (
            attackArea.x < enemy.x + enemy.width &&
            attackArea.x + attackArea.width > enemy.x &&
            attackArea.y < enemy.y + enemy.height &&
            attackArea.y + attackArea.height > enemy.y
          ) {
            
            // Вызываем функцию takeDamage у врага, передавая урон героя
            enemy.takeDamage(this.damage);
          }
        }
      }
      if (this.attackCooldown > 0) {
        this.attackCooldown--;
      } else {
        this.attacking = false; 
      }

       // Рывок
       if (keysPressed['ShiftLeft'] && this.dashCooldown <= 0) {
        this.dash();
        this.dashCooldown = 180; // 3 секунды в кадрах (60 FPS)
        this.isDashCooldown = true; 
        this.dashCooldownTimer = 3; //  Инициализация таймера 3 секунды
        }
        if (this.dashCooldown > 0) {
          this.dashCooldown--;
          if (this.dashCooldown % 60 === 0) { // Каждую секунду
            this.dashCooldownTimer--; 
          }
        }
        if(this.dashCooldown <= 0){
          this.isDashCooldown = false;
        }
        if (this.isDashCooldown) {
          document.querySelector('.shift').style.visibility = 'visible';;
          document.getElementById("shiftCD").textContent = this.dashCooldownTimer;
        } else {
          document.querySelector('.shift').style.visibility = 'hidden';
          document.getElementById("shiftCD").textContent = ""; // Очищаем текст
        }           
    
        // Ограничение перемещения по границам
        this.x = Math.max(0, Math.min(this.x, canvas.width - this.width));
        this.y = Math.max(0, Math.min(this.y, canvas.height - this.height));      
        // this.HeroAnimation.update(); 

        if (Date.now() - this.lastFrameTime >= 500) { // Изменение интервала на 1000 мс (1 секунда)
          this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
          this.lastFrameTime = Date.now();
        }      
      }       
  
    render(ctx) { 
      // this.HeroAnimation.render(ctx); 
      ctx.fillStyle = '#cccccc00';
      ctx.fillRect(hero.x, hero.y, hero.width, hero.height);
      if (this.attacking) {        
        if(this.direction === 1){
          this.drawSprite(ctx, this.attackSprite);
        }        
        else{
          this.drawSprite(ctx, this.attackSprite2);
        }
      } else if (this.isSprinting) {        
        if(this.direction === 1){
          this.drawSprite(ctx, this.walkingSprite);
        }        
        else{
          this.drawSprite(ctx, this.walkingSprite2);
        }
      } else if (this.hp <= 0){        
        if(this.direction === 1){        
          this.drawSprite(ctx, this.deadSprite);
        }        
        else{
          this.drawSprite(ctx, this.deadSprite2);
        }
      }
        else{
          if(this.direction === 1){
            this.drawSprite(ctx, this.idleSprite);
          }        
          else{
            this.drawSprite(ctx, this.idleSprite2);
          }
      }
    }  
    
    drawSprite(ctx, sprite) {
      ctx.drawImage(
        sprite,
        this.currentFrame * this.frameWidth, // Sprite X position
        0, // Sprite Y position
        this.frameWidth, // Sprite width
        this.frameHeight, // Sprite height
        this.x, // Canvas X position
        this.y, // Canvas Y position
        this.width, // Canvas width
        this.height // Canvas height
      );
    }

    updateHP() {
      const hpFill = document.getElementById('hp-fill');
      const hpText = document.getElementById('hp-text');

      hpFill.style.width = `${this.hp}%`; // Задаем ширину полоски в процентах
      hpText.textContent = `${this.hp}/100`; // Обновляем текст
    }    
    
    dash() {
      // Проверяем направление движения и делаем рывок в этом направлении
      if (keysPressed['KeyA']) {
        this.x -= Collision.findClosestBlock(hero, currentLevel.platforms+200); // Изменяем расстояние рывка по желанию 
            
      } else if (keysPressed['KeyD']) {
        this.x += Collision.findClosestBlock(hero, currentLevel.platforms+200); // Изменяем расстояние рывка по желанию        
      }
      console.log(Collision.findClosestBlock(hero, currentLevel.platforms));
    }      
    
  }

  
    
  