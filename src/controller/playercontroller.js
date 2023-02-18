class PlayerController extends "../data/playerpiecedata" {
    constructor(startingHealth, startX, startY) {
        super("player", x, y);
        this.health = startingHealth;
    }

    takeDamage(damage) {
        this.health -= damage;
    }

    //Move xChange horizontally, yChange vertically
    move(xChange, yChange) {
        this.x += xChange;
        this.y += yChange;
    }

}