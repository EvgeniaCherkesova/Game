class Enemy {
    constructor(type, x, y, startX, endX, width, height, maxHP) {
        this.type = type; // Тип врага (например, 'walking', 'flying')
        this.x = x; // Начальная позиция по горизонтали
        this.y = y; // Начальная позиция по вертикали 
        this.startX = startX;      
        this.endX = endX; // Конечная позиция по горизонтали       
        this.width = width; // Ширина
        this.height = height; // Высота
        this.maxHP = maxHP;
        this.hp = maxHP;        
        this.speed = 1; // Скорость движения
        this.direction = 1; // Направление движения (1 - вправо, -1 - влево)  
        this.attackCooldownTime = 6000; // 6 секунд в миллисекундах
        this.attackCooldown = 0; // Текущий кулдаун   
        this.damage = 10; 
        this.isAttacking = false;
        this.isPatroling = false;
        this.isActive = false;
        

        switch (this.type) {
            case 'walking':
                this.run = new Image();
                this.run.src = "assets/images/enemies/run.png"; 
                this.run2 = new Image();
                this.run2.src = "assets/images/enemies/run2.png";
                this.attack = new Image();
                this.attack.src = "assets/images/enemies/attack.png"; 
                this.attack2 = new Image();
                this.attack2.src = "assets/images/enemies/attack2.png";
                this.currentFrame = 0; // Текущий кадр анимации
                this.frameWidth = 140; // Ширина одного кадра в спрайт-листе
                this.frameHeight = 150; // Высота одного кадра в спрайт-листе
                this.totalFrames = 6; // Общее количество кадров в спрайт-листе
                this.animationSpeed = 10; // Скорость анимации (количество кадров в секунду)        
                this.lastFrameTime = Date.now();  
                break;
            case 'boss':
                this.run = new Image();
                this.run.src = "assets/images/boss/run.png"; 
                this.run2 = new Image();
                this.run2.src = "assets/images/boss/run2.png";
                this.attack = new Image();
                this.attack.src = "assets/images/boss/attack1.png"; 
                this.attack2 = new Image();
                this.attack2.src = "assets/images/boss/attack2.png";
                this.currentFrame = 0; // Текущий кадр анимации
                this.frameWidth = 404; // Ширина одного кадра в спрайт-листе
                this.frameHeight = 340; // Высота одного кадра в спрайт-листе
                this.totalFrames = 6; // Общее количество кадров в спрайт-листе
                this.animationSpeed = 40; // Скорость анимации (количество кадров в секунду)        
                this.lastFrameTime = Date.now(); 
                break;                   
        }    // Спрайты
             
        
    }    
  
    update(hero) {     
        if(this.hp > 0){            
            
            // 1. Проверяем тип врага
            switch (this.type) {
                case 'walking':
                    this.updateWalking(hero);
                    break;
                case 'boss':
                    this.updateBoss(hero);                    
                    break;                   
                }               
            
            // Обновление анимации
            if (Date.now() - this.lastFrameTime > 5000 / this.animationSpeed) {
                this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
                this.lastFrameTime = Date.now();
            }     
            
        }      
    }    

    takeDamage(damage) {
        this.hp -= damage;
        if (this.hp <= 0) {
            this.die();
        }
    }
    
    die() {
        if (this.type === 'boss') {
            this.chest = new Chest(this.x, this.y); 
          }
        console.log("Враг уничтожен!");
        
    }           
            
  
    render(ctx) {
        // Отрисовка спрайта       
        if (this.isAttacking) {        
            if(this.direction === 1){
              this.drawSprite(ctx, this.attack);
            }        
            else{
              this.drawSprite(ctx, this.attack2);
            }
        } else if(this.isPatroling||this.isActive){        
            if(this.direction === 1){
              this.drawSprite(ctx, this.run);
            }        
            else{
              this.drawSprite(ctx, this.run2);
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

    updateWalking(hero){
        if (this.x === this.endX) {
            this.direction = -1; // Разворачиваем врага
        }   
        else if (this.x === this.startX) {
            this.direction = 1; // Разворачиваем врага
        }
        if (hero.x !== undefined && hero.y !== undefined && 
            (hero.x + hero.width/2 > this.x && this.direction === -1 ||hero.x - hero.width/2< this.x && this.direction === 1) &&
            Math.abs(hero.y  - this.y) <= 10 && 
            hero.x >= this.startX && hero.x <= this.endX) { // Проверка границ
            // Герой находится на пути движения врага, в диапазоне ±10 пикселей по вертикали и в пределах границ
            this.direction *= -1;
             // Поворачиваемся к герою 
            this.isPatroling = false;
        } else {            
            this.isPatroling = true;                
            }        
        if (this.isPatroling){
            this.x += this.speed * this.direction;
        }
        if (this.attackCooldown > 0) {
            this.attackCooldown -= 20;
            this.isAttacking = true; 
            this.speed = 0;               
        }  
        else if(this.attackCooldown <= 0){
            this.isAttacking = false;
            this.speed = 1; 
        }   
        
    }
    updateBoss(hero) {
         
        if (this.x >= this.endX) {
            this.direction = -1; // Разворачиваем врага                       
        }   
        else if (this.x <= this.startX) {
            this.direction = 1; // Разворачиваем врага                        
        }
        if (hero.x >= this.startX && hero.x <= this.endX && 
            (hero.x > this.x && this.direction === -1 || 
            hero.x < this.x && this.direction === 1)) {
            this.isActive = true;                                
        } else {            
            this.isPatroling = true;                
        }           
        if(this.isPatroling){
            this.x += this.speed * this.direction;
        } 
        if (this.attackCooldown > 0) {
            this.attackCooldown -= 20;
            this.isAttacking = true; 
            this.speed = 0;               
        }  
        else if(this.attackCooldown <= 0){
            this.isAttacking = false;
            this.speed = 4; 
        }   
       
        
    }
    
    
    // Функция расчета расстояния
    distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    updateBossHP() {
        const bossHpFill = document.getElementById('boss-hp-fill');       
      
        bossHpFill.style.width = `${this.hp / 50 * 100}%`; // Задаем ширину в процентах
        
      }
}