const burger = () => {
    const promoMenu = document.querySelector('.promo__menu'),
          burger = document.querySelector('.burger'),
          menuItem = document.querySelectorAll('.promo__item');

    burger.addEventListener('click', () => {
        promoMenu.classList.toggle('promo__menu_active');
        document.body.classList.toggle('overflow');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            promoMenu.classList.toggle('promo__menu_active');
        });
    });
};

export default burger;