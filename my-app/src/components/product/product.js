import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Waybox from '../waybox/waybox';
import './product.css'; 

const Product = () => {
  
    const [balloons, setBalloons] = useState();
    const getBalloons = async () => {
      let response = await fetch(
        "https://kikimoraballoon.ru/api/balloons/?format=json",)
        .then((response) => response.json());
      setBalloons(response);
    };
    useEffect(() => {
      getBalloons();
    }, []);

    const location = useLocation();
    console.log(location.state)
    // const { link_id } = location.state

  return (
    <div>
      Стараница товара 
      <Waybox/>ТОвар:
      {balloons && 
                      balloons.map((balloon) => (
                        balloon.id === location.state.link_id
                        ?(
                            <><a href={'/product/' + balloon.id}>{balloon.name} {balloon.id}</a></>
                        )
                        :null

                      ))}
      <section class="card-long _container">
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
};

export default Product;
