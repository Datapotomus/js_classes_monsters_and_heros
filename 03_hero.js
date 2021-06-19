/**
 * It's time to create a hero to dispatch these pesky monsters.
 *
 * Copy your code from the previous exercise.
 *
 * Now, create a NEW class called "Hero" that EXTENDS the LivingThing class.
 *
 * NOTE: Check out the following to figure out how to extend an class
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends
 *
 * Add a method to the Hero class named "attack" that takes as a parameter a LivingThing object.
 * The method should do three things:
 * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
 * 2. Reduce the hero's health by a random value between 0 and 10.
 * 3. Print out how much damage the monster and hero did to each other.
 *
 * NOTE: To point you in the right direction: check out
 * the getRandomIntInclusive function on this page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
 *
 * Give the Hero class another method named "fight" that takes as a parameter an array of LivingThing objects
 * and does the following:
 *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
 *     - But, don't attack if the LivingThing is already dead!
 *  - Repeat the process until all the monsters or the hero is dead.
 *
 * Finally, you will need to instantiate your hero object with the name into a variable named "hero". Give them 100 health and a
 * name of your choice.
 */


 (function(){
    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////
    // Put your code here!
    ///////////////////////////
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    class LivingThing {
        constructor(name, health){
            this.name = name;
            this.health = health;
        }
        isAlive(){
            if (this.health > 0) {
                return true
            } else {
                return false
            }
        }
    }

    class Hero extends LivingThing {
        constructor(name, health){
            super(name, health);
        }
        attack(livingThing){
            let monsterDamage = getRandomInt(10)
            let heroDamage  = getRandomInt(10)
            livingThing.health -= monsterDamage
            this.health -= heroDamage
            console.log(`${livingThing.name} took ${monsterDamage}, and Hero took ${heroDamage}`);
            console.log(`${livingThing.name}'s health is ${livingThing.health}, and Hero's health is ${this.health}`);
        }
        fight(monsters = []){
            for (let monster of monsters) {
                if (monster.isAlive()) {
                    while (monster.isAlive() && this.isAlive()) {
                        this.attack(monster)
                    }
                } else {
                    console.log(`Monster is dead`)
                }
                // console.log(monster.name + " is " + (monster.isAlive() ? "alive" : "dead") );
            }
        }
    }

    let rat = new LivingThing("Rat", 5);
    let goblin = new LivingThing("Goblin", 30);
    let orge = new LivingThing("Ogre", 80)

    let monsters = [rat, goblin, orge];
    let hero = new Hero ("Matt", 100)
    

    //The code below should work when you are done
    console.log("A hero emerges!");

    console.log("The noble " + hero.name + " has vowed to defeat the monsters and save the realm");
    console.log("Will they be victorious?");

    hero.fight(monsters);

    if (hero.isAlive()) {
        console.log("The hero, " + hero.name + ", prevailed!");
    }
    else {
        console.log(hero.name + " was bested by the monsters. We are doomed");
    }

})();