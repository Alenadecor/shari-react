import './header.css'; 

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
                                  <a href="catalog" class="menu__linka">наборы
                                  </a>

                                  <span class="menu__arrowa"></span>

                                  <ul class="menu__sub-lista">
                                    
                                    для девочек
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
