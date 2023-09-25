import {getData, getPlayer} from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";
import { Cauldron } from "./cauldron.mjs";
import { PotionBag } from "./PotionBag.mjs";
import { Character } from "./Character.mjs";

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

        // showPotions(bagPotions);dataPlayer.players[0].name, 50, 100, 50, bagPotions.potions

        const newCharacter = Character.from(dataPlayer, bagPotions.potions)

        newCharacter.drinkEmAll();

        // showCharacter(newCharacter, dataPlayer);


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

const showCharacter = (newCharacter, dataPlayer) => {
    console.log(`${newCharacter.fullName} the ${dataPlayer.players[0].class}`);
    console.log(`---------------------------------`);
    console.log(`Health: ${newCharacter.health}`);
    console.log(`Magick: ${newCharacter.magick}`);
    console.log(`Stamina: ${newCharacter.stamina}`);

    newCharacter.potions.forEach((element, index) => {
        console.log(`Potion ${index + 1}: ${element.name}`)
    });
}
executePlayer();