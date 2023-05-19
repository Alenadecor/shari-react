import './header.css'; 
import React, { useEffect, useState } from "react";

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() || 
            isMobile.BlackBerry() || 
            isMobile.iOS() || 
            isMobile.Opera() || 
            isMobile.Windows());
    }
};


if(isMobile.any() ) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrowa');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
        });
    }
  }

} else {
    document.body.classList.add('_pc');
}


const iconMenu = document.querySelector('.menu__icona');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__bodya');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

function Header() {

    const [categories, setCategories] = useState();
    const getCategories = async () => {
      let response = await fetch(
        "https://kikimoraballoon.ru/api/categories/?format=json",)
        .then((response) => response.json());
      setCategories(response);
    };
    useEffect(() => {
      getCategories();
    }, []);
    console.log(categories)


    return (
    <div className="Header">
      <div class="wrapper">
          <header class="headera">
              <div class="headera__container">
                <a href="home" class="headera__logo"><img src="/img/logo-kikimora.jpg" alt=""></img></a>
                  <div class="header__menu menua">

                      <div class="menu__icona">
                          <span></span>
                      </div>

                      <nav class="menu__bodya">
                          <ul class="menu__lista">
                              <li><a href="/home" class="menu__linka">Главная</a></li>                              
                                    <li>
                                    <a href="/categories/1" class="menu__linka">Готовые наборы</a>
                                    <ul class="menu__sub-lista">

                                                    {categories && categories.map((category) => (
                                                        category.parent === 1
                                                    ?(<li>
                                                        <a href={category.id} class="menu__linka">{category.name}</a>
                                                        <span class="menu__arrowa"></span>
                                                    </li>)
                                                    :null
                                                ))}
                                            
                                        </ul>
                                    </li>
                                    <li>
                                    <a href="/categories/2" class="menu__linka">Шары поштучно</a>
                                        <ul class="menu__sub-lista">

                                        {categories && categories.map((category) => (
                                                        category.parent === 2
                                                    ?(<li>
                                                        <a href={category.id} class="menu__linka">{category.name}</a>
                                                        <span class="menu__arrowa"></span>
                                                    </li>)
                                                    :null
                                                ))}
                                        </ul>
                                            

                                    </li>

                              <li><a href="sale" class="menu__linka">Акции</a></li>
                              <li><a href="https://wa.me/+79668674747?text=Хочу сделать заказ шаров" class="menu__linka">Мы в WhatsApp</a></li>
                              <li><a href="/favorites" class="menu__linka"><img src="/img/mask-izbranoe.png" alt=""></img></a></li>
                              <li><a href="/cart" class="menu__linka"><img src="/img/Mask-korzina.png" alt=""></img></a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </header>

          <header class="header">
              <div class="header__container _container">
                  <div class="header__bloc">
                      <search class="search">
                          <div class="search_form">
                              <input type="text" class="search-input" placeholder="Поиск..."></input>
                              <button type="submit"><img src="/img/magnifier 1.png" alt=""></img></button>
                          </div>
                      </search>
                      <div class="location">
                          <img src="/img/mesto-sosnov-bor 1.png" alt=""></img>
                          <p>г. Сосновый Бор, Ленинградская обл.</p>
                      </div>
                  </div>
              </div>
          </header>

      </div>
    </div>
  );
}

export default Header;
