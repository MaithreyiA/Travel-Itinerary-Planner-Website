
  const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  const header = document.querySelector("[data-header]");

  navToggleBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("active");
  });

  const stateBoxes = document.querySelectorAll('.state-box');

// Iterate through each box and set its height based on content
stateBoxes.forEach(box => {
  const attractions = box.querySelector('.attractions');
  const attractionsHeight = attractions.offsetHeight;

  // Set the height of the box to the content height plus additional padding
  box.style.height = `${attractionsHeight + 60}px`; // Adjust padding as needed
});

  /**
   * Show "go to top" button when scrolling down
   */

  const goTopBtn = document.querySelector("[data-go-top]");

  window.addEventListener("scroll", function () {
    window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
  });

  function searchDestination() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const destinations = document.querySelectorAll('.destination-card');
    
    destinations.forEach(function(dest) {
      const title = dest.querySelector('.card-title').textContent.toLowerCase();
      const subtitle = dest.querySelector('.card-subtitle').textContent.toLowerCase();
      
      if (title.includes(input) || subtitle.includes(input)) {
        window.location.href = dest.href;
      }
    });
  }
  

