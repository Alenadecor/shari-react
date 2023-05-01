import './footer.css'; 

function Footer() {
  return (
    <div className="Footer">

      <div class="Footer">
        <div class="footer _container">
            <div class="footer__body">
                <div class="info">
                    <div class="name">ИНФОРМАЦИЯ:</div>
                    <a href="">Доставка и оплата</a>
                    <a href="">Как купить</a>
                    <a href="">Акции</a>
                </div>
                <div class="catalog">
                    <div class="head-button">
                        <a href="/shop" class="border-button">Главная</a>
                    </div>
                </div>
                <div class="contact">
                    <div class="we">МЫ В СОЦСЕТЯХ:</div>
                    <div class="icons">
                        <a href="https://instagram.com/kikimora.balloon?igshid=YmMyMTA2M2Y="><img src="img/instagram.png" alt="instagram"></img></a>
                        <a href="https://vk.com/kikimora.balloon"><img src="img/vk.png" alt="vk"></img></a>
                        <a href="https://wa.me/+79668674747?text=Хочу сделать заказ шаров"><img src="img/whatsapp.png" alt="whatsapp"></img></a>
                    </div>
                </div>
            </div>
            <div class="footer__back">
                <a href="/{{ category.url }}" class="footer-button">вкпнвяк</a>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
