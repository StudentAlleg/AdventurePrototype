class Loop {
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
}


class Level1 extends AdventureScene {
    constructor() {
        super("level1", "Level 1");
    }

    onEnter() {
        let pos1 = [this.playW * 0.33, this.h * 0.5]
        let pos2 = [this.playW * 0.66, this.h * 0.5]


        let key1 = this.add.text(pos1[0], pos1[1], "🔑")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Key with the label 1.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key1');
                this.tweens.add({
                    targets: key1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key1.destroy()
                });;
            });
        
        
        let key2 = this.add.text(pos2[0], pos2[1], "🔑")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Key with the label 2.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key2');
                this.tweens.add({
                    targets: key2,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key2.destroy()
                });;
            });

        let circle1Target = new Loop();
        circle1Target.push(pos2);
        circle1Target.push(pos1);

        let circle1 = this.add.circle(pos1[0], pos1[1], this.s * 10, 0xFF0000)
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
            });

        let circle2Target = new Loop();
        circle2Target.push(pos1);
        circle2Target.push(pos2);

        let circle2 = this.add.circle(pos2[0], pos2[1], this.s * 10, 0x00FF00)
        .setInteractive()
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
            });

    }
}
    

class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
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
    scene: [Intro, Level1, Demo2, Outro],
    title: "Adventure Game",
});

