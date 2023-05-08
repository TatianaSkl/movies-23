// const heroBtn = document.querySelector(hero__btn);

// heroBtn.addEventListener("click", handleClick);
(() => {
     const openModalBtn = document.querySelector('.hero__btn');
      const closeModalBtn = document.querySelector('.modal__hero__close');
      const modal = document.querySelector('.modal__hero__container');
  
   openModalBtn.addEventListener('click', toggleModal);
   closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      modal.classList.toggle('is__open__hero');
      console.log("hello")
    }
  })();


// const handleClick = (event) => {
//     const apology = document.createElement("p");
//     apology.textContent = "OOPS...
//     We are very sorry!
//     But we couldn’t find the trailer.
// ";
// }