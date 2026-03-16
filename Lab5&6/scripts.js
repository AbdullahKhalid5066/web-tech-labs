// Toggle dropdown menu (display property demo)
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", () => {
      const expanded = dropdownToggle.getAttribute("aria-expanded") === "true";
      dropdownToggle.setAttribute("aria-expanded", String(!expanded));
      dropdownMenu.style.display = expanded ? "none" : "block";
    });
  }

  // Modal dialog toggles
  const modal = document.querySelector(".modal");
  const openModalBtn = document.querySelector(".modal-open");
  const closeModalBtn = document.querySelector(".modal-close");

  if (modal && openModalBtn && closeModalBtn) {
    const openModal = () => {
      modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
      modal.setAttribute("aria-hidden", "true");
    };

    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }

  // Hamburger menu interaction
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".flex-nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
      navList.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  }
});
