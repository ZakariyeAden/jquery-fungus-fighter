$(document).ready(onReady);

// State Variables can be declared outside of the onReady

// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackPoints = 100;


// ### ![arcane scepter](./images/arcane-scepter.png) Arcane Scepter

// - **AP Cost:** 12
// - **HP Damage:** 14


// ### ![entangle](./images/entangle-3.png) Entangle

// - **AP Cost:** 23
// - **HP Damage:** 9

// ### ![dragon blade](./images/dragon-blade-3.png) Dragon Blade

// - **AP Cost:** 38
// - **HP Damage:** 47

// ### ![star fire](./images/star-fire.png) Star Fire

// - **AP Cost:** 33
// - **HP Damage:** 25
function onReady() {
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.arcane-scepter').on('click', attackEnemy);
    $('.entangle').on('click', attackEnemy);
    $('.dragon-blade').on('click', attackEnemy);
    $('.star-fire').on('click', attackEnemy);
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    render()
}

function attackEnemy(){
    if($('.arcane-scepter')){
        fungusHP -= 14;
        console.log('attack', fungusHP);
        render();
    }else if($('.entangle')){
        fungusHP -= 23;
        console.log('attack', fungusHP);
        render();
    }else if($('.dragon-blade')){
        fungusHP -= 38;
        console.log('attack', fungusHP);
        render();
    }else if($('.star-fire')){
        fungusHP -= 33;
        console.log('attack', fungusHP);
        render();
    }else if( fungusHP === 0){
        console.log('Stop');
    }
    
}
function render(){
   
   let text = $('.hp-text').text(`${fungusHP} HP`)
}