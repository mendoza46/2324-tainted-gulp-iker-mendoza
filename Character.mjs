

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
            this.fullName = playerData.players[0].name + " the " + playerData.players[0].class,
            this.health = 50,
            this.magick = 130,
            this.stamina = 200,
            this.potions = potions
        )
    }

    drinkEmAll(){
        console.log(this.potions)
    }
}