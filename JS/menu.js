class Menu {
    constructor() {
      this.body = document.body;
      this.gameContainer = document.getElementById('gameContainer');
      this.startScreen = document.getElementById('startScreen');
      this.deathScreen = document.getElementById('deathScreen');
      this.winScreen = document.getElementById('winScreen');      
      this.levels = document.getElementById('levels');      
      this.controls = document.getElementById('controls');
      this.victoryScreen = document.getElementById('finalWin');
      this.pausScreen = document.getElementById('paused');
    }
  
    showGame() {
      this.gameContainer.style.display = 'block';
      this.body.style.backgroundImage = 'none';
      this.startScreen.style.display = 'none';
    }
  
    hideGame() {
      this.gameContainer.style.display = 'none';
      this.startScreen.style.display = 'block';
      this.body.style.backgroundImage = 'url("assets/images/buttons/image 1.png")'; 
    }
    showDeathScreen() {
      this.deathScreen.style.visibility = 'visible'; 
    }
    showVictoryScreen(){
      this.victoryScreen.style.visibility = 'visible'; 
    }
    hideVictoryScreen(){
      this.victoryScreen.style.visibility = 'hidden'; 
    }
    hideDeathScreen() {
      this.deathScreen.style.visibility = 'hidden'; 
    }
    showWinScreen() {
      this.winScreen.style.visibility = 'visible'; 
    }
    hideWinScreen() {
      this.winScreen.style.visibility = 'hidden';  
    }
    showPausScreen(){
      this.pausScreen.style.visibility = 'visible';
    }
    hidePausScreen(){
      this.pausScreen.style.visibility = 'hidden';
    }
    ////////////////
    toggleLevels() {
      if (this.levels.style.visibility === 'visible') {
        // Если скрыт, показываем
        this.levels.style.visibility = 'hidden';
      } else {
        if (this.controls.style.visibility === 'visible') {
          // Если скрыт, показываем
          this.controls.style.visibility = 'hidden';
        }
        // Если показан, скрываем
        this.levels.style.visibility = 'visible';
      }
    }   
    toggleControls() {
      if (this.controls.style.visibility === 'visible') {
        // Если скрыт, показываем
        this.controls.style.visibility = 'hidden';
      } else {
        if (this.levels.style.visibility === 'visible') {
          // Если скрыт, показываем
          this.levels.style.visibility = 'hidden';
        }
        // Если показан, скрываем
        this.controls.style.visibility = 'visible';
      }
    } //////////////  
  }
