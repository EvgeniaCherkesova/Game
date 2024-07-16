class Platform {
    constructor(type, x, y, width, height) {
      this.type = type;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      
      // Загрузка изображения в зависимости от типа платформы
      ///// Ефим добавление / замещение текстур /////
      this.image = new Image();
      if (this.type === 'Cobblestone_L1-2') {
        this.image.src = 'assets/images/walls/Cobblestone_L1-2@2x.png';

      } else if (this.type === 'Cobblestone_L3') {
        this.image.src = 'assets/images/walls/Cobblestone_L3@2x.png';

      } else if (this.type === 'Spruce planks_L2') {
        this.image.src = 'assets/images/walls/Spruce planks_L2@2x.png';
        
      } else if (this.type === 'Spruce planks_L3') {
        this.image.src = 'assets/images/walls/Spruce planks_L3@2x.png';

      } else if (this.type === 'Mossy Cobblestone_L1') {
        this.image.src = 'assets/images/walls/Mossy Cobblestone_L1@2x.png';

      } else if (this.type === 'Mossy Cobblestone_L2') {
        this.image.src = 'assets/images/walls/Mossy Cobblestone_L2@2x.png';
        
      } else if (this.type === 'Mossy Cobblestone_L3') {
        this.image.src = 'assets/images/walls/Mossy Cobblestone_L3@2x.png';
        
      } else if (this.type === 'Mossy Spruce planks_L2') {
        this.image.src = 'assets/images/walls/Mossy Spruce planks_L2@2x.png';
        
      } else if (this.type === 'Mossy Spruce planks_L3') {
        this.image.src = 'assets/images/walls/Mossy Spruce planks_L3@2x.png';
        
      } else if (this.type === 'spikes_L1-2') {
        this.image.src = 'assets/images/walls/Thorns_L1-2@2x.png';

      } else if (this.type === 'spikes_L3') {
        this.image.src = 'assets/images/walls/Thorns_L3@2x.png';

      } else if (this.type === 'lava_L1-2') {
        this.image.src = 'assets/images/walls/Block_with_lava_stage1_L1-2@2x.png';

      } else if (this.type === 'lava_L3') {
        this.image.src = 'assets/images/walls/Block_with_lava_stage1_L3@2x.png';

      } else if (this.type === 'water_L1-2') {
        this.image.src = 'assets/images/walls/Block_with_water_stage1_L1-2@2x.png';

      }  else if (this.type === 'lian') {
        this.image.src = 'assets/images/walls/stone.jpeg';
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