const houses = [
    {
        image: "1.jpg",
        meterage: 200,
        area: "ستارخان",
        seller: "محمدی 09370379599"
    },
    {
        image: "2.jpg",
        meterage: 74,
        area: "ونک",
        seller: "عباسی 09370379599"
    },
    {
        image: "3.jpg",
        meterage: 130,
        area: "زعفرانیه",
        seller: "احمدی 09370379599"
    },
    {
        image: "4.jpg",
        meterage: 1050,
        area: "سعادت آباد",
        seller: "ساعی 09370379599"
    },
    {
        image: "5.jpg",
        meterage: 90,
        area: "قیطریه",
        seller: "مرتضوی 09370379599"
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
        const sellerDive = document.createElement("div");
        sellerDive.className = "seller-small";
        sellerDive.textContent = `اطلاعات فروشنده: ${house.seller}`;
        cardDive.appendChild(sellerDive);
    });
}
render();
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

// کدهای مربوط به وبلاگ
const text1 = document.getElementById("coming-soon");
const words1 = ["Coming Soon..."];
let wordIndex1 =0;
let index1 = 0;
let showCursor1 = true;
function textload1(){
    text1.textContent = words1[wordIndex1].substring(0, index1);
    if (index1 > words1[wordIndex1].length){
        wordIndex1 +=1;
        if (wordIndex1 === words1.length){
            wordIndex1 = 0;
        }
        index1 = 0;
        text1.textContent = "";
    }
    index1++;
    const timer = setTimeout(textload1, 200)
}
textload1();