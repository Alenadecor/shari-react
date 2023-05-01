import './cardbig.css'; 

        //   var slideIndex = 1;
        //   showSlides(slideIndex);

        //   function plusSlides(n) {
        //   showSlides(slideIndex += n);
        //   }

        //   function currentSlide(n) {
        //   showSlides(slideIndex = n);
        //   }
 

        //   function showSlides(n) {
        //   var i;
        //   var slides = document.getElementsByClassName("mySlides");
        //   var dots = document.getElementsByClassName("demo");
        //   var captionText = document.getElementById("caption");
        //   if (n > slides.length) {slideIndex = 1}
        //   if (n < 1) {slideIndex = slides.length}
        //   for (i = 0; i < slides.length; i++) {
        //       slides[i].style.display = "none";
        //   }
        //   for (i = 0; i < dots.length; i++) {
        //       dots[i].className = dots[i].className.replace(" active", "");
        //   }
        //   slides[slideIndex-1].style.display = "block";
        //   dots[slideIndex-1].className += " active";
        //   captionText.innerHTML = dots[slideIndex-1].alt;
        //   }

function Cardbig() {
    return (
        <div className="Cardbig">
            {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}

            <section class="card-long _container">
                <div class="card-mini-gellery">

                    <div class="container">
                        <div class="mySlides">
                            <div class="mySlides-cont">
                                <img src="" alt="продукт" style="width:100%"></img>
                            </div>
                        </div>

                        <a class="prev" onclick="plusSlides(-1)">❮</a>
                        <a class="next" onclick="plusSlides(1)">❯</a>

                        <div class="caption-container">
                            <p id="caption"></p>
                        </div>

                        <div class="row">
                            <div class="column">
                                <div class="image-min">
                                    <img class="demo cursor" src="" style="width:100%" onclick="currentSlide()" alt="Изображение"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-nav">
                <div class="card-nav-title"><h2>шар 5 сердец</h2></div>
                    <div class="card-nav-text">шары красного цвета надуты гелием</div>
                    <div class="card-nav-price">1850 руб.</div>
                    <div class="card-nav-font">
                        <img src="img/owl 1.png" alt=""></img>
                        <div class="font-text">Добавим индивидуальную надпись<br></br>на шаре и коробке</div>
                    </div>
                <div class="card-nav-gift">
                    <img src="img/gift5 1.png" alt=""></img>
                    <div class="gift-text">Бесплатная доставка от 1000р<br></br>по Сосновому бору</div>
                </div>
                <div class="tooltip"><img src="img/h2o 1.png" alt=""></img>
                    <span class="tooltiptext">Обработка для увеличения времени полета</span>
                    <div class="tooltip-tex">Обработка для увеличения времени полета</div>
                </div>
                <div class="tooltip"><img src="img/He 1.png" alt=""></img>
                    <span class="tooltiptext">Шар наполняется безопасным инертным газом гелием</span>
                    <div class="tooltip-tex">Шар наполняется безопасным инертным газом гелием</div>
                </div>
                <div class="tooltip"><img src="img/oblako.png" alt=""></img>
                    <span class="tooltiptext">Шар наполняется воздухом</span>
                    <div class="tooltip-tex">Шар наполняется воздухом</div>
                </div>
                <div class="card-nav-pcs">
                <div class="pcs__calc">
                    <div class="pcs__calc-minus"><img src="img/minuss.png" alt=""></img></div>
                    <div class="pcs__calc-imput">1</div>
                    <div class="pcs__calc-plus"><img src="img/plus.png" alt=""></img></div>
                </div>
                </div>
          
                <div class="card-nav-action">
                {/* <a href=""><button class="button-1">+Корзина</button></a>
                <a href=""><button class="button-1">+Избранное</button></a> */}
                <a href="https://wa.me/+79668674747?text=Хочу сделать заказ шаров"><button class="button-Whatsapp">Оформить заказ в Whatsapp</button></a>
                </div>
          
            </div>
            </section>

        </div>
 );
}

export default Cardbig;
