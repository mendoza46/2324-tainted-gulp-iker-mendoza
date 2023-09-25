

export class Character{
    constructor(fullName, health, magick, stamina, potions){
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(playerData, potions){
        return new Character(
            this.fullName = playerData.players[0].name,
            this.health = Math.floor(Math.random() * 100),
            this.magick = Math.floor(Math.random() * 100),
            this.stamina = Math.floor(Math.random() * 100),
            this.potions = potions
        )
    }
}