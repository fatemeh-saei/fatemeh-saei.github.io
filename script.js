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
        area: "قیطریه",
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
        sellerName: "عباسی",
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
function render() {
    container.innerHTML = "";
    houses.forEach(house => {
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
let areaName = [];
function renderArea() {
    houses.forEach(area => {
        let emp = true;
        for (let i = 0; i < areaName.length; i++) {
            if (areaName[i] === area.area) {
                emp = false;
            }
        }
        if (emp === true) {
            areaName.push(area.area);
            const filterDiv = document.createElement("div");
            filterDiv.className = "right-filter-container";
            filterarea.appendChild(filterDiv);
            const filterSelect = document.createElement("input");
            filterSelect.className = "locationClass";
            filterSelect.type = "radio";
            filterSelect.name = "drone";
            filterSelect.value = area.area;
            filterDiv.appendChild(filterSelect);
            const filterLabel = document.createElement("label");
            filterLabel.className = "filter-Label";
            filterLabel.textContent = area.area;
            filterDiv.appendChild(filterLabel);
        }
        emp = true;
    });
    const filterButton = document.createElement("div");
    filterButton.className = "filter-button";
    filterButton.textContent = "اعمال فیلتر";
    filterButton.addEventListener("click", filterLocation);
    filterarea.appendChild(filterButton);
    const removeFilter = document.createElement("div");
    removeFilter.className = "filter-button";
    removeFilter.textContent = "حذف فیلتر";
    removeFilter.addEventListener("click", removeCards);
    removeFilter.addEventListener("click", render);
    filterarea.appendChild(removeFilter);
}
renderArea();
// کدهای مربوط به نمایش نام در صفحه درباره ما
const text = document.getElementById("title");
const words = ["فاطمه دستمالچی ساعی"];
let wordIndex = 0;
let index = 0;
let showCursor = true;
function textload() {
    text.textContent = words[wordIndex].substring(0, index);
    if (index > words[wordIndex].length) {
        wordIndex += 1;
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
        index = 0;
        text.textContent = "";
    }
    index++;
    const timer = setTimeout(textload, 200)
}
textload();
setInterval(() => {
    if (showCursor) {
        text.style.borderRight = "";
        showCursor = false;
    } else {
        text.style.borderRight = "2px solid #13142f";
        showCursor = true;
    }
}, 300)
// کدهای مربوط به اسکرول
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    setTimeout(function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 200)
}
// کدهای مربوط به منوی آکاردئون در وبلاگ
let acc = document.querySelectorAll(".accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active1");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// کدهای مربوط به تشخیص فیلتر
function filterLocation() {
    removeCards();
    let ele = document.getElementsByName('drone');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            houses.forEach(element => {
                if (element.area === ele[i].value) {
                    loadItem(element);
                }
            })
        }
    }
}
// کدهای مربوط به خالی کردن
function removeCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(element => {
        element.remove();
        renderMyAds();
    });
}
// کدهای مربوط به اعمال فیلتر
function loadItem(element) {
    const cardDive = document.createElement("div");
    cardDive.className = "card";
    container.appendChild(cardDive);
    const cardImg = document.createElement("img");
    cardImg.src = `images/${element.image}`;
    cardImg.alt = "image of house";
    cardImg.className = "card-small";
    cardDive.appendChild(cardImg);
    const areaDive = document.createElement("div");
    areaDive.className = "area-small";
    areaDive.textContent = `منطقه: ${element.area}`;
    cardDive.appendChild(areaDive);
    const meterageDive = document.createElement("div");
    meterageDive.className = "meterage-small";
    meterageDive.textContent = `متراژ: ${element.meterage} متر`;
    cardDive.appendChild(meterageDive);
    const sellerNameDive = document.createElement("div");
    sellerNameDive.className = "seller-small";
    sellerNameDive.textContent = `نام فروشنده: ${element.sellerName}`;
    cardDive.appendChild(sellerNameDive);
    const sellerPhoneDiv = document.createElement("div");
    sellerPhoneDiv.className = "seller-small";
    sellerPhoneDiv.textContent = `شماره تماس فروشنده: ${element.sellerPhone}`;
    cardDive.appendChild(sellerPhoneDiv);
}
// کدهای مربوط به ثبت اطلاعات آگهی و تکمیل فرم
let data = "";
let cardDive = "";
const form = document.querySelector("#form");
form.addEventListener('submit', function (event) {
    const image = document.querySelector('#image');
    const area = document.querySelector('#area');
    const meterage = document.querySelector('#meterage');
    const sellerName = document.querySelector('#sellerName');
    const sellerPhone = document.querySelector('#sellerPhone');
    const myAds = localStorage.getItem('myAds');
    event.preventDefault()
    if (!image.value || !area.value || !meterage.value || !sellerName.value || !sellerPhone.value) {
        alert("پرکردن همه فیلدها الزامی است...!");
    } else {
        data = {
            id: Math.random() * 100,
            image: image.value,
            area: area.value,
            meterage: meterage.value,
            sellerName: sellerName.value,
            sellerPhone: sellerPhone.value
        }
        if (myAds) {
            const oldMyAds = JSON.parse(localStorage.getItem('myAds'));
            localStorage.setItem('myAds', JSON.stringify([...oldMyAds, data]));
            alert("با موفقیت ثبت شد :)");
            renderMyAds();
        } else {
            localStorage.setItem('myAds', JSON.stringify([data]));
            alert("با موفقیت ثبت شد :)");
            renderMyAds();
        }
        let form = document.querySelector("#image");
        form.value = "";
        form = document.querySelector("#area");
        form.value = "";
        form = document.querySelector("#meterage");
        form.value = "";
        form = document.querySelector("#sellerName");
        form.value = "";
        form = document.querySelector("#sellerPhone");
        form.value = "";
    }
})
// کدهای مربوط به ایجاد آگهی جدید
function renderMyAds() {
    const myAdsContainer = document.querySelector('#my-ads-container')
    const myAds = JSON.parse(localStorage.getItem('myAds'))
    myAdsContainer.innerHTML = "";
    myAds?.forEach(house => {
		const cardDive = document.createElement("div");
        cardDive.className = "card";
        cardDive.id = Math.random() * 100;
        myAdsContainer.appendChild(cardDive);
        cardImg = document.createElement("img");
        cardImg.src = house.image;
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
		const removeBtn = document.createElement("button");
        removeBtn.classList.add('delete');
        removeBtn.textContent = "حذف آگهی";
        removeBtn.type = "button";
        removeBtn.onclick = () => {
            if (confirm('این آگهی حذف شود؟')) {
                cardDive.remove();
                sync();
            }
        }
        cardDive.appendChild(removeBtn);
    });
}
renderMyAds();

function sync() {
    localStorage.setItem('myAds', JSON.stringify(data));
}