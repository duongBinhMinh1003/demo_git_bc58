function tinhToan() {
    var soEl= document.getElementById("2-so").value;
    var hang_chuc = Math.floor(soEl/10);
    var hang_don_vi = Math.floor(soEl % 10);
    var sum = parseInt( hang_chuc) + parseInt(hang_don_vi);
    document.getElementById("result").innerText=`${sum}`;
}

