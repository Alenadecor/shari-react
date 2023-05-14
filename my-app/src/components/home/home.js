import React, { useEffect, useState } from "react";
import Individual from '../individual/individual';
import Sale from '../sale/sale';
import Watsap from '../watsap/watsap';
import './home.css'; 

const Home = () => {

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
  
  return (
    <div>
      Главная

      <div class="sections__categories">  
      <div class="categories_bloc _container">
      <div class="categories_bloc-title _container">ГОТОВЫЕ НАБОРЫ:</div>
      {categories && 
        categories.map((category) => (
              <div class="categories_card element-animation">
                <a href={'/categories/' + category.id}><div class="categories_card-name1">{category.name}</div>
                 <div class="categories_card-name2">{category.description}</div>
                </a>
              </div>  
        ))}

        </div>

        <div class="categories_bloc-title _container">ГОТОВЫЕ НАБОРЫ:</div>
            <div class="categories_bloc _container">

                <div class="categories_card element-animation">
                    <a href="/{{ category.url }}"><div class="categories_card-name1"></div>
                      <div class="categories_card-name2"></div>
                    </a>
                </div>

                <div class="categories_card element-animation">
                    <a href="/{{ category.url }}"><div class="categories_card-name1"></div>
                      <div class="categories_card-name2"></div>
                    </a>
                </div>

            </div>
        </div>
        
    <Individual/>
    <Sale/>
    <Watsap/>

    </div>
  );
};

export default Home;
