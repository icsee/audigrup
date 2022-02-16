import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import Slider5 from './../../images/main-slider/slide5.jpg';
import Slider4 from './../../images/main-slider/slide4.jpg';
import SliderAudigrup1 from './../..//images/our-work/team.jpg';
import SliderAudigrup2 from './../..//images/our-work/workaudigrup2.jpg';
import SliderAudigrup3 from './../..//images/our-work/team.jpg';
import Solologo from './../..//images/solologo.png';
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

class Index3Slider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: false,
            slidesToShow: 1,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
					
				  }
				}
			]
        };
		return(
			
			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={SliderAudigrup3} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary-dark ">
						<div className="slide-content-box container ">
							<div className="max-w700 text-white ">
							      <h4 className="dz-title ">GRUPO AUDITOR Y FINANCIERO INTEGRAL <br/>  </h4>	
								    <div className="col-md-4 col-lg-12 text-center section-head" >
										<center>
										<img src={Solologo} alt="" />
                                        </center>
									</div>
							   
							  			
							</div>
							        
						</div>
						
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={SliderAudigrup1} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary-dark">
						<div className="slide-content-box container">
							<div className="max-w700 text-white ">
							  
								<h1 className="dz-title">Nuestra firma, <br/> </h1>
								<h1 className="sub-title">un grupo profesional para su respaldo empresarial</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={SliderAudigrup2} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary-dark">
						<div className="slide-content-box container">
							<div className="max-w700 text-white ">
								
								<h1 className="dz-title">Somos reconocidos <br/> </h1>
								<h1 className="sub-title">como la mejor opción en calidad,servicio y respaldo integral. </h1>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default Index3Slider;