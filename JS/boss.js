class Boss {
    constructor() {        
        this.x = currentLevel.boss.x; // Начальная позиция по горизонтали
        this.y = currentLevel.boss.y; // Начальная позиция по вертикали 
        this.startX = 700;      
        this.endX = 700; // Конечная позиция по горизонтали       
        this.width = 404; // Ширина
        this.height = 367; // Высота
        this.health = 50;
        this.speed = 1; // Скорость движения
        this.direction = 1; // Направление движения (1 - вправо, -1 - влево)  
        this.attackCooldownTime = 6000; // 6 секунд в миллисекундах
        this.attackCooldown = 0; // Текущий кулдаун   
        this.damage = 10; 
        this.isAttacking = false;
        
        

        // Спрайты
        this.run = new Image();
        this.run.src = "assets/images/boss/run.png"; 
        this.run2 = new Image();
        this.run2.src = "assets/images/boss/run2.png";
        this.attack = new Image();
        this.attack.src = "assets/images/boss/run.png"; 
        this.attack2 = new Image();
        this.attack2.src = "assets/images/boss/run2.png";
        this.currentFrame = 0; // Текущий кадр анимации
        this.frameWidth = 404; // Ширина одного кадра в спрайт-листе
        this.frameHeight = 360; // Высота одного кадра в спрайт-листе
        this.totalFrames = 6; // Общее количество кадров в спрайт-листе
        this.animationSpeed = 10; // Скорость анимации (количество кадров в секунду)        
        this.lastFrameTime = Date.now();       
        
    }
  
    update(heroX, heroY) {     
        if(this.health > 0){
            if (this.x === this.endX) {
                this.direction = -1; // Разворачиваем врага
            }   
            else if (this.x === this.startX) {
                this.direction = 1; // Разворачиваем врага
            } 
            if (heroX !== undefined && heroY !== undefined && 
                (heroX+35 > this.x && this.direction === -1 || heroX-40 < this.x && this.direction === 1) &&
                Math.abs(heroY - this.y) <= 10 && 
                heroX >= this.startX && heroX <= this.endX) { // Проверка границ
                // Герой находится на пути движения врага, в диапазоне ±10 пикселей по вертикали и в пределах границ
                this.direction *= -1; // Поворачиваемся к герою 
            } else {
                // Герой вне поля зрения или на другом уровне
                // Проверяем, не пора ли вернуться к стандартному движению
                if (this.x === this.endX || this.x === this.startX) {
                    this.direction *= 1; // Разворачиваем врага
                }
            } 
            
            if (this.attackCooldown > 0) {
                this.attackCooldown -= 20;
                this.isAttacking = false;
            }            
            
            // Обновление позиции
            this.x += this.speed * this.direction;
            // Обновление анимации
            if (Date.now() - this.lastFrameTime > 1000 / this.animationSpeed) {
                this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
                this.lastFrameTime = Date.now();
            }     
        } 
             
    }    

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.die();
        }
    }
    
    die() {
        
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
        } else  {        
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
}