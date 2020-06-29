class Player extends Enemy {
    constructor(scene) {
        super({
            scene,
            x: 150,
            y: config.height / 2, 
            texture: 'ship',
            frame: 'ship1',
            velocity: 500,
            bullet: {delay: 500, texture: 'fires', velocity: 750},
            origin: {x: 1, y: 0.5}
        });

        // Сгенерировать набор фреймов текстуры, необходимых для анимации
        const frames = this.scene.anims.generateFrameNames('ship', {
            prefix: 'ship',
            start: 1,
            end: 4
        });

        // Создать новую анимацию на основе полученного набора фреймов
        this.scene.anims.create({
            key: 'shipMove',
            frames,
            frameRate: 24,
            repeat: -1
        });

        // Запустить анимацию
        this.play('shipMove');
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