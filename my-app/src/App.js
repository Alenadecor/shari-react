import './App.css'; 

import Sale from './components/sale/sale';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components/product/product';
import Home from './components/home/home';
import Categories from './components/categories/categories';

function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* <Route index element={<div>No page is selected.</div> } /> */}
          <Route path='/product/*' element={<Product />} />
          <Route path='/categories/*' element={<Categories />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter><div className='App'>
  

      </div></>    




  );
}

export default App;
