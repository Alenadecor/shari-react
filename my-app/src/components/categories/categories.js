import './categories.css'; 

function Categories() {
  return (
    <div className="Categories">
      <div class="sections__categories"> 
        <div class="categories_bloc-title _container">ГОТОВЫЕ НАБОРЫ:</div>
            <div class="categories_bloc _container">
                <div class="categories_card element-animation">
                    <a href="/{{ category.url }}"><div class="categories_card-name1"></div>
                      <div class="categories_card-name2"></div>
                    </a>
                </div>
            </div>
        </div>
      </div>

    

  );
}

export default Categories;
