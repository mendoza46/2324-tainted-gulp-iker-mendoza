

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
            this.health = playerData.players[0].health,
            this.magick = playerData.players[0].magick,
            this.stamina = playerData.players[0].stamina,
            this.potions = potions
        )
    }

    drinkEmAll(data){
        data.ingredients.forEach(element => {
            if(element.name.includes())
            element.effects.forEach(effect => {
                if(effect.includes('Health')){
                    this.health = this.health + element.value;
                }
                else if(effect.includes('Magicka')){
                    this.magick = this.magick + element.value;
                }
                else if(effect.includes('Stamina')){
                    this.stamina = this.stamina + element.value;
                }
                else if(effect.includes('Poison')){
                    this.health = this.health - element.value;
                }
                else{
                    this.health++;
                    this.magick++;
                    this.stamina++;
                }
            })   
        });
        if(this.stamina <= 0){
            console.log(`Joseph está completamente agotado y no puede moverse más`)
        }
        else if(this.health <= 0){
            console.log(`Joseph ha fallecido`);
        }
        else if(this.magick <= 0){
            console.log(`A Joseph le han drenado toda su magia y el hechizo caos del Erudito X.G termina por rematarlo`);
        }
    }
}