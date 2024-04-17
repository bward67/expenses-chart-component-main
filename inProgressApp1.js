//GLOBALVARIABLES
const popUpBox = document.querySelector(".pop-up-box");
const days = [...document.querySelectorAll(".day")];
const chartBars = [...document.querySelectorAll(".chart-bar")];
const individualChartBars = [
  ...document.querySelectorAll(".individual-chart-bar"),
];
//console.log(individualChartBars);

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

chartBars.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(item);
    popUpBox.classList.remove("show");
    //DONT FORGET TO CHANGE THIS CLICK TO MOUSEOVER
    const thisClicked = e.currentTarget.nextElementSibling
      .getAttribute("data-day")
      .toString();
    console.log(thisClicked);

    popUpBox.classList.add("show");
  });
});

//must remove any class which is on any of the items first
//get dollar values from the array and link them to the day which we already got above
//so I want to go into the dataArray and get the amount that corresponds to the day
//so maybe we get the index of that array item?
//change to mouseover from click

fetchData();
