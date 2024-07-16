class FinishZone {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      
      // Загрузка изображения для выхода
      this.image = new Image();
      this.image.src = 'assets/images/walls/door.png'; // Замените на правильный путь к изображению

      // Установка флага, чтобы узнать, загружено ли изображение
      this.loaded = false;
      this.image.onload = () => {
        this.loaded = true;
      };
    }

    render(ctx) {
      if (this.loaded) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }
  }