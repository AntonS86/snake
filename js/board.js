game.board = {
    game,
    size: 15,
    cells: [],

    //Создание таблицы
    create() {
        this.createCells();
    },

    //Создание ячеек
    createCells() {
        for (let row = 0; row < this.size; row += 1) {
            for (let col = 0; col < this.size; col += 1) {
                this.cells.push(this.createCell(row, col));
            }
        }
    },

    //Создание ячейки
    createCell(row, col) {
        const cellSizes = this.game.sprites.cell.width + 1;
        //смещение от края экрана
        const offsetX = (this.game.width - cellSizes * this.size) / 2;
        const offsetY = (this.game.height - cellSizes * this.size) / 2;
        return {
            row,
            col,
            x: offsetX + cellSizes * col,
            y: offsetY + cellSizes * row,
        };
    },

    render() {
        this.cells.forEach((cell) => {
            this.game.ctx.drawImage(this.game.sprites.cell, cell.x, cell.y);
        })
    },
}
