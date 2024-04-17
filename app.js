//GLOBALVARIABLES
const popUpBox = document.querySelector(".pop-up-box");
const days = [...document.querySelectorAll(".day")];
const chartBars = [...document.querySelectorAll(".chart-bar")];
const individualChartBars = [
  ...document.querySelectorAll(".individual-chart-bar"),
];
//console.log(individualChartBars);
const mon = document.querySelector(".chart-bar.mon");
console.log(mon);
const tue = document.querySelector(".chart-bar.tue");
console.log(tue);
const wed = document.querySelector(".chart-bar.wed");
console.log(wed);
const thu = document.querySelector(".chart-bar.thu");
console.log(thu);
const fri = document.querySelector(".chart-bar.fri");
console.log(fri);
const sat = document.querySelector(".chart-bar.sat");
console.log(sat);
const sun = document.querySelector(".chart-bar.sun");
console.log(sun);
const popUpBoxMon = document.querySelector(".pop-up-box#mon");
const popUpBoxTue = document.querySelector(".pop-up-box#tue");
const popUpBoxWed = document.querySelector(".pop-up-box#wed");
const popUpBoxThu = document.querySelector(".pop-up-box#thu");
const popUpBoxFri = document.querySelector(".pop-up-box#fri");
const popUpBoxSat = document.querySelector(".pop-up-box#sat");
const popUpBoxSun = document.querySelector(".pop-up-box#sun");

let dataArray = [];

//FUNCTIONS
//fetch data
const fetchData = async () => {
  const response = await fetch("data/data.json");
  const data = await response.json();

  dataArray = data;
  //console.log(dataArray); //we get an array
  // dataArray.push([...data]);
  // console.log(dataArray);

  const daysArray = dataArray.map((item) => {
    return item.day;
  });
  console.log(daysArray);

  const amountArray = dataArray.map((item) => {
    return item.amount;
  });
  //console.log(amountArray);

  let todayNum = new Date().getDay();
  //console.log(todayNum);
  let currentDay = daysArray[todayNum];
  //console.log(currentDay);

  daysArray.forEach((day) => {
    //console.log(day);
    if (day === currentDay) {
      chartBars[todayNum].classList.add("active");
    }
  });
};

//EVENT LISTENERS

//lets just try one first
mon.addEventListener("mouseover", () => {
  popUpBoxMon.classList.add("show");
});
mon.addEventListener("mouseout", () => {
  popUpBoxMon.classList.remove("show");
});
tue.addEventListener("mouseover", () => {
  popUpBoxTue.classList.add("show");
});
tue.addEventListener("mouseout", () => {
  popUpBoxTue.classList.remove("show");
});

wed.addEventListener("mouseover", () => {
  popUpBoxWed.classList.add("show");
});
wed.addEventListener("mouseout", () => {
  popUpBoxWed.classList.remove("show");
});
thu.addEventListener("mouseover", () => {
  popUpBoxThu.classList.add("show");
});
thu.addEventListener("mouseout", () => {
  popUpBoxThu.classList.remove("show");
});

fri.addEventListener("mouseover", () => {
  popUpBoxFri.classList.add("show");
});
fri.addEventListener("mouseout", () => {
  popUpBoxFri.classList.remove("show");
});
sat.addEventListener("mouseover", () => {
  popUpBoxSat.classList.add("show");
});
sat.addEventListener("mouseout", () => {
  popUpBoxSat.classList.remove("show");
});
sun.addEventListener("mouseover", () => {
  popUpBoxSun.classList.add("show");
});
sun.addEventListener("mouseout", () => {
  popUpBoxSun.classList.remove("show");
});

//THIS IS A WORK IN PROGRESS WHICH I WILL COME BACK TO when I learn more
//must remove any class which is on any of the items first
//get dollar values from the array and link them to the day which we already got above
//so I want to go into the dataArray and get the amount that corresponds to the day
//so maybe we get the index of that array item?
//change to mouseover from click

/*  
chartBars.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(item);
    popUpBox.classList.remove("show");
    //DONT FORGET TO CHANGE THIS CLICK TO MOUSEOVER
    const thisClicked = e.currentTarget.nextElementSibling
      .getAttribute("data-day")
      .toString(); //this is not working??
    console.log(thisClicked);

    popUpBox.classList.add("show");
  });
});


*/

fetchData();
