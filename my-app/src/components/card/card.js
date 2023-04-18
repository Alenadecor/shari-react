import './card.css'; 

function Card() {
  return (
    <div className="Card">

      <div class="Card_big _container">

        <div class="card element-animation">
            <div class="card__header"><a href="{{ product.slug }}">
                <div class="card__image"><img src="/media/{{ product.image }}" alt=""></img></div>
            </a></div>
            <div class="card__body">
                <a href="{{ product.slug }}"><div class="card__title">шар звезда</div></a>
                <div class="card__price">1500 руб.</div>
                <div class="tooltips">
                    <div class="tooltip"><img src="{% static 'shop/foto/h2o 1.png' %}" alt=""></img>
                        <span class="tooltiptext">Обработка для увеличения времени полета</span>
                    </div>
                    <div class="tooltip"><img src="{% static 'shop/foto/He 1.png' %}" alt=""></img>
                        <span class="tooltiptext">Шар наполняется безопасным инертным газом гелием</span>
                    </div>
                    <div class="tooltip"><img src="{% static 'shop/foto/oblako.png' %}" alt=""></img>
                        <span class="tooltiptext">Шар наполняется воздухом</span>
                    </div>
                </div>    
            </div>

            <div class="card-footer-wrapper">
                <div class="card__footer">
                    <div class="card__pcs">
                        <div class="pcs__calc">
                            <div class="pcs__calc-minus"><img src="{% static 'shop/foto/minuss.png' %}" alt=""></img></div>
                            <div class="pcs__calc-imput">1</div>
                            <div class="pcs__calc-plus"><img src="{% static 'shop/foto/plus.png' %}" alt=""></img></div>
                        </div>
                        <div class="favorites-cart">
                            <a href=""><img src="shop/foto/favorites.png" alt="favorites"></img></a>
                            <a href=""><img src="{% static 'shop/foto/cart.png' %}" alt="cart"></img></a>
                            
                        </div>    
                    </div>
                  
                </div>
                <a href="" class="flip-btn">Подробно</a>
                <button>купить</button>
            </div> 
        </div>

      </div>

    </div>
  );
}

export default Card;
