//get input value
function getInput(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputFiledText = inputFiled.value;
    const inputFiledNumber = parseFloat(inputFiledText);
    inputFiled.value = '';
    return inputFiledNumber;
}
//get  amount value
function getUpdate(output, amount) {
    const outputFiledNumber = innerTextvalue(output)
    const updateOutput = outputFiledNumber + amount;
    document.getElementById(output).innerText = updateOutput;
}
//get innerTextvalue value
function innerTextvalue(id) {
    const getId = document.getElementById(id);
    const Text = getId.innerText;
    const value = parseFloat(Text);
    return value;

}

//get total deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInput('deposit-input');
    if (amount > 0 ) {
        getUpdate('total-deposit', amount);
        updatBalance(amount, true);
    }


})

// get total withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInput('withdraw-amount');
    const balance = innerTextvalue('total-balance');

    if (0 < amount && amount <= balance) {
        getUpdate('total-withdraw', amount);
        updatBalance(amount, false);
    }

})
//update baalnce
function updatBalance(amount, isadd) {
    const previousBalanceNumber =innerTextvalue('total-balance')
    let totalBalance;
    if (isadd == true) {
        totalBalance = previousBalanceNumber + amount;
    }
    else {
        totalBalance = previousBalanceNumber - amount;
    }
    document.getElementById('total-balance').innerText = totalBalance;
}