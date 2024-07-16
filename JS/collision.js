class Collision {   

    static checkEnemyCollision(hero, enemy) {
      // Проверяем пересечение прямоугольников героя и врага
      if (hero.x < enemy.x + enemy.width &&
          hero.x + hero.width > enemy.x &&
          hero.y < enemy.y + enemy.height &&
          hero.y + hero.height > enemy.y) {
        return true;
      }
      return false;
    }
        
    static checkFinishCollision(hero, finishZone) {
      // Проверка столкновения с зоной завершения
      if (hero.x < finishZone.x + finishZone.width &&
          hero.x + hero.width > finishZone.x &&
          hero.y < finishZone.y + finishZone.height &&
          hero.y + hero.height > finishZone.y) {
          return true;
      }
      return false;    
    }

    static checkChestCollision(hero, chest) {       
      // Проверка столкновения с сундуком
      if (hero.x < chest.x + chest.width ||
          hero.x + hero.width > chest.x &&
          hero.y < chest.y + chest.height ||
          hero.y + hero.height > chest.y) {
          return true;
      }
      return false;
    }

    static checkWallCollision(hero, platforms) {
      for (const platform of platforms) {
        if (hero.x < platform.x + platform.width &&
            hero.x + hero.width > platform.x &&
            hero.y < platform.y + platform.height &&
            hero.y + hero.height > platform.y) {
          return platform.type; // Возвращаем тип платформы
        }
      }
      return null; // Если столкновения нет, возвращаем null
    }
    
    static getCollisionDirection(hero, platforms) {
      // Находим ближайшую платформу к персонажу
      let closestPlatform = Collision.findClosestPlatform(hero, platforms);
      if (!closestPlatform) {
        return null; // Нет столкновения
      }
    
      // Определяем направление столкновения
      let direction;
      if (hero.x + hero.width / 2 < closestPlatform.x) { // Столкновение слева
        direction = "left";
      } else if (hero.x + hero.width / 2 > closestPlatform.x + closestPlatform.width) { // Столкновение справа
        direction = "right";
      } else if (hero.y + hero.height / 2 < closestPlatform.y) { // Столкновение сверху
        direction = "up";
      } else if (hero.y + hero.height / 2 > closestPlatform.y + closestPlatform.height) { // Столкновение снизу
        direction = "down";
      }
      
      return direction;
    }
    
    // Вспомогательная функция для поиска ближайшей платформы
    static findClosestPlatform(hero, platforms) {
      let closestPlatform = null;
      let minDistance = Infinity;
      for (let platform of platforms) {
        let distance = Collision.calculateDistance(hero, platform);
        if (distance < minDistance) {
          closestPlatform = platform;
          minDistance = distance;
        }
      }
      return closestPlatform;
    }
    
    // Вычисление расстояния между центром персонажа и центром платформы
    static calculateDistance(hero, platform) {
      let heroCenterX = hero.x + hero.width / 2;
      let heroCenterY = hero.y + hero.height / 2;
      let platformCenterX = platform.x + platform.width / 2;
      let platformCenterY = platform.y + platform.height / 2;
      let dx = heroCenterX - platformCenterX;
      let dy = heroCenterY - platformCenterY;
      return Math.sqrt(dx * dx + dy * dy);
    }

    static getPlatformHeightFromBottomCollision(hero, platforms) {
      let collisionDirection = Collision.getCollisionDirection(hero, platforms);
      if (collisionDirection === "up") {
        let closestPlatform = Collision.findClosestPlatform(hero, platforms);
        return closestPlatform.y; 
      }
      return null; // Столкновения снизу не было
    }   
    static findClosestBlockTop(hero, platforms) {
      let closestPlatform = null;
      let closestDistance = Infinity;

  // Проверяем каждую платформу
      for (const platform of platforms) {
        // Проверяем, находится ли платформа под героем
        if (hero.x < platform.x + platform.width &&
            hero.x + hero.width > platform.x &&
            hero.y + hero.height < platform.y) {
          // Рассчитываем расстояние до платформы
          const distance = platform.y - (hero.y + hero.height);

          // Если расстояние меньше текущего минимального
          if (distance < closestDistance) {
            closestDistance = distance;
            closestPlatform = platform;
          }
        }
      }
      if(closestPlatform.type !== null){
        if(closestPlatform.type === "lava_L1-2" || closestPlatform.type  === "lava_L3" || closestPlatform.type  === "water_L1-2"){
        // Возвращаем Y-координату верхней части ближайшей платформы или null, если платформ нет
          return closestPlatform.y + 35;
        }else if(closestPlatform.type === "spikes_L1-2" || closestPlatform.type === "spikes_L3"){
          return closestPlatform.y + 32; 
        }else {
          return closestPlatform.y;
        }
      }else return null;
    }

    static findClosestBlock(hero, platforms) {
      let closestPlatform = null;
      let closestDistance = 100;
    
      for (const platform of platforms) {
        // Проверяем, есть ли платформа перед героем (в зависимости от направления взгляда)
        if (hero.direction === 1) { // Смотрит вправо
          // Проверяем, есть ли платформа справа от героя
          if (hero.x + hero.width < platform.x + platform.width &&
              hero.x + hero.width > platform.x) {
            // Рассчитываем расстояние до левой границы платформы (край свободного пространства)
            let distance = platform.x - (hero.x + hero.width);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestPlatform = platform;
            }
          }
        } else { // Смотрит влево
          // Проверяем, есть ли платформа слева от героя
          if (hero.x < platform.x + platform.width &&
              hero.x > platform.x) {
            // Рассчитываем расстояние до правой границы платформы (край свободного пространства)
            let distance = (platform.x + platform.width) - hero.x;
            if (distance < closestDistance) {
              closestDistance = distance;
              closestPlatform = platform;
            }
          }
        }
      }
    
      return closestPlatform ? closestDistance : 100; 
    }
}