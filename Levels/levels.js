const levels = [
    {
      
      ///// Ефим редактирование 3-х уровней /////
      platforms: [
        //Пол№1
        //Платформа принимает тип(normal, lava, water, spikes), 
        //первые два числа далее его смещение от левого края экрана и от верхнего края соответственно
        //последние две цифры определяют высоту и ширину платформы 
        new Platform('Cobblestone_L1-2', 630, 950, 70, 70),
        new Platform('lava_L1-2', 700, 950, 70, 70),
        new Platform('Cobblestone_L1-2', 770, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 840, 950, 70, 70),
        new Platform('Mossy Cobblestone_L1', 910, 950, 70, 70),  
         //Пол№2 
        new Platform('Cobblestone_L1-2', 980, 880, 70, 70), 
        new Platform('Cobblestone_L1-2', 1050, 880, 70, 70), 
        new Platform('Cobblestone_L1-2', 1120, 880, 70, 70),     
        //Пол№3
        new Platform('Cobblestone_L1-2', 0, 810, 70, 70),
        new Platform('Cobblestone_L1-2', 70, 810, 70, 70),
        new Platform('Cobblestone_L1-2', 350, 810, 70, 70),
        new Platform('Mossy Cobblestone_L1', 420, 810, 70, 70),
        new Platform('Cobblestone_L1-2', 1120, 810, 70, 70),
        new Platform('Cobblestone_L1-2', 1190, 810, 70, 70),
        //Пол№4     
        new Platform('Cobblestone_L1-2', 140, 740, 70, 70),
        new Platform('Mossy Cobblestone_L1', 210, 740, 70, 70),
        new Platform('spikes_L1-2', 350, 778, 70, 32),
        new Platform('spikes_L1-2', 420, 778, 70, 32),
        new Platform('Cobblestone_L1-2', 840, 740, 70, 70),     
        new Platform('Mossy Cobblestone_L1', 1260, 740, 70, 70),
        new Platform('Mossy Cobblestone_L1', 1330, 740, 70, 70),
        new Platform('Mossy Cobblestone_L1', 1400, 740, 70, 70),

        //пол№5
        new Platform('Cobblestone_L1-2', 210, 670, 70, 70),
        new Platform('Cobblestone_L1-2', 280, 670, 70, 70), 
        new Platform('Cobblestone_L1-2', 560, 670, 70, 70), 
        new Platform('Cobblestone_L1-2', 630, 670, 70, 70), 
        new Platform('Cobblestone_L1-2', 700, 670, 70, 70), 
        new Platform('Cobblestone_L1-2', 840, 670, 70, 70), 
        new Platform('Cobblestone_L1-2', 1400, 670, 70, 70),
        new Platform('Cobblestone_L1-2', 1470, 670, 70, 70),
        new Platform('lava_L1-2', 1540, 670, 70, 70),
        new Platform('lava_L1-2', 1610, 670, 70, 70),
        new Platform('Cobblestone_L1-2', 1680, 670, 70, 70),
        new Platform('Cobblestone_L1-2', 1750, 670, 70, 70),
        new Platform('Cobblestone_L1-2', 1820, 670, 70, 70),
        //Пол№6
        new Platform('spikes_L1-2', 630, 638, 70, 32),
        new Platform('Cobblestone_L1-2', 840, 600, 70, 70),
        //Пол№7   
        new Platform('Cobblestone_L1-2', 0, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 70, 530, 70, 70),         
        new Platform('Cobblestone_L1-2', 280, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 350, 530, 70, 70),
        new Platform('water_L1-2', 420, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 490, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 840, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 910, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 980, 530, 70, 70),
        //Пол№8
        new Platform('spikes_L1-2', 910, 498, 70, 32), 
      
      ],
      //Враги принимает тип(walking, и т.д.), 
      //первые два числа далее его смещение от левого края экрана и от верхнего края соответственно
      //следующие 2 устанавливают его зону патрулирования
      //последние две цифры определяют высоту и ширину врага
      enemies: [
        new Enemy('walking', 10, 890, 10, 550, 70, 140, 10),
      ], 
      //Декорации принимает тип(lian, и т.д.), 
      //первые два числа далее его смещение от левого края экрана и от верхнего края соответственно
      //последние две цифры определяют высоту и ширину декорации
      decoration: [
        new Decoration('Bone', 700, 653, 70, 25),

        new Decoration('Stone floor', 0, 1014, 1003, 140),
        new Decoration('Stone floor', 436, 1014, 1003, 140),

        new Decoration('Decor 1_L1', 0, 509, 140, 53),
        new Decoration('Decor 2_L1', 0, 930, 630, 124),
        new Decoration('Decor 3_L1', 980, 955, 454, 102),

      ],
      //сюда передается смещение выхода и его высота с шириной
      finishZone: new FinishZone(1780, 533, 114, 140),
      background: new Background(0),
      //сюда предается позиция персонажа на уровне
      initialPosition: { x: 10, y: 670 }
    } , 
    {
      platforms: [
        //Пол№1
        new Platform('Cobblestone_L1-2', 669, 950, 70, 70),
        new Platform('Cobblestone_L1-2', 739, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 809, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 879, 950, 70, 70), 
        new Platform('Mossy Cobblestone_L2', 949, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 1859, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 1929, 950, 70, 70), 
        new Platform('lava_L1-2', 1999, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 2069, 950, 70, 70), 
        new Platform('Mossy Cobblestone_L2', 2139, 950, 70, 70), 
        new Platform('Mossy Cobblestone_L2', 2209, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 2279, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 2349, 950, 70, 70), 
        new Platform('lava_L1-2', 2419, 950, 70, 70), 
        new Platform('Cobblestone_L1-2', 2489, 950, 70, 70), 
        new Platform('Mossy Spruce planks_L2', 3399, 950, 70, 70),  
        // //Пол№2        
        new Platform('Cobblestone_L1-2', 179, 880, 70, 70),
        new Platform('Cobblestone_L1-2', 249, 880, 70, 70),
        new Platform('Cobblestone_L1-2', 319, 880, 70, 70),
        new Platform('Mossy Cobblestone_L2', 389, 880, 70, 70),
        new Platform('Cobblestone_L1-2', 949, 880, 70, 70),
        new Platform('spikes_L1-2', 2279, 918, 70, 32),
        new Platform('Cobblestone_L1-2', 2559, 880, 70, 70),
        new Platform('Mossy Spruce planks_L2', 2979, 880, 70, 70),
        new Platform('Spruce planks_L2', 3049, 880, 70, 70),
        new Platform('Mossy Spruce planks_L2', 3119, 880, 70, 70),
        new Platform('Spruce planks_L2', 3189, 880, 70, 70),
        new Platform('spikes_L1-2', 3399, 918, 70, 32),
        // //Пол№3
        new Platform('spikes_L1-2', 319, 848, 70, 32),
        new Platform('Cobblestone_L1-2', 459, 810, 70, 70),
        new Platform('Cobblestone_L1-2', 529, 810, 70, 70),
        new Platform('Mossy Cobblestone_L2', 1019, 810, 70, 70),
        new Platform('Cobblestone_L1-2', 1089, 810, 70, 70),
        new Platform('Cobblestone_L1-2', 1789, 810, 70, 70),
        new Platform('Cobblestone_L1-2', 2629, 810, 70, 70),
        new Platform('Spruce planks_L2', 3259, 810, 70, 70),
        new Platform('Mossy Spruce planks_L2', 3329, 810, 70, 70),
        new Platform('Mossy Spruce planks_L2', 3469, 810, 70, 70),
        new Platform('Spruce planks_L2', 3539, 810, 70, 70),
        //Пол№4     
        new Platform('Mossy Cobblestone_L2', 0, 740, 39, 70), 
        new Platform('Mossy Cobblestone_L2', 39, 740, 70, 70), 
        new Platform('Mossy Cobblestone_L2', 109, 740, 70, 70),
        new Platform('Mossy Spruce planks_L2', 1159, 740, 70, 70),
        new Platform('Spruce planks_L2', 1229, 740, 70, 70),
        new Platform('Mossy Spruce planks_L2', 1299, 740, 70, 70),
        new Platform('Spruce planks_L2', 1509, 740, 70, 70),
        new Platform('Mossy Spruce planks_L2', 1579, 740, 70, 70),
        new Platform('Spruce planks_L2', 1649, 740, 70, 70),
        new Platform('Mossy Cobblestone_L2', 2139, 740, 70, 70),
        new Platform('Spruce planks_L2', 2699, 740, 70, 70),
        new Platform('Mossy Spruce planks_L2', 2769, 740, 70, 70),
        new Platform('Mossy Spruce planks_L2', 2839, 740, 70, 70),
        new Platform('Spruce planks_L2', 2909, 740, 70, 70),
        new Platform('Mossy Spruce planks_L2', 3609, 740, 70, 70),
        new Platform('Mossy Spruce planks_L2', 3679, 740, 70, 70),
        new Platform('Mossy Spruce planks_L2', 3749, 740, 70, 70),
        // //Пол№5        
        new Platform('Mossy Cobblestone_L2', 599, 670, 70, 70), 
        new Platform('Cobblestone_L1-2', 739, 670, 70, 70),
        new Platform('Mossy Cobblestone_L2', 809, 670, 70, 70),
        new Platform('Mossy Cobblestone_L2', 879, 670, 70, 70), 
        new Platform('Spruce planks_L2', 1299, 670, 70, 70), 
        new Platform('Spruce planks_L2', 1369, 670, 70, 70), 
        new Platform('Mossy Spruce planks_L2', 1439, 670, 70, 70), 
        new Platform('Spruce planks_L2', 1509, 670, 70, 70), 
        new Platform('Mossy Cobblestone_L2', 1719, 670, 70, 70), 
        new Platform('spikes_L1-2', 2139, 708, 70, 32), 
        new Platform('Mossy Cobblestone_L2', 2279, 670, 70, 70), 
        // //Пол№6 
        new Platform('spikes_L1-2', 809, 638, 70, 32),       
        new Platform('Cobblestone_L1-2', 1859, 600, 70, 70),
        new Platform('spikes_L1-2', 2279, 638, 70, 32),
        // //Пол№7        
        new Platform('Cobblestone_L1-2', 1929, 530, 70, 70),
        new Platform('Mossy Cobblestone_L2', 1999, 530, 70, 70),
        new Platform('water_L1-2', 2069, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 2139, 530, 70, 70),
        new Platform('Mossy Cobblestone_L2', 2209, 530, 70, 70),
        new Platform('Mossy Cobblestone_L2', 2349, 530, 70, 70),
        new Platform('water_L1-2', 2419, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 2489, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 2559, 530, 70, 70),
        new Platform('Cobblestone_L1-2', 2629, 530, 70, 70),
        // //Пол№8        
        new Platform('spikes_L1-2', 2559, 498, 70, 32),
      ],
      enemies: [
        new Enemy('walking', 739, 815, 669, 879, 70, 140, 10),
        new Enemy('walking', 1299, 535, 1299,1509, 70, 140, 10),
        new Enemy('walking',  2699, 605, 2699, 2909, 70, 140, 10),
      ], 
      decoration: [
        new Decoration('Liana_L2', 2279, 530, 70, 70),
        new Decoration('Liana_L2', 3399, 810, 70, 70),

        new Decoration('Stone floor', 0, 1014, 1003, 140),
        new Decoration('Stone floor', 1003, 1014, 1003, 140),
        new Decoration('Stone floor', 2006, 1014, 1003, 140),
        new Decoration('Stone floor', 2785, 1014, 1003, 140),

        new Decoration('Decor 1_L2', 0, 950, 435, 84),
        new Decoration('Decor 2_L2', 425, 960, 244, 92),
        new Decoration('Decor 3_L2', 1019, 930, 840, 125),
        new Decoration('Decor 4_L2', 2559, 930, 840, 125),
        new Decoration('Decor 5_L2', 3469, 930, 273, 117),
      ],
      finishZone: new FinishZone(3680, 600, 114, 140),
      background: new Background(1),
      initialPosition: { x: 10, y: 600 }
    } ,
    {
      platforms: [
        //Пол№1
        new Platform('spikes_L3', 459, 988, 70, 32),
        new Platform('Cobblestone_L3', 529, 950, 70, 70),
        new Platform('lava_L3', 599, 950, 70, 70),
        new Platform('Cobblestone_L3', 669, 950, 70, 70),
        new Platform('Cobblestone_L3', 739, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 809, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 879, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 1789, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 1859, 950, 70, 70),
        new Platform('Cobblestone_L3', 1929, 950, 70, 70),
        new Platform('Cobblestone_L3', 1999, 950, 70, 70),
        new Platform('Cobblestone_L3', 2069, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2139, 950, 70, 70),
        new Platform('Cobblestone_L3', 2209, 950, 70, 70),
        new Platform('Cobblestone_L3', 2489, 950, 70, 70),
        new Platform('lava_L3', 2559, 950, 70, 70),
        new Platform('lava_L3', 2629, 950, 70, 70),
        new Platform('lava_L3', 2699, 950, 70, 70),
        new Platform('lava_L3', 2769, 950, 70, 70),
        new Platform('lava_L3', 2839, 950, 70, 70),
        new Platform('lava_L3', 2909, 950, 70, 70),
        new Platform('Cobblestone_L3', 2979, 950, 70, 70),

        new Platform('Mossy Cobblestone_L3', 3049, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 3119, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 3189, 950, 70, 70),
        new Platform('Cobblestone_L3', 3259, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 3329, 950, 70, 70),

        new Platform('Cobblestone_L3', 3399, 950, 70, 70),
        new Platform('Cobblestone_L3', 3469, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 3539, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 3609, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 3679, 950, 70, 70),

        new Platform('Mossy Cobblestone_L3', 3749, 950, 70, 70),
        new Platform('Cobblestone_L3', 3819, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 3889, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 3959, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 4029, 950, 70, 70),

        new Platform('Mossy Cobblestone_L3', 4099, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 4169, 950, 70, 70),
        new Platform('Cobblestone_L3', 4239, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 4309, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 4379, 950, 70, 70),

        new Platform('Mossy Cobblestone_L3', 4449, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 4519, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 4589, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 4659, 950, 70, 70),
        new Platform('Mossy Cobblestone_L3', 4729, 950, 70, 70),

        new Platform('Mossy Cobblestone_L3', 4799, 950, 70, 70),
        new Platform('Cobblestone_L3', 4869, 950, 70, 70),
        new Platform('Cobblestone_L3', 4939, 950, 70, 70),
        new Platform('Cobblestone_L3', 5009, 950, 70, 70),
        new Platform('Cobblestone_L3', 5079, 950, 70, 70),

        new Platform('lava_L3', 5149, 950, 70, 70),
        new Platform('lava_L3', 5219, 950, 70, 70),
        new Platform('lava_L3', 5289, 950, 70, 70),
        new Platform('lava_L3', 5359, 950, 70, 70),
        new Platform('lava_L3', 5429, 950, 70, 70),
        // //Пол№2        
        new Platform('Mossy Spruce planks_L3', 179, 880, 70, 70),
        new Platform('Spruce planks_L3', 249, 880, 70, 70),
        new Platform('Mossy Spruce planks_L3', 319, 880, 70, 70),
        new Platform('Mossy Spruce planks_L3', 389, 880, 70, 70),
        new Platform('Mossy Spruce planks_L3', 949, 880, 70, 70),
        new Platform('spikes_L3', 1789, 918, 70, 32),
        new Platform('Cobblestone_L3', 2279, 880, 70, 70),
        new Platform('Cobblestone_L3', 2979, 880, 70, 70),
        new Platform('Cobblestone_L3', 5079, 880, 70, 70),

        // //Пол№3
        new Platform('spikes_L3', 319, 848, 70, 32),
        new Platform('Spruce planks_L3', 1019, 810, 70, 70),
        new Platform('Mossy Spruce planks_L3', 1229, 810, 70, 70),
        new Platform('Spruce planks_L3', 1649, 810, 70, 70),
        new Platform('Mossy Spruce planks_L3', 1719, 810, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2349, 810, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2699, 810, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2769, 810, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2909, 810, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2979, 810, 70, 70),
        new Platform('Mossy Cobblestone_L3', 5079, 810, 70, 70),
        //Пол№4     
        new Platform('Mossy Spruce planks_L3', 0, 740, 39, 70), 
        new Platform('Mossy Spruce planks_L3', 39, 740, 70, 70), 
        new Platform('Mossy Spruce planks_L3', 109, 740, 70, 70),
        new Platform('Mossy Spruce planks_L3', 1089, 740, 70, 70),
        new Platform('spikes_L3', 1229, 778, 70, 32),
        new Platform('Mossy Spruce planks_L3', 1579, 740, 70, 70),
        new Platform('Cobblestone_L3', 2419, 740, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2979, 740, 70, 70),
        new Platform('Mossy Cobblestone_L3', 5079, 740, 70, 70),
        //Пол№5 
        new Platform('Mossy Spruce planks_L3', 1159, 670, 70, 70), 
        new Platform('Mossy Spruce planks_L3', 1299, 670, 70, 70),
        new Platform('Spruce planks_L3', 1369, 670, 70, 70),
        new Platform('Mossy Spruce planks_L3', 1439, 670, 70, 70),
        new Platform('Spruce planks_L3', 1509, 670, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2489, 670, 70, 70),
        new Platform('Mossy Cobblestone_L3', 2629, 670, 70, 70),
        new Platform('Mossy Cobblestone_L3', 5079, 670, 70, 70),
        //Пол№6 
        new Platform('Mossy Cobblestone_L3', 5079, 600, 70, 70),
      ],
      enemies: [
        new Enemy('walking', 669, 825, 669, 879, 70, 140, 10),
        new Enemy('walking', 1299, 535, 1299, 1509, 70, 140, 10),
        new Enemy('walking', 1860, 815, 1860, 2200, 70, 140, 10),
        new Enemy('boss', 3200, 740, 3050, 5000, 70, 250, 90),        

      ], 
      decoration: [
        new Decoration('Liana_L3', 1229, 670, 70, 70),
        new Decoration('Liana_L3', 2559, 670, 70, 70),
        new Decoration('Liana_L3', 2839, 810, 70, 70),

        new Decoration('Stone floor', 0, 1014, 1003, 140),
        new Decoration('Stone floor', 1003, 1014, 1003, 140),
        new Decoration('Stone floor', 2006, 1014, 1003, 140),
        new Decoration('Stone floor', 3009, 1014, 1003, 140),
        new Decoration('Stone floor', 4012, 1014, 1003, 140),
        new Decoration('Stone floor', 4496, 1014, 1003, 140),


        new Decoration('Decor 1_L3', 70, 963, 392, 92),
        new Decoration('Decor 1_L3', 0, 963, 392, 92),
        new Decoration('Decor 2_L3', 949, 930, 840, 125),
        new Decoration('Decor 3_L3', 2282, 965, 208, 76),
      ],
      finishZone: new FinishZone(3000, 1100, 114, 140),
      background: new Background(2),
      initialPosition: { x: 10, y: 600 },      
    } ,                  
  ];
  
  