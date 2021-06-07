/**
 * Let's create some objects using ES2015+ (ES6) class syntax!
 *
 * Define a an class below with the name "LivingThing".
 * Give the class a constructor that takes two parameters called "name" and "health".
 *
 * Once you have your class defined, let's create some monsters from the LivingThing class.
 * Create three LivingThing instances from your class, one for each of the monsters below.
 * Be sure to set each new object's name and health!
 *
 * name: "Rat"
 * health: 5
 *
 * name: "Goblin"
 * health: 30
 *
 * name: "Ogre"
 * health: 80
 *
 * Finally, add each of your objects to an array called "monsters"
 *
 * Use the following documentation if you need a refresher on how classes work in JavaScript:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 *
 */

(function(){

    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////
    // Put your code here!
    ///////////////////////////

    
    //The code below should work when you are done
    console.log("Monsters!");

    //for...of loop supported in ES6
    //not compatable before IE edge
    //@see http://www.benmvp.com/learning-es6-for-of-loop/
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    console.log("ES6 for...in");
    for (let monster of monsters) {
        console.log(monster.name + ": " + monster.health);
    }

    //just a spacer
    console.log("===================");

    //for loop loop supported before ES6
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    console.log("for loop for support before ES6");
    for (let i=0; i < monsters.length; i++) {
        console.log(monsters[i].name + ": " + monsters[i].health);
    }

})();
    


    