class EnemyDestroy extends Phaser.GameObjects.Sprite {
    static generate(scene, x, y) {
        return new EnemyDestroy({scene, x, y});
    }
    constructor(data) {
        super(data.scene, data.x, data.y, 'enemiesCrash', 'Ship+animation5');
        this.scene.add.existing(this);

        // Сгенерировать набор фреймов текстуры, необходимых для анимации
        const frames = this.scene.anims.generateFrameNames('enemiesCrash', {
            prefix: 'Ship+animation',
            start: 5,
            end: 13
        });

        // Создать новую анимацию на основе полученного набора фреймов
        this.scene.anims.create({
            key: 'enemiesCrash',
            frames,
            frameRate: 10,
            repeat: 0
        });

        // Запустить анимацию
        this.play('enemiesCrash');

        this.once(Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE, () => {
            this.destroy();
        });
    }
}