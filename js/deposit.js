document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newdepositAmountString)

    const depositTotal = document.getElementById('deposit-total');
    const previoustotalDepositString = depositTotal.innerText;
    const previousTotalDeposit = parseFloat(previoustotalDepositString)

    const CurrentDepositTotal = previousTotalDeposit + newDepositAmount;
    

    depositTotal.innerText = CurrentDepositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat(previousBalanceString);

    const currentTotalBalance = previousTotalBalance + newDepositAmount;

    balanceTotalElement.innerText = currentTotalBalance;

    depositField.value = '';
})