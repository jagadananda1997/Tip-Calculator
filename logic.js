function calculate(){
    let billAmount = document.getElementById("bill_amount").value;
    let percentage = document.getElementById("percentage").value;
    let amount = billAmount *(percentage/100);
 
    let totalBill = amount + Number(billAmount);
     document.getElementById("tip_amount").value = amount;
    document.getElementById("bill").value = totalBill;
}