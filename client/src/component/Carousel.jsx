import React from 'react'
import home1 from '../image/home1.jpg';
import home0 from '../image/home0.jpg';
import home2 from '../image/home2.jpg';
import home3 from '../image/home3.jpg';
import './Carousel.css';
const Carousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={home1} class=" padding-item d-block width-50" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={home2} class="padding-item d-block width-50" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={home3} class="padding-item d-block width-50" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={home0} class="padding-item d-block width-50" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon black" aria-hidden="true"></span>
      <span class="visually-hidden ">Next</span>
    </button>
  </div>
  )
}

export default Carousel
