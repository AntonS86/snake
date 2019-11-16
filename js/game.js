const game = {
    canvas : null,
    ctx    : null,
    board  : null,
    width: 640,
    height: 360,
    sprites: {
        background: null,
        cell      : null,
    },
    //инициализация
    init() {
        this.canvas = document.getElementById('mycanvas');
        this.ctx    = this.canvas.getContext("2d");
    },

    //старт игры
    start() {
        this.init();
        this.preload((key) => {
            this.run();
        })
    },

    //предзагрузка спрайтов
    preload(callback) {
        let loaded        = 0;
        const required    = Object.keys(this.sprites).length;
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
        this.board.create();
        window.requestAnimationFrame(() => {
            game.ctx.drawImage(this.sprites.background, 0, 0);
            this.board.render();
        });
    }
};

game.start()
