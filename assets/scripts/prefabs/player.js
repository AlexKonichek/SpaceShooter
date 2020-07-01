class Player extends Enemy {
    constructor(scene) {
        super({
            scene,
            x: 350,
            y: config.height / 2, 
            texture: 'ship',
            frame: 'ship3flight1',
            velocity: 500,  
            inputEnabled : true,                                           
            bullet: {delay: 300, texture: 'fires', velocity: 750},
            origin: {x: 1, y: 0.5}
        });

        // Сгенерировать набор фреймов текстуры, необходимых для анимации
        const frames = this.scene.anims.generateFrameNames('ship', {
            prefix: 'ship3flight',
            start: 1,
            end: 4
        });
        const framesDestroy = this.scene.anims.generateFrameNames('shipDestroy', {
            prefix: 'Ship3_explotion_',
            start: 1,
            end: 11
        });
        // Создать новую анимацию на основе полученного набора фреймов
        this.scene.anims.create({
            key: 'shipMove',
            frames,
            frameRate: 24,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'shipDestroy',
            frames:framesDestroy,
            frameRate: 24,
            repeat: 0
        });

        // Запустить анимацию
        this.play('shipMove');
    }
    upIsDown(){this.body.setVelocity(0);
        this.scene.cursors.up.isDown=true
        
    }
    upIsNotDown(){this.body.setVelocity(0);
        this.scene.cursors.up.isDown=false
        
    }

    downIsDown(){this.body.setVelocity(0);
        this.scene.cursors.down.isDown=true
       
    }
    downIsNotDown(){this.body.setVelocity(0);
        this.scene.cursors.down.isDown=false
       
    }
    move() {
        
        this.body.setVelocity(0);

        if (this.scene.cursors.left.isDown) {
            this.body.setVelocityX(-this.velocity);
        } else if (this.scene.cursors.right.isDown) {
            this.body.setVelocityX(this.velocity);
        }

        if (this.scene.cursors.up.isDown) {
            this.body.setVelocityY(-this.velocity);
        } else if (this.scene.cursors.down.isDown) {
            this.body.setVelocityY(this.velocity);
        }
    }
    

}