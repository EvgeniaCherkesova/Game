class Chest {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.image = new Image(); 
      this.image.src = 'assets/images/decorations/chest.png'; 
    }
  
    render(ctx) {
      ctx.drawImage(this.image, this.x, this.y); // Отрисовка сундука
    }
  }