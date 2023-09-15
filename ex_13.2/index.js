 function tinhSum() {
   let num1El=document.getElementById("num-1").value;
   let num2El=document.getElementById("num-2").value;
   let num3El=document.getElementById("num-3").value;
   let num4El=document.getElementById("num-4").value;
   let num5El=document.getElementById("num-5").value;
   let sum=parseInt(num1El) + parseInt(num2El) + parseInt(num3El) + parseInt(num4El) + parseInt(num5El) ;
    document.getElementById('result').innerText=`${sum}`;
 }