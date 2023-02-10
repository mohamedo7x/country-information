const btn_ser = document.getElementById("country");
let submit = document.querySelector("#btn-submit");
btn_ser.focus();
let countryName = document.getElementById("countryname");
let capital = document.getElementById("capital");
let currencies = document.getElementById("currencies");
let languages = document.getElementById("languages");
let img = document.getElementById("showimg");
let name_dev = document.querySelector("#name-dev");
let infocard = document.querySelector(".info");
setDataFirst();



async function setDataFirst() {
    submit.addEventListener("click", () => {

        GetData();
        infocard.classList.remove("hidden");
        btn_ser.focus();
        name_dev.classList.add("hidden");
        if (btn_ser.value == "O7X"  || btn_ser.value == "o7x" ||btn_ser.value == "O7x" || btn_ser.value == "o7X" )
        {
            img.src = "https://scontent.fcai21-1.fna.fbcdn.net/v/t1.6435-9/59853530_296947614554185_1316391584845004800_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ghGw21nOFSEAX_x0bZr&_nc_ht=scontent.fcai21-1.fna&oh=00_AfBdGPx46ojz99RmYElwQ3vMegM32HSlNJYHAZfzAEwBBg&oe=640D273C";
            document.querySelector(".text-info").classList.add("hidden");
            name_dev.classList.remove("hidden");
            countryName.classList.add("hidden");
        }else {
            name_dev.classList.add("hidden");
            countryName.classList.remove("hidden");
            document.querySelector(".text-info").classList.remove("hidden");
        }
        
    })

}

async function GetData() {

    const fetchData = await fetch(`https://restcountries.com/v3.1/name/${btn_ser.value}?fullText=true`);
    const Data = await fetchData.json();

    countryName.textContent = Data[0].name.common;
    capital.textContent = Data[0].capital;
    for (i in Data[0].currencies) {
        currencies.textContent = i;
        break;
    }
    for (i in Data[0].languages) {
        console.log(i.name);
        languages.textContent = i;
        break;
    }
    img.src = Data[0].flags.png;


}

