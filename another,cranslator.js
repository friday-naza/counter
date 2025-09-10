// COUNTING NUMBER FROM BEGINING
let count = 0;

const display = document.getElementById("counterDisplay");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const resetBtn = document.getElementById("resetBtn");

addBtn.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

subtractBtn.addEventListener("click", () => {
  count--;
  display.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});



// AGE CALCULATOR

function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!birthdate) {
    result.textContent = "Please select your birthdate.";
    return;
  }

  const birth = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  result.textContent = `You are ${age} years old.`;
}


// for mood display color

function darkmood() {
    let darckmood = document.getElementById('firstdiv');
    darckmood.style.backgroundColor = "black";
    darckmood.style.color = 'rgb(186, 185, 183)'
   
}

function lightmood() {
    let darckmood = document.getElementById('firstdiv');
    darckmood.style.backgroundColor = ' rgb(186, 185, 183)';
    darckmood.style.color = 'rgba(242, 225, 192, 1)';
    
}



