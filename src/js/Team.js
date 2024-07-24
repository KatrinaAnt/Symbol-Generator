class Team {
    constructor(enemies) {
        this.enemies = enemies;
    }

    *[Symbol.iterator]() {
        for(let i = 0; i < this.enemies.length; i++) {
            yield this.enemies[i];
        }
    }
}