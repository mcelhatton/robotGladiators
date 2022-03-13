var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
} else {
    console.log("This will run instead.");
}

var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 0;
var enemyAttack = 12;

var fight = function () {
    window.alert("Welcome to Robot Gladiators!");

    enemyHealth = enemyHealth - playerAttack;
    
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    };
        playerHealth = playerHealth - enemyAttack;
    };

fight();