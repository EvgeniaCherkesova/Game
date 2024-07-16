class Decoration {
    constructor(type, x, y, width, height) {
      this.type = type;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      
      // Загрузка изображения в зависимости от типа платформы
      this.image = new Image();
      ////////// Ефим
      if (this.type === 'bush1') {
        this.image.src = 'assets/images/decorations/bush1.png';
      }if (this.type === 'bush1') {
        this.image.src = 'assets/images/decorations/bush1.png';

      } else if (this.type === 'Stone floor') {
        this.image.src = 'assets/images/decorations/Stone floor.png';

      } else if (this.type === 'Bone') {
        this.image.src = 'assets/images/decorations/Bone_L1@2x.png';

      } else if (this.type === 'Liana_L2') {
        this.image.src = 'assets/images/decorations/Liana_L2@2x.png';
      } else if (this.type === 'Liana_L3') {
        this.image.src = 'assets/images/decorations/Liana_L3@2x.png';

      } else if (this.type === 'Decor 1_L1') {
        this.image.src = 'assets/images/decorations/Decorations 1_L1@2x.png';
      } else if (this.type === 'Decor 1_L2') {
        this.image.src = 'assets/images/decorations/Decorations 1_L2@2x.png';
      } else if (this.type === 'Decor 1_L3') {
        this.image.src = 'assets/images/decorations/Decorations 1_L3@2x.png';

      } else if (this.type === 'Decor 2_L1') {
        this.image.src = 'assets/images/decorations/Decorations 2_L1@2x.png';
      } else if (this.type === 'Decor 2_L2') {
        this.image.src = 'assets/images/decorations/Decorations 2_L2@2x.png';
      } else if (this.type === 'Decor 2_L3') {
        this.image.src = 'assets/images/decorations/Decorations 2_L3@2x.png';

      } else if (this.type === 'Decor 3_L1') {
        this.image.src = 'assets/images/decorations/Decorations 3_L1@2x.png';
      } else if (this.type === 'Decor 3_L2') {
        this.image.src = 'assets/images/decorations/Decorations 3_L2@2x.png';
      } else if (this.type === 'Decor 3_L3') {
        this.image.src = 'assets/images/decorations/Decorations 3_L3@2x.png';

      } else if (this.type === 'Decor 4_L2') {
        this.image.src = 'assets/images/decorations/Decorations 4_L2@2x.png';

      } else if (this.type === 'Decor 5_L2') {
        this.image.src = 'assets/images/decorations/Decorations 5_L2@2x.png';
      } else if (this.type === 'bush2') {
        this.image.src = 'assets/images/decorations/bush2.png';
      } else if (this.type === 'lian') {
        this.image.src = 'assets/images/decorations/lian.png';
      } else if (this.type === 'shroom') {
        this.image.src = 'assets/images/decorations/shroom.png';
      } else if (this.type === 'grib2') {
        this.image.src = 'assets/images/decorations/grib2.png';
      }else if (this.type === 'volkano') {
        this.image.src = 'assets/images/decorations/volkano.png';
      } 
  
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