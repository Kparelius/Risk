/*
var attackArmies = parseInt(prompt("How many attacking armies?",10));
if (isNaN(attackArmies)){
	alert("Please enter the number of attacking armies.")
}

var defenseArmies = parseInt(prompt("How many defending armies?",10));
if (isNaN(defenseArmies)){
	alert("Please enter the number of defending armies.")
}
*/




var attackArmies = 0;
var defendArmies = 0;

var battle = function () {


    var attackRolls = [];
    var defendRolls = [];

    var attackDiceRoll = function () {
        for (i = 3; i >= 1; i--) {
            var a = Math.floor((Math.random() * 6) + 1);
            attackRolls.push(a);
        }
    };
    attackDiceRoll();

    var defendDiceRoll = function () {
        for (i = 2; i >= 1; i--) {
            var d = Math.floor((Math.random() * 6) + 1);
            defendRolls.push(d);
        }
    };
    defendDiceRoll();

    attackRolls.sort(function (a, b) {
        return b - a
    });
    defendRolls.sort(function (a, b) {
        return b - a
    });

    if (defendRolls[0] >= attackRolls[0]) {
        attackArmies = attackArmies - 1
    } else defendArmies = defendArmies - 1;

    if (defendRolls[1] >= attackRolls[1]) {
        attackArmies = attackArmies - 1
    } else defendArmies = defendArmies - 1;

    if (attackArmies > 3 && defendArmies > 3) {
    battle();
    } else {
        alert(attackArmies+" attacking armies left and "+defendArmies+" defending armies left.");
        //$("body").append("<p>"+attackArmies+" attacking armies left and "+defendArmies+" defending armies left.</p>")
    };

};

$(document).ready(function () {
    $('#battleButton').click(function () {
        attackArmies = $("#att").val();
        defendArmies = $("#def").val();
        battle();
    });
});