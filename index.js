// ***** Create Background Stars *****

function createStar() {
  var star = document.createElement('div');
  star.classList.add('star');

  // Random size for the star
  var size = Math.random() * 5 + 1; // Size between 1px and 6px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random position for the star
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;

  // Append the star to the body
  document.body.appendChild(star);
}

// Create a bunch of stars
for (let i = 0; i < 200; i++) { // Generate 200 stars
  createStar();
}



// ***** Create Shooting Star *****

function createShootingStar() {
  const existingStar = document.querySelector('.shooting-star');
  if (existingStar) {
    document.body.removeChild(existingStar);
  }

  var star = document.createElement('div');
  star.classList.add('shooting-star');
  document.body.appendChild(star);

  var size = Math.random() * 20 + 10; // Star size
  var startX = Math.random() * window.innerWidth; // Random starting X position
  var startY = Math.random() * window.innerHeight; // Random starting Y position

  // Generate a random angle in radians
  var angle = Math.random() * Math.PI * 2; // Angle between 0 and 2π

  // Set a random distance to travel (minimum 300px, maximum 600px)
  var distance = Math.random() * 300 + 300; // Random distance between 300px and 600px

  // Calculate end positions based on the angle
  var endX = startX + Math.cos(angle) * distance;
  var endY = startY + Math.sin(angle) * distance;

  // Ensure the end position is within the viewport
  endX = Math.max(0, Math.min(endX, window.innerWidth));
  endY = Math.max(0, Math.min(endY, window.innerHeight));

  // Initial styles for the star
  TweenMax.set(star, {
    x: startX,
    y: startY,
    width: size,
    height: size,
    background: '#EEE8AA',
    borderRadius: '50%',
    opacity: 1
  });

  // Animation for the star
  TweenMax.to(star, Math.random() * 2 + 1, {
    x: endX,
    y: endY,
    opacity: 0,
    background: '#FAFAD2',
    scale: 0,
    ease: Power2.easeOut,
    onComplete: function() {
      document.body.removeChild(star);
    }
  });
}

// Create a shooting star every 3 seconds
setInterval(createShootingStar, 3000);

