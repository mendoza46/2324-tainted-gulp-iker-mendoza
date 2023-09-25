export class PotionBag {
    
    constructor(potions){
        this.potions = potions;
    }

    createPotions = (ingredients, cauldron) => {

        for(let i = 0; i < ingredients.length;i++){
            for(let j = i + 1; j < ingredients.length; j++){
                const potion = cauldron.createPotion(ingredients[i], ingredients[j])
                this.potions.push(potion)
            }
        }
        return new PotionBag;
    }
}