import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {skinCodes, fieldCd} from './../../constants/typeCodes';

export default class Sample extends Component {


  render() {
    
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // arrows: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };

    
    return (
      <div>
        <h2> Single Item</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        skinCodes.map((value,index) => {
                          console.log(index);
                            return( <div key={index} className="template-card rounded-border">
                                  <i className="" aria-hidden="true" ></i>
                                <img  className="" src={'/images/' + '.svg'}/>
                                <button className="btn-select-theme"  type='button'>USE TEMPLATE {index}</button>
                            </div>);
    
                        })
                    }
                    </Slider>
      </div>
    );
  }
}

