export function starRating() {
  //TODO: скрипт звездного рейтинга
  const ratings = document.querySelectorAll('.rating');

  if (ratings.length > 0) {
    initRatings(); // если рейтинг заполнен, то запускаем функцию
  }

  // Основная функция
  function initRatings() {
    let ratingActive, ratingValue;

    // "бегаем" по всем рейтингам по странице
    for (let i = 0; i < ratings.length; i++) {
      const rating = ratings[i];
      initRating(rating);
    }

    // Инициализируем конкретный рейтинг
    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();
    }

    // Инициализация переменныхim
    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__item').value;
    }

    // Изменяем ширину активных звезд
    function setRatingActiveWidth(i = ratingValue.innerHTML) {
      // const ratingActiveWidth = i / 0.05;
      const ratingActiveWidth = ratingValue / 0.1;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
  }
}
