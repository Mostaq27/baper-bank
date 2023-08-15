// step-1: add event listener to thr deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposite button clicked')
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
     const newDepositAmountString =depositField.value;
     const newDepositAmount = parseFloat(newDepositAmountString);

      // step-7: clear input field
    depositField.value ='';


     if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
     }
    //   console.log(typeof newDepositAmount);
    //step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //  console.log(typeof previousDepositTotal);
    // step-4: add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

        // step-5: get ballance current total
        const ballanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = ballanceTotalElement.innerText;
        const previousBalanceTotal =parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    ballanceTotalElement.innerText = currentBalanceTotal;

   
})