import './AllProducts.css'; 

const menuData = [
  
]
const AllProducts = () => {
  return (
    <div class="Card_big _container">

    <div class="card element-animation">
        <div class="card__header"><a href="">
            <div class="card__image"><img src="img/" alt=""></img></div>
        </a></div>
        <div class="card__body">
            <a href=""><div class="card__title">шар звезда</div></a>
            <div class="card__price">1500 руб.</div>
            <div class="tooltips">
                <div class="tooltip"><img src="img/h2o 1.png" alt=""></img>
                    <span class="tooltiptext">Обработка для увеличения времени полета</span>
                </div>
                <div class="tooltip"><img src="img/He 1.png" alt=""></img>
                    <span class="tooltiptext">Шар наполняется безопасным инертным газом гелием</span>
                </div>
                <div class="tooltip"><img src="img/oblako.png" alt=""></img>
                    <span class="tooltiptext">Шар наполняется воздухом</span>
                </div>
            </div>    
        </div>

        <div class="card-footer-wrapper">
            <div class="card__footer">
                <div class="card__pcs">
                    <div class="pcs__calc">
                        <div class="pcs__calc-minus"><img src="img/minuss.png" alt=""></img></div>
                        <div class="pcs__calc-imput">1</div>
                        <div class="pcs__calc-plus"><img src="img/plus.png" alt=""></img></div>
                    </div>
                    <div class="favorites-cart">
                        <a href=""><img src="img/favorites.png" alt="favorites"></img></a>
                        <a href=""><img src="img/cart.png" alt="cart"></img></a>
                        
                    </div>    
                </div>
              
            </div>
            <a href="" class="flip-btn">Подробно</a>
            <button>купить</button>
        </div> 
    </div>

  </div>
  );
}



// function AllProducts() {
//   return (
//     <div className="AllProducts">


//     </div>
//   );
// }

export default AllProducts;
