export class PotionBag {
    
    constructor(potions){
        this.potions = potions;
    }

    createPotions = (ingredients, cauldron) => {
        for(let i = 0; i < ingredients.length; i++){
            // console.log("ingrediente " + i +ingredients[i])
            // console.log("ingrediente " + i +ingredients[i + 1])
            if(i < 3){
                const potion = cauldron.createPotion(ingredients[i], ingredients[i + 1])
                this.potions.push(potion);
            }
            else{
                const potion = cauldron.createPotion(ingredients[i], ingredients[0])
                this.potions.push(potion);
            }
        }
        return new PotionBag;
    }
}