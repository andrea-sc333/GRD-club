const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

if (menuToggle && primaryNavigation) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
    primaryNavigation.classList.toggle("is-open", !expanded);
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && window.matchMedia("(max-width: 767px)").matches) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      primaryNavigation.classList.remove("is-open");
    }
  });
}

const contentTabs = [...document.querySelectorAll(".content-tab")];
const categoryStatus = document.querySelector("#content-category-status");
const contentSection = document.querySelector(".content-section");

contentTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    contentTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    if (contentSection && tab.dataset.category) {
      contentSection.dataset.activeCategory = tab.dataset.category;
    }

    if (categoryStatus) {
      categoryStatus.textContent = `${tab.dataset.category} selected`;
    }
  });
});

const actionStatus = document.querySelector(".join-section .action-status");

document.querySelectorAll(".signup-button, .join-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (actionStatus) {
      actionStatus.textContent = "Club sign-up information is coming soon.";
    }
  });
});
