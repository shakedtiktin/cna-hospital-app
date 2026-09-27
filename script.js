document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("primary-btn")) {
        button.textContent = "Booked";
        button.disabled = true;
      }
    });
  });

  const statusItems = document.querySelectorAll(".status");
  statusItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-1px)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
    });
  });
});
