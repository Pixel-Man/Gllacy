var popup_search = document.querySelector('.main-header__item-serch .main-header__popup-wrap');
var form_search = document.querySelector('.main-header__search-form [type=search]');

form_search.onfocus = function () {
  popup_search.classList.add('main-header__popup-wrap--js');
};
form_search.onblur = function () {
  popup_search.classList.remove('main-header__popup-wrap--js');
};
