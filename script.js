const houses = [
    {
        image: "1.jpg",
        meterage: 200,
        area: "ستارخان",
        sellerName: "محمدی",
        sellerPhone: "09370379599"
    },
    {
        image: "2.jpg",
        meterage: 74,
        area: "ونک",
        sellerName: "عباسی",
        sellerPhone: "09370379599"
    },
    {
        image: "3.jpg",
        meterage: 130,
        area: "زعفرانیه",
        sellerName: "احمدی",
        sellerPhone: "09370379599"
    },
    {
        image: "4.jpg",
        meterage: 1050,
        area: "سعادت آباد",
        sellerName: "ساعی",
        sellerPhone: "09370379599"
    },
    {
        image: "5.jpg",
        meterage: 90,
        area: "قیطریه",
        sellerName: "مرتضوی",
        sellerPhone: "09370379599"
    },
    {
        image: "6.jpg",
        meterage: 40,
        area: "منیریه",
        sellerName: "جلیلی",
        sellerPhone: "09370379599"
    }    
]
// کدهای مربوط به بخش منوی سایت
function hide(evt, divName) {
    let i, navContent, navButton;
    navContent = document.getElementsByClassName("navContent");
    for (i = 0; i < navContent.length; i++) {
        navContent[i].style.display = "none";
    }
    navButton = document.getElementsByClassName("navButton");
    for (i = 0; i < navButton.length; i++) {
        navButton[i].className = navButton[i].className.replace(" active", "");
    }
    document.getElementById(divName).style.display = "block";
    evt.currentTarget.className += " active";
}
// کدهای مربوط به نمایش آگهی ها
const container = document.getElementById("container");
function render(){
    container.innerHTML = "";
    houses.forEach(house=>{
        const cardDive = document.createElement("div");
        cardDive.className = "card";
        container.appendChild(cardDive);
        const cardImg = document.createElement("img");
        cardImg.src = `images/${house.image}`;
        cardImg.alt = "image of house";
        cardImg.className = "card-small";
        cardDive.appendChild(cardImg);
        const areaDive = document.createElement("div");
        areaDive.className = "area-small";
        areaDive.textContent = `منطقه: ${house.area}`;
        cardDive.appendChild(areaDive);
        const meterageDive = document.createElement("div");
        meterageDive.className = "meterage-small";
        meterageDive.textContent = `متراژ: ${house.meterage} متر`;
        cardDive.appendChild(meterageDive);
        const sellerNameDive = document.createElement("div");
        sellerNameDive.className = "seller-small";
        sellerNameDive.textContent = `نام فروشنده: ${house.sellerName}`;
        cardDive.appendChild(sellerNameDive);
        const sellerPhoneDiv = document.createElement("div");
        sellerPhoneDiv.className = "seller-small";
        sellerPhoneDiv.textContent = `شماره تماس فروشنده: ${house.sellerPhone}`;
        cardDive.appendChild(sellerPhoneDiv);
    });
}
render();
// کدهای مربوط به نمایش مناطق در فیلتر
const filterarea = document.getElementById("sidebar-right");
function renderArea(){
    houses.forEach(area=>{
        const filterDiv = document.createElement("div");
        filterDiv.className = "right-filter-container";
        filterarea.appendChild(filterDiv);
        const filterSelect = document.createElement("input");
        filterSelect.type = "radio";
        filterSelect.name = "drone"
        filterDiv.appendChild(filterSelect);
        const filterLabel = document.createElement("label");
        filterLabel.className = "filter-Label";
        filterLabel.textContent = area.area;
        filterDiv.appendChild(filterLabel);
    });
    
    
    const filterButton = document.createElement("button");
    filterButton.type = "button";
    filterButton.className = "filter-button";
    filterButton.textContent = "اعمال فیلتر"
    filterarea.appendChild(filterButton);
}
renderArea();
// کدهای مربوط به نمایش نام در صفحه درباره ما
const text = document.getElementById("title");
const words = ["فاطمه دستمالچی ساعی"];
let wordIndex =0;
let index = 0;
let showCursor = true;
function textload(){
    text.textContent = words[wordIndex].substring(0, index);
    if (index > words[wordIndex].length){
        wordIndex +=1;
        if (wordIndex === words.length){
            wordIndex = 0;
        }
        index = 0;
        text.textContent = "";
    }
    index++;
    const timer = setTimeout(textload, 200)
}
textload();
setInterval(()=>{
    if (showCursor){
        text.style.borderRight = "";
        showCursor = false;
    } else {
        text.style.borderRight = "2px solid #13142f";
        showCursor = true;
    }
}, 300)
// کدهای مربوط به اسکرول
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    setTimeout(function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 200)
}
// کدهای مربوط به منوی آکاردئون در وبلاگ
let acc = document.querySelectorAll(".accordion");
let i;

for (i=0; i<acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active1");
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}