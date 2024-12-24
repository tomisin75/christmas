// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // Dec 25
    if (now > christmas) {
      christmas.setFullYear(now.getFullYear() + 1);
    }
    const diff = christmas - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("timer").textContent = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  