// =============================
// Part 1: Variables & Conditionals
// =============================
let userName = "Margaret";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// =============================
// Part 2: Custom Functions
// =============================

// Function 1: Greeting
function greetUser(name) {
  alert("Hello, " + name + "!");
}

// Function 2: Change title color
function changeTitleColor() {
  let title = document.getElementById("mainTitle");
  title.style.color = "green";
}

// =============================
// Part 3: Loops
// =============================

// For loop example
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list before adding

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
}

// While loop example
let count = 0;
while (count < 3) {
  console.log("While loop count: " + count);
  count++;
}

// =============================
// Part 4: DOM Interactions
// =============================

// DOM 1: Button click greeting
document.getElementById("greetBtn").addEventListener("click", function() {
  greetUser(userName);
});

// DOM 2: Button changes title color
document.getElementById("colorBtn").addEventListener("click", changeTitleColor);

// DOM 3: Button generates number list
document.getElementById("listBtn").addEventListener("click", showNumbers);
