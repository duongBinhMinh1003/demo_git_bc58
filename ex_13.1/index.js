function tinhTien(){
    var luong1ngayEl=document.getElementById("luong-1-ngay").value;
    var songayEl= document.getElementById("so-ngay").value;
    console.log({luong1ngayEl, songayEl});
    var tienLuong= (luong1ngayEl * songayEl);
    document.getElementById("result").innerText=`so tien la: ${tienLuong.toLocaleString()} vnd`;
}