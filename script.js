function showScreen(screenId) {
 // Hide all screens
const cards = document.querySelectorAll('.card'); cards.forEach((card) => { card.classList.add('hidden'); 

});   

// Show target screen
const targetCard =
document.getElementById(screenId); if (targetCard) {
targetCard.classList.remove('hidden'); 
  }
}   