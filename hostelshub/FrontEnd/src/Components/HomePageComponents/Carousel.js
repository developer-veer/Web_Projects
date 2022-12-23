import '../../StyledSheets/HomePageCSS/Carousel.css';
const Carousel = () => {
    return (  

        <section id="carousel-section">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/carousel_hostel_1.jpg" class="d-block w-100" alt="..." style={{height:'24rem' , borderRadius:'1rem'}}/>
    </div>
    <div class="carousel-item">
      <img src="./img/car_Hostel_2.jpg" class="d-block w-100" alt="..." style={{height:'24rem' , borderRadius:'1rem'}}/>
    </div>
    <div class="carousel-item">
      <img src="./img/caro_Hostel_3.jpg" class="d-block w-100" alt="..." style={{height:'24rem' , borderRadius:'1rem'}}/>
    </div>
  </div>
</div>
        </section>
    );
}
 
export default Carousel;
