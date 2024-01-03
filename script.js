let isCardFlipped = false;

function flipCard() {
  const card = document.querySelector('.card');
  isCardFlipped = !isCardFlipped;

  if (isCardFlipped) {
    card.style.transform = 'rotateY(180deg)';
    // Change content dynamically
    document.getElementById('frontContent').innerText = 'Dynamic Front Content';
    document.getElementById('backContent').innerText = 'Dynamic Back Content';
    // Customize styles dynamically
    card.style.backgroundColor = '#e74c3c'; // Change card color
  } else {
    card.style.transform = 'rotateY(0deg)';
    // Reset content and styles
    document.getElementById('frontContent').innerText = 'Front Content';
    document.getElementById('backContent').innerText = 'Back Content';
    card.style.backgroundColor = '#3498db';
  }
}
