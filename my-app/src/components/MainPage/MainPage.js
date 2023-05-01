import './MainPage.css'; 
import { Link, Outlet } from "react-router-dom";

function MainPage() {
  return (
    <>
    <div className="MainPage">
      MainPage Стараница
      <Link to='product_page'>link to product page</Link>

    </div>
    <Outlet />
    </>
  );
}

export default MainPage;
