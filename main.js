var eKey = document.querySelector(".card.key p:last-child");
var eLocation = document.querySelector(".card.location p:last-child");
var eWhich = document.querySelector(".card.which p:last-child");
var eCode = document.querySelector(".card.code p:last-child");
var alert = document.querySelector(".alert");
var box = document.querySelector(".box")


// tạo sự kiện lên document (là toàn bộ trang web)
document.addEventListener("keydown", function(e) {
    eKey.innerText = e.key //lấy ra tên 
    eCode.innerText = e.code
    eLocation.innerText = e.location
    eWhich.innerText = e.which //lấy ra giá trị ascii

    alert.classList.add("hide")
    box.classList.remove("hide")
    box.childNodes[1].innerText = e.which
})