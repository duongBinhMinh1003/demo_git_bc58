function chuyenTien(){
    var exchangeEl=document.getElementById("exchange-us").value;
    var vndong=23500;
    var dollar=23500 * exchangeEl;
    document.getElementById("result").innerText=`${dollar.toLocaleString()} vnd`; 
    document.getElementById("result").classList.add("warning-info");


} 