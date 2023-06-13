$(document).ready(onReady);

// State Variables can be declared outside of the onReady

// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackPoints = 100;

function onReady() {
  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!
  $(".arcane-scepter").on("click", attackEnemy);
  $(".entangle").on("click", attackEnemy);
  $(".dragon-blade").on("click", attackEnemy);
  $(".star-fire").on("click", attackEnemy);

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
  render();
}

function attackEnemy() {
  if ($(".arcane-scepter")) {
    // Health points
    fungusHP -= 14;
    // Attack points
    attackPoints -= 12;
    console.log("attack", fungusHP);
    render();
  } else if ($(".entangle")) {
    // Health points
    fungusHP -= 9;
    // Attack points
    attackPoints -= 23;
    console.log("attack", fungusHP);
    render();
  } else if ($(".dragon-blade")) {
    // Health points
    fungusHP -= 47;
    // Attack points
    attackPoints -= 38;
    console.log("attack", fungusHP);
    render();
  } else if ($(".star-fire")) {
    // Health points
    fungusHP -= 33;
    // Attack points
    attackPoints -= 38;
    console.log("attack", fungusHP);
    render();
  }
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
  }
}
