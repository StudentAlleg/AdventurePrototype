A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: 
    - Level1, Level2, Level3, Level4
- **2+ scenes *not* based on `AdventureScene`**:
    Intro, Outro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: newKey(x, y, number)
        This method creates a new key (text object) at the specified x/y, with the specified number.
    - Enhancement 2: newCircle(x, y, r, color, overMessage, downMessage, targetsLoop)
        This method creates a new circle object at the specified x/y, with radious r, with the color specified and with mouse over/ mouse down images. It also takes a Loop object (explained below), that contains different coordinates that on click the circles move to.
    - Enhancement 3: centerTextObject(obj)
        This method centers the supplied text object on its current coordinates (changes the coordinates from being top left to center). This is also used in newKey
    - Enhancement 4: Loop class
        The loop class is initialised with an array object, and will go through it continuously. getItem() returns an item from that array, and moves the curosor forward to select the next object the next time it is called. If there are no more objects in the array, it will set the cursor to the first object. This is used for circles, to hold the different locatoins they will move to.
    - Enhancement 4: playW variable
        This variable contains the width of the actual play area (which is 75% of the whole screen). This makes it easier to position elements.


Experience requirements:
- **4+ locations in the game world**: 
    level1, level2, level3, level4
- **2+ interactive objects in most scenes**:
    All scenes have 5 or more objects that are interactable. These would be circles that move, keys that can be collected, and doors that can be interacted with.
- **Many objects have `pointerover` messages**: 
    - All objects except the gray circles in Level 4 have pointer over text.
- **Many objects have `pointerdown` effects**: 
    - All objects except the gray circles in Level 4 have pointer over text.
- **Some objects are themselves animated**: 
    - All circle objects and key objects are animated to some degree

Asset sources:
- No additional asset sources were created. I liked how Adam Smith used text for keys and door, so decided to use those as well.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.