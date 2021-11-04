//assign count to the zero
let count = 0;
let total = 0;

//assignment with using getElementById method
const conter = document.getElementById("count-el");
const increaseBtn = document.getElementById("increment-btn");
const decreaseBtn = document.getElementById("decreasement-btn");
const resetBtn = document.getElementById("reset-btn");
const saveBtn = document.getElementById("save-btn");
const saveElement = document.getElementById("save-element");
const totalAmount = document.getElementById("total-amount");

//using querySelector method
const firstClass = document.querySelector(".firstClass");

// I did it because when the first time I move the mouse over element transition didn't work.
window.addEventListener("load", () => {
  conter.style.transition = "transform 0.7s linear";
  conter.style.opacity = 0.6;
  firstClass.style.transition = "transform 0.5s linear";
  firstClass.style.opacity = 0.6;
  saveElement.style.transition = "transform 0.5s linear";
  saveElement.style.opacity = 0.6;
  totalAmount.style.transition = "transform 0.5s linear";
  totalAmount.style.opacity = 0.6;
});

//using mouseover event on conter
conter.addEventListener("mouseover", () => {
  conter.style.transform = "scale(1.2)";
  conter.style.opacity = 1;
});

//using mouseout event on conter
conter.addEventListener("mouseout", () => {
  conter.style.transform = "scale(1)";
  conter.style.opacity = 0.6;
});

//using mouseover event on firstClass
firstClass.addEventListener("mouseover", () => {
  firstClass.style.transform = "scale(1.2)";
  firstClass.style.opacity = 1;
});

//using mouseout event on firstClass
firstClass.addEventListener("mouseout", () => {
  firstClass.style.transform = "scale(1)";
  firstClass.style.opacity = 0.6;
});

//using mouseover event on saveElement
saveElement.addEventListener("mouseover", () => {
  saveElement.style.transform = "scale(1.2)";
  saveElement.style.opacity = 1;
});

//using mouseout event on saveElement
saveElement.addEventListener("mouseout", () => {
  saveElement.style.transform = "scale(1)";
  saveElement.style.opacity = 0.6;
});

//using mouseover event on totalAmount
totalAmount.addEventListener("mouseover", () => {
  totalAmount.style.transform = "scale(1.2)";
  totalAmount.style.opacity = 1;
});

//using mouseout event on totalAmount
totalAmount.addEventListener("mouseout", () => {
  totalAmount.style.transform = "scale(1)";
  totalAmount.style.opacity = 0.6;
});

//add an event listner to the increaseBtn button
increaseBtn.addEventListener("click", () => {
  //increment operator
  count += 1;
  conter.innerHTML = count;
  colorChanger();
});

//add an event listner to the decreaseBtn button
decreaseBtn.addEventListener("click", () => {
  //decrement operator
  count -= 1;
  // using innerHTML property
  conter.innerHTML = count;
  colorChanger();
});

//add an event listner to the resetBtn button
resetBtn.addEventListener("click", () => {
  //assign to the zero
  count = 0;
  conter.innerHTML = count;
  saveElement.innerHTML = `Previous entries: ${count}`;
  //in order to reset total amount
  total = 0;
  totalAmount.textContent = `We have ${total} passengers`;
  colorChanger();
});

//add an event listner to the saveBtn button
saveBtn.addEventListener("click", () => {
  total += count;
  saveElement.innerHTML += ` + ${count}`;
  count = 0;
  conter.innerHTML = count;
  if (total >= 0) {
    totalAmount.textContent = `We have ${total} passengers`;
  } else {
    total = 0;
    totalAmount.textContent = `We have ${total} passengers`;
  }
});

// in order to avoid repeat I created this function
const colorChanger = () => {
  if (count > 0) {
    //using color property from the style
    conter.style.color = "green";
    firstClass.innerHTML = "People entered:";
  } else if (count < 0) {
    conter.style.color = "red";
    firstClass.innerHTML = "People exited:";
  } else {
    conter.style.color = "wheat";
    firstClass.innerHTML = "People entered:";
  }
};
