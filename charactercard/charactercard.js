const character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,

    damage: function () {
    // find the right section...Array.findIndex will work here
    this.health -= 20
    if (this.health == 0) {
        alert("Your character has died.")
    }
    },

    levelUp: function () {
    // find the right section...Array.findIndex will work here
    this.level += 1
    },
};

const charName = document.getElementById("name");
const charClass = document.getElementById("class");
const level = document.getElementById("level");
const health = document.getElementById("health");

charName.innerHTML = character.name;
charClass.innerHTML = "<strong>Class:</strong> " + character.class;
level.innerHTML = "<strong>Level:</strong> " + character.level;
health.innerHTML = "<strong>Health:</strong> " + character.health;

document.querySelector("#takeDamage").addEventListener("click", function () {
    character.damage();
    health.innerHTML = "<strong>Health:</strong> " + character.health;
});

document.querySelector("#levelUp").addEventListener("click", function () {
    character.levelUp();
    level.innerHTML = "<strong>Level:</strong> " + character.level;
});
