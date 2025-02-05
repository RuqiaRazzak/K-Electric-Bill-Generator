function generateBill() {
    const customerName = document.getElementById('customerName').value;
    const BillingMonth = document.getElementById('BillingMonth').value;
    const Accountnumber = Number(document.getElementById('Accountnumber').value);
    const numUnits = parseFloat(document.getElementById('numUnits').value);
    const chargePerUnit = parseFloat(document.getElementById('chargePerUnit').value);
   
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(BillingMonth).toLocaleString;
   
    const netAmount = numUnits * chargePerUnit;
    const latePaymentSurcharge = 0.02 * netAmount; 
    const grossAmount = netAmount + latePaymentSurcharge;

   
    const roundedNetAmount = netAmount.toFixed(2);
    const roundedLatePaymentSurcharge = latePaymentSurcharge.toFixed(2);
    const roundedGrossAmount = grossAmount.toFixed(2);

    const billDetails = `
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Billing Month:</strong> ${BillingMonth}</p>
         <p><strong>Account Number:</strong> ${Accountnumber}</p>
        <p><strong>Number of Units:</strong> ${numUnits}</p>
        <p><strong>Charges per Unit:</strong> Rs. ${chargePerUnit.toFixed(2)}</p>
        <p><strong>Net Amount Payable (within Due Date):</strong> Rs. ${roundedNetAmount}</p>
        <p><strong>Late Payment Surcharge:</strong> Rs. ${roundedLatePaymentSurcharge}</p>
        <p><strong>Gross Amount Payable (after Due Date):</strong> Rs. ${roundedGrossAmount}</p>
          <button onclick="window.print()">Print Bill</button>
    `;
  
    document.getElementById('billDetails').innerHTML= billDetails;
   
}