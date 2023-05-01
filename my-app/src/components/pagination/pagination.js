import './pagination.css'; 

function Pagination() {
  return (
    <div className="Pagination">
      <div class="module-pagination _container">
        <div class="pagination_load"><a href="">Показать еще</a></div>
        <div class="pagination_box">
          <div class="flex-prev"><a href=""><img src="img/arrow-l.png" alt=""></img></a></div>
          <div class="numb"><a href="">1</a></div>
          <div class="numb-on"><a href="">2</a></div>
          <div class="numb"><a href="">3</a></div>
          <div class="flex-next"><a href=""><img src="img/arrow-r.png" alt=""></img></a></div>
        </div>
      </div>

    </div>
  );
}

export default Pagination;
