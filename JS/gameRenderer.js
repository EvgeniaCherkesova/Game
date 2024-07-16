class GameRenderer {
    constructor(ctx) {
      this.ctx = ctx;
    }
  
    renderGame(currentLevel, hero) {
        
        currentLevel.background.render(this.ctx);
        updateTimer();
  
        for (const platform of currentLevel.platforms) {
          platform.render(this.ctx);
        }
        for (const enemy of currentLevel.enemies) {
          enemy.render(this.ctx);
        }
        
        for (const decoration of currentLevel.decoration) {
          decoration.render(this.ctx);
        }
        
        currentLevel.finishZone.render(this.ctx);
             
        hero.render(this.ctx); 
        if (chest) {
          chest.render(ctx);      
        } 
   }
}