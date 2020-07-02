import React, {useState} from 'react';
import './carousel-style.scss';
import  {  NavLink  } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import logo from '../../assets/img/homevillas-logo.png';
import searchImg from '../../assets/img/testimonial-bg-1.jpg';

// import Icon from '../../shared/MatComponents';
import { Button, Card, Carousel  } from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <div className="row">
                <div className="col">
                <img
            className="d-block w-100"
            src={searchImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label 1</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
                </div>
                {/*  */}

                <div className="col">
                <img
            className="d-block w-100"
            src={searchImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label 2</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
                </div>
                {/*  */}
                <div className="col">
                <img
            className="d-block w-100"
            src={searchImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label 3</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
                </div>
                {/*  */}
            </div>
        </Carousel.Item>


        <Carousel.Item>
        <div className="row">
                <div className="col">
                <img
            className="d-block w-100"
            src={searchImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label 1</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
                </div>
                {/*  */}

                <div className="col">
                <img
            className="d-block w-100"
            src={searchImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label 2</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
                </div>
                {/*  */}
                <div className="col">
                <img
            className="d-block w-100"
            src={searchImg}
            alt="First slide"
          />
          <Carousel.Caption>
          <h1>Home Villas LTD <br/> <span>Real Estate Company</span></h1>
         <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>

           <h1>Home Villas LTD <br/> <span>Real Estate Company</span></h1>
         <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
         
         
          </Carousel.Caption>
                </div>
                {/*  */}
            </div>
        </Carousel.Item>
      </Carousel>
    );
  }
  
class CarouselComponent extends React.Component{
    render(){
        return(
<React.Fragment>
<div class="carouse">
 <ControlledCarousel /> 
</div>
    </React.Fragment>
)}}

export default CarouselComponent;