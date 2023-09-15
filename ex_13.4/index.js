function tinhToan() {
    var chieudaiEl=document.getElementById("chieu-dai").value;
    var chieurongEl=document.getElementById("chieu-rong").value;
    var chuVi= (parseInt(chieudaiEl) + parseInt(chieurongEl))*2;
    var dienTich=chieudaiEl * chieurongEl;
    document.getElementById("result").innerText=`${chuVi}  ${dienTich}`;
}