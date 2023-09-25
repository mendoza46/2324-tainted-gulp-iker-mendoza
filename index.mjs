import {getData, getPlayer} from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";
import { Cauldron } from "./cauldron.mjs";
import { PotionBag } from "./PotionBag.mjs";

const execute = async (dataPlayer) => {
    try{
        const data = await getData();
        // console.log(data);

        // showIngredients(data);

        // //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        // //Creamos el caldero de pociones
        const cauldron = new Cauldron(ingredients);

        let potions = [];

        const bagPotions = new PotionBag(potions);

        bagPotions.createPotions(dataPlayer.players[0].pouch_aged, cauldron);

        showPotions(bagPotions);


        // let result = dataPlayer.players[0].pouch_red.filter((item,index)=>{
        //     console.log(item)
        // })
        // console.log(result);

        // const ingredientes = PotionBag.createPotions(ingredients, cauldron);
        // console.log(ingredientes)

        // //creamos pociones
        // const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        // showPotion(potion1);

        // const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        // showPotion(potion2);

        // const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        // showPotion(potion3);
        
        // const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        // // console.log(potion4)
        // 

    } catch (error) {
        console.log(error)

    }
} 

const executePlayer = async () => {
    try{
        const dataPlayer = await getPlayer();
        execute(dataPlayer);

    } catch (error) {
        console.log(error)

    }
} 

const showPotions = (bagPotions) => {
    bagPotions.potions.forEach(element => {
        console.log(`name: ${element.name}`);
        console.log(`value: ${element.value}`);
        console.log(`weight: ${element.weight}`);
        console.log(`time: ${element.time}`);
        console.log(`-----------------------------
        `);
    });
}

executePlayer();