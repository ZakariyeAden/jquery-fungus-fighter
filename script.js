$(document).ready(onReady);

// State Variables can be declared outside of the onReady

// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackPoints = 100;
let scepter;
let entangle;
let dragon;
let star;
function onReady() {
  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!
  scepter = $(".attack-btn.arcane-scepter").on("click", attackScepter);
  entangle = $(".attack-btn.entangle").on("click", attackEntangle);
  dragon = $(".attack-btn.dragon-blade").on("click", attackDragon);
  star = $(".attack-btn.star-fire").on("click", attackStar);

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
  render();
}

function attackScepter() {
  // Health points
  fungusHP -= 14;
  // Attack points
  attackPoints -= 12;
  console.log("HP in scepter", fungusHP);
  console.log("AP in scepter", attackPoints);
  render();
}

function attackEntangle() {
  // Health points
  fungusHP -= 9;
  // Attack points
  attackPoints -= 23;
  console.log("HP in entangle", fungusHP);
  console.log("AP in entangle", attackPoints);
  render();
}
function attackDragon() {
  // Health points
  fungusHP -= 38;
  // Attack points
  attackPoints -= 47;
  console.log("HP in dragon", fungusHP);
  console.log("AP in dragon", attackPoints);
  render();
}
function attackStar() {
  // Health points
  fungusHP -= 25;
  // Attack points
  attackPoints -= 33;
  console.log("HP in star", fungusHP);
  console.log("AP in star", attackPoints);
  render();
}

function render() {
  // Update the texts
  $(".hp-text").text(`${fungusHP} HP`);
  $(".ap-text").text(`${attackPoints} AP`);
  // Animation to change the classes for whoever wins!
  if (fungusHP < 0) {
    $(".walk").addClass("dead");
  } else if (attackPoints < 0) {
    $(".walk").addClass("jump");
    // Disable the buttons
    $(".attack-btn").prop("disabled", true);
  }
}
