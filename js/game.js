const game = {
    canvas : null,
    ctx    : null,
    sprites: {
        background: null,
        cell      : null,
    },

    //старт игры
    start() {
        this.canvas = document.getElementById('mycanvas');
        this.ctx    = this.canvas.getContext("2d");
        this.preload((key) => {
            this.run();
        })
    },

    //предзагрузка спрайтов
    preload(callback) {
        let loaded        = 0;
        const required    = 2;
        const onAssetLoad = () => {
            loaded += 1;

            if (loaded >= required) {
                callback();
            }
        };

        Object.keys(this.sprites).forEach((key) => {
            this.sprites[key]     = new Image();
            this.sprites[key].src = `img/${key}.png`;
            this.sprites[key].addEventListener('load', onAssetLoad);
        });
    },

    //запуск игры
    run() {
        window.requestAnimationFrame(() => {
            game.ctx.drawImage(this.sprites.background, 0, 0);
            game.ctx.drawImage(this.sprites.cell, 320, 180);
        });
    }
};

game.start()
