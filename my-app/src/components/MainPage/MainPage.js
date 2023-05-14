import './MainPage.css'; 
import Header from '../header/header';
import { Link, Outlet } from "react-router-dom";
import Footer from '../footer/footer';

function MainPage() {
  return (
    <>
    <Header/>
    <div className="MainPage">
      MainPage Стараница 

      <Link to='product_page'>link to product page</Link>
      <Link to='categories'>link to categories</Link>

    </div>
    <Outlet />
    <Footer/>
    </>
  );
}

export default MainPage;
