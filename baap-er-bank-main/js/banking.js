
function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmount
}

function updateTotalField(totalFieldID, amount) {
    const totalField = document.getElementById(totalFieldID);
    const fieldTotalText = totalField.innerText;
    const previousTotal = parseFloat(fieldTotalText);
    totalField.innerText = previousTotal + amount;
}

function updateBalance(amount, isadd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    if (isadd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}



//get deposit button

const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');// get button
    // const depositAmountText = depositInput.value; // get the input of the deposit in the field
    // const depositAmount = parseFloat(depositAmountText); //using parse float so declaring new variable

    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true);
    }

    /*     const depositTotal = document.getElementById('deposit-total');
        const depositTotalText = depositTotal.innerText;
        const previousDepositTotal = parseFloat(depositTotalText);
        depositTotal.innerText = previousDepositTotal + depositAmount; */
    //get current deposit
    /*     const depositTotal = document.getElementById('deposit-total');
        const depositTotalText = depositTotal.innerText; // get the inner text of the input field
    
        const previousDepositTotal = parseFloat(depositTotalText);// using parse float so declaring new variable
        depositTotal.innerText = previousDepositTotal + depositAmount; // set the deposit field in the deposit amount where the value is set */

    //update balance 
    /*     const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal + depositAmount; */

    //clear the deposit value in the text box

})

// withdraw money from the account

//getting withdraw button
const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function () {

    //getting withdraw input area
    /*     const withdrawInput = document.getElementById('withdraw-input');
        // getting value of withdraw input and check it with button
        const withdrawAmount = parseFloat(withdrawInput.value); */
    // getting withdraw total element

    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount);
    }

    /*     const withdrawTotal = document.getElementById('withdraw-total')
    
    
        //creating 
        const previousWithdrawTotalText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
        withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

    // update balance after withdraw


    /*     const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */






})

