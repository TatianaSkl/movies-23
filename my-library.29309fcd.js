!function(){var t=document.querySelector(".switch-theme-button__mobile"),e=document.body;t.addEventListener("click",(function(){e.classList.contains("light")?(e.classList.remove("light"),localStorage.removeItem("site-theme")):(e.classList.add("light"),localStorage.setItem("site-theme","light"))}));var s=localStorage.getItem("site-theme");s&&e.classList.add(s)}();
//# sourceMappingURL=my-library.29309fcd.js.map
