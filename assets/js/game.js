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
var enemyHealth = 10;
var enemyAttack = 12;


var fight = function () {
    window.alert("Welcome to Robot Gladiators!");
    // if player choses to fight, then fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemyHealth by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemyHealth
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove players health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }

        // if player choses to skip   
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option.  Try again!");
    }

    
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    if (enemyHealth <= 0) {
        
    } else {
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    };
        
    };

fight();