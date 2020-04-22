const menu_toggler = document.querySelector("header > div.menu-toggler");
const menu_togglers_set = document.querySelectorAll('[data-menuswitch]');

menu_toggler.onclick = () => {
  if (document.querySelectorAll('[data-menuswitch="hidden"]').length === 0) {
    menu_togglers_set.forEach(toggler => {
      toggler.dataset.menuswitch = 'hidden';
    }
  )}
  else menu_togglers_set.forEach(toggler => {
      toggler.dataset.menuswitch = '';
    }
  )
}