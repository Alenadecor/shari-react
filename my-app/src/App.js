import './App.css'; 

import Header from './components/header/header';
// import Header2 from './components/header2/header2';
import Footer from './components/footer/footer';
import Card from './components/card/card';
// import Cardbig from './components/cardbig/cardbig';
import Waybox from './components/waybox/waybox';
import Sale from './components/sale/sale';
import Pagination from './components/pagination/pagination';
import Categories from './components/categories/categories';
import Individual from './components/individual/individual';
import Watsap from './components/watsap/watsap';
import Catalog from './components/catalog/catalog';
import MainPage from './components/MainPage/MainPage';
// import AllProducts from './components/AllProducts/AllProducts';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* <Route index element={<div>No page is selected.</div> } /> */}
          <Route path='product_page' element={<Catalog />} />
        </Route>
      </Routes>
    </BrowserRouter><div className='App'>
    {/* <Cardbig/> */}
      </div></>    

    // <div className="App">
    //   {/* <Routes>
    //     <Route path={''} element={<Layout/>}>
    //       <Route path={'/'} element={<Home/>}>
    //       <Route path={'/sales'} element={<Sales/>}>
    //       <Route path={'/delivery'} element={<Delivery/>}>
    //       <Route path={'/catalog'} element={<Catalog/>}>
            
    //       </Route>
    //       </Route>
    //       </Route>
    //       </Route>
    //     </Route>
    //   </Routes> */}
    // {/* <Header2/> */}
    // <Header/>
    // {/* <Catalog/> */}
    // {/* <AllProducts/> */}
    // <Waybox/>
    // <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Catalog />} >
    //         <Route index element={<div>No page is selected.</div> } />
    //           {/* <Route path='product_page' element={<Catalog />} /> */}
    //         </Route>
    //     </Routes>
    // </BrowserRouter>

    // <Categories/>
    // <Card/>
    // <Sale/>
    // <Individual/>
    // <Link to='product_page'>link to product page</Link>
    // <Watsap/>
    // <Pagination/>
    // {/* <Cardbig/> */}
    // <div>внутри сайта</div>
    // <Footer/>
    // </div>



  );
}

export default App;
