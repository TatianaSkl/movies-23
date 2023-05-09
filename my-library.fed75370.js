const t=document.querySelector(".switch-theme-button"),e=document.body;t.addEventListener("click",(function(){e.classList.contains("light")?(e.classList.remove("light"),localStorage.removeItem("site-theme")):(e.classList.add("light"),localStorage.setItem("site-theme","light"))}));const s=localStorage.getItem("site-theme");s&&e.classList.add(s);
//# sourceMappingURL=my-library.fed75370.js.map
