import './sale.css'; 

function Sale() {
  return (
    <div className="Sale">
      <div class="title_discounts _container"><a href="#top" id="bottom"><h3>АКЦИИ :</h3></a></div>
      <div class="discounts">
        <div class="discounts_box element-animation _container">
          <div class="discounts_card">
            <img src="img/discount1.png" alt=""></img>
            <div class="discounts_card_title">Бесплатная доставка<br></br>от 1000 р</div>
            <div class="discounts_card_text">Сосновый бор и Лен область</div>
          </div>
          <div class="discounts_card">
            <img src="img/discount2.png" alt=""></img>
            <div class="discounts_card_title">Скидка</div>
            <div class="discounts_card_text">Получи скидку за отметку</div>
          </div>
          <div class="discounts_card">
            <img src="img/discount3.png" alt=""></img>
            <div class="discounts_card_title">Скидка 3 %<br></br>на первый заказ</div>
            <div class="discounts_card_text">Для новых клиентов</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Sale;
