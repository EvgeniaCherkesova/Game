class Background {
    constructor(x) {
      this.image = new Image();
      switch (x) {
        case 0:
          this.image.src = 'assets/images/backgrounds/background.png';
          break;
        case 1:
          this.image.src = 'assets/images/backgrounds/background2.png';
          break;
        case 2:
          this.image.src = 'assets/images/backgrounds/background3.png';
          break;
      }
      
  
      this.loaded = false;
      this.image.onload = () => {
        this.loaded = true;
      };
    }
  
    render(ctx) {
      if (this.loaded) {
        ctx.drawImage(this.image, 0, 0, ctx.canvas.width, ctx.canvas.height); // Заполняем весь холст
      }
    }
  }