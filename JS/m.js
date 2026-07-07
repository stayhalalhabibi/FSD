// COMPOUND INTEREST CALCI
// A = P(1 + r/n)^nt

function calculate(){
    
     const totalAmount = document.getElementById("total-amount");
     const principalInput = document.getElementById("principal");
     const rateInput = document.getElementById("rate");
     const yearsInput = document.getElementById("years");

     let p = principalInput.value;
     let r = rateInput.value/100;
     let y = yearsInput.value;

     const result = p * Math.pow((1 + r / 1), 1 * y)
     
    // totalAmount.textContent = "$" +  result.toFixed(2);

    totalAmount.textContent = result.toLocaleString(undefined,{style:"currency",
     currency: "USD"
    });

}