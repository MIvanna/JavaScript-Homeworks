/*Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()! */

function accountBalance(cash) {
    let moneyBalance = 6000;
    let userChoise = parseInt(prompt(`To withdrawn money, press 1 
    To insert money, press 2 
    To view the account balance press 3`));

    if (userChoise === 1) {
        let cash = parseInt(prompt("How much money would you like to withdraw?"));
        if(cash <= moneyBalance){
            let currentAmount = moneyBalance - cash;
        alert(`You have withdrawn ${cash} euro.
        You have ${currentAmount} euro left on your ballance.`)
        return currentAmount
        } else if(cash >= moneyBalance) {
            alert("You have not enough money.")
        }

    } else if (userChoise === 2) {
        let ammountToInsert = parseInt(prompt("How much money would you like to insert?"));
        let currentAmount = moneyBalance + ammountToInsert;
        console.log(`You have inserted ${ammountToInsert} euro. Your account ballance is ${currentAmount} `)
    } else if (userChoise === 3) {
        console.log(`You have ${moneyBalance} euros left on your account`)
    }
}
accountBalance()

