/*class Loop {
    //iterate through items one at a time
    constructor() {
        this.pos = 0
        this.array = new Array();
    }

    push(item) {
        this.array.push(item);
    }

    getItem() {
        let item = this.array[this.pos]; //retrieve item to return
        this.pos++; //set the next item to return
        if (this.pos >= this.array.length) { //if there are no more items in the array, go back to the beginning
            this.pos = 0;
        }
        return item;
    }
}*/


class Level1 extends AdventureScene {
    constructor() {
        super("level1", "Level 1");
    }

    onEnter() {
        let pos1 = [this.playW * 0.33, this.h * 0.5]
        let pos2 = [this.playW * 0.66, this.h * 0.5]

        
        let key1 = this.newKey(pos1[0], pos1[1], "1");
        
        let key2 = this.newKey(pos2[0], pos2[1], "2");
        
        let circle1Target = new Loop([pos2, pos1]);

        let circle1 = this.newCircle(pos1[0], pos1[1], this.s * 10, 0xFF0000, "This is a circle.", "That tickles.", circle1Target);
        /*let circle1 = this.add.circle(pos1[0], pos1[1], this.s * 10, 0xFF0000)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This is a circle.")
            })
            .on('pointerdown', () => {
                this.showMessage("That tickles.");
                let target = circle1Target.getItem();
                this.tweens.add({
                    targets: circle1,
                    x: target[0],
                    y: target[1],
                    duration: 500,
                    //onComplete: () => key2.destroy()
                });;
            });*/

        let circle2Target = new Loop([pos1, pos2]);

        let circle2 = this.newCircle(pos2[0], pos2[1], this.s * 10, 0x00FF00, "This is a square.", "That feels weird.", circle2Target);
        /*.setInteractive()
            .on('pointerover', () => {
                this.showMessage("This is a square.")
            })
            .on('pointerdown', () => {
                this.showMessage("That feels weird.");
                let target = circle2Target.getItem();
                this.tweens.add({
                    targets: circle2,
                    x: target[0],
                    y: target[1],
                    duration: 500,
                    //onComplete: () => key2.destroy()
                });;
            });*/

        let door = this.add.text(this.playW * 0.5, this.h * 0.75, "🚪", {align: "center"})
            .setFontSize(this.s * 7)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key1") && this.hasItem("key2")) {
                    this.showMessage("You've got all the keys for this door.");
                } else {
                    this.showMessage("It's locked. Can you find all keys?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key1") && this.hasItem("key2")) {
                    this.loseItem("key1");
                    this.loseItem("key2");
                    this.showMessage("The door opens and you walk through.");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('level2');
                }
            });
        this.centerTextObject(door);
    }
}

class Level2 extends AdventureScene {
    constructor() {
        super("level2", "Level 2");
    }

    onEnter() {

        let pos1 = [this.playW * 0.33, this.h * 0.33]
        let pos2 = [this.playW * 0.66, this.h * 0.33]
        let pos3 = [this.playW * 0.5, this.h * 0.66]

        let key1 = this.newKey(pos1[0], pos1[1], "1");
        let key2 = this.newKey(pos2[0], pos2[1], "2");
        let key3 = this.newKey(pos3[0], pos3[1], "3");

        let circle1Target = new Loop([pos3, pos2, pos1]);
        let circle1 = this.newCircle(pos1[0], pos1[1], this.s * 10, 0xFF0000, "I'm round.", "Watch where you poke that thing.", circle1Target);

        let circle2Target = new Loop([pos1, pos3, pos2]);
        let circle2 = this.newCircle(pos2[0], pos2[1], this.s * 10, 0x00FF00, "Woah watch it!", "Rude.", circle2Target);

        let circle3Target = new Loop([pos2, pos1, pos3]);
        let circle3 = this.newCircle(pos3[0], pos3[1], this.s * 10, 0x0000FF, "Round.", "Round and Around and Around we go.", circle3Target);
    
        let door = this.add.text(this.playW * 0.75, this.h * 0.75, "🚪", {align: "center"})
            .setFontSize(this.s * 7)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key1") && this.hasItem("key2") && this.hasItem("key3")) {
                    this.showMessage("You've got all the keys for this door.");
                } else {
                    this.showMessage("It's locked. Can you find all keys?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key1") && this.hasItem("key2") && this.hasItem("key3")) {
                    this.loseItem("key1");
                    this.loseItem("key2");
                    this.loseItem("key3");
                    this.showMessage("The door opens and you walk through.");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('level3');
                }
            });
        this.centerTextObject(door);
    }
}

class Level3 extends AdventureScene {
    constructor() {
        super("level3", "Level 3");
    }

    onEnter() {

        let pos1 = [this.playW * 0.33, this.h * 0.33]
        let pos2 = [this.playW * 0.66, this.h * 0.33]
        let pos3 = [this.playW * 0.5, this.h * 0.66]

        let key1 = this.newKey(pos1[0], pos1[1], "1");
        let key2 = this.newKey(pos2[0], pos2[1], "2");
        let key3 = this.newKey(pos3[0], pos3[1], "3");

        let circle1Target = new Loop([pos3, pos2, pos1, pos1]);
        let circle1 = this.newCircle(pos1[0], pos1[1], this.s * 10, 0xFF0000, "I'm round.", "Watch where you poke that thing.", circle1Target);

        let circle2Target = new Loop([pos1, pos3, pos3, pos2, pos3]);
        let circle2 = this.newCircle(pos2[0], pos2[1], this.s * 10, 0x00FF00, "Woah watch it!", "Rude.", circle2Target);

        let circle3Target = new Loop([pos3, pos3, pos2, pos1, pos2, pos3, pos1, pos1, pos3]);
        let circle3 = this.newCircle(pos3[0], pos3[1], this.s * 10, 0x0000FF, "Round.", "Round and Around and Around we go.", circle3Target);
    
        let door = this.add.text(this.playW * 0.25, this.h * 0.75, "🚪", {align: "center"})
            .setFontSize(this.s * 7)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key1") && this.hasItem("key2") && this.hasItem("key3") && this.hasItem("key4")) {
                    this.showMessage("You've got all the keys for this door.");
                } else {
                    this.showMessage("It's locked. Can you find all keys?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key1") && this.hasItem("key2") && this.hasItem("key3") && this.hasItem("key4")) {
                    this.loseItem("key1");
                    this.loseItem("key2");
                    this.loseItem("key3");
                    this.loseItem("key4");
                    this.showMessage("The door opens and you walk through.");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('level4');
                }
                else if (!this.hasItem("key4")) {
                    this.showMessage("On closer examination, there seems to already be a key in here!");
                    this.gainItem("key4");
                }
            });
        this.centerTextObject(door);
    }
}

class Level4 extends AdventureScene {
    constructor() {
        super("level4", "Level 4");
    }

    onEnter() {
        let pos1 = [this.playW * 0.5, this.h * 0.25];
        let pos2 = [this.playW * 0.5, this.h * 0.75];
        let pos3 = [this.playW * 0.75, this.h * 0.5];
        let pos4 = [this.playW * 0.25, this.h * 0.5];
        let bkgrdColor = 0x444444;
        
        let key1 = this.newKey(pos1[0], pos1[1], "1");
        let key2 = this.newKey(pos3[0], pos3[1], "2");

        let circle3Target = new Loop([pos4, pos1, pos2, pos3]);
        let circle3 = this.newCircle(pos3[0], pos3[1], this.s * 10, bkgrdColor, " ", " ", circle3Target);

        let circle4Target = new Loop([pos1, pos2, pos3, pos4]);
        let circle4 = this.newCircle(pos4[0], pos4[1], this.s * 10, bkgrdColor, " ", " ", circle4Target);

        let circle1Target = new Loop([pos2, pos3, pos4, pos1]);
        let circle1 = this.newCircle(pos1[0], pos1[1], this.s * 10, 0xFF0000, "I'm round.", "Watch where you poke that thing.", circle1Target);

        let circle2Target = new Loop([pos3, pos4, pos1, pos2]);
        let circle2 = this.newCircle(pos2[0], pos2[1], this.s * 10, 0x00FF00, "I'm round.", "Watch where you poke that thing.", circle2Target);

        let door = this.add.text(this.playW * 0.5, this.h * 0.5, "🚪", {align: "center"})
            .setFontSize(this.s * 7)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key1") && this.hasItem("key2")) {
                    this.showMessage("You've got all the keys for this door.");
                } else {
                    this.showMessage("It's locked. Can you find all keys?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key1") && this.hasItem("key2")) {
                    this.loseItem("key1");
                    this.loseItem("key2");
                    this.showMessage("The door opens and you walk through.");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('outro');
                }
            });
        this.centerTextObject(door);
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Are you capable of leaving?").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('level1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Level1, Level2, Level3, Level4, Outro],
    title: "Escape the Void.",
});

