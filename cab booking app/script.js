function bookCab() {
  const pickup = document.getElementById("pickup").value.trim();
  const drop = document.getElementById("drop").value.trim();
  const carType = document.getElementById("carType").value;

  if (!pickup || !drop) {
    alert("Please enter both pickup and drop-off locations.");
    return;
  }

  // Simulate booking delay
  const bookBtn = document.getElementById("bookBtn");
  bookBtn.textContent = "Booking...";
  bookBtn.disabled = true;

  setTimeout(() => {
    bookBtn.textContent = "Book Now";
    bookBtn.disabled = false;
    showModal();
  }, 2000);
}

function showModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
