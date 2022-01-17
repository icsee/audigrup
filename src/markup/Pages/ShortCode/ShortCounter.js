import React, { Component } from 'react';
import CountUp from 'react-countup';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle'
import Radial from './Radial';
import Radial2 from './Radial2';
import Radial3 from './Radial3';

import bnr from './../../../images/banner/bnr2.jpg';
import bnr2 from './../../../images/background/bg1.jpg';

import about1 from './../../../images/about/about1.jpg';
import about2 from './../../../images/about/about2.jpg';

const counterBlog = [
	{icon: <i className="ti-bag m-r10" />, num: '15',  title: 'Years in Business',},	
	{icon: <i className="ti-user m-r10" />, num: '700',    title: 'Happy Clients',},	
	{icon: <i className="flaticon-users m-r10" />, num: '50',   title: 'Technical Experts',},	
	{icon: <i className="ti-mobile m-r10" />, num: '200', title: 'Apps Delivered',},	
];
const counterBlog2 = [
	{ num: '5040',  title: 'Dias de experiencia', texto:"Sector real y solidario"},	
	{ num: '18',  title: 'Clientes felices', texto:"Asesorando y gestionando"},		
];
const counterBlog3 = [
	{icon: <i className="icon flaticon-bar-chart text-primary" />, num: '4922',  title: 'Completed Projects', num2: '7652',},	
	{icon: <i className="icon flaticon-avatar text-primary" />, num: '2934',    title: 'Happy Clients', num2: '4562',},	
	{icon: <i className="icon flaticon-file text-primary" />, num: '2296',   title: 'Questions Answered',num2: '3569', },	
	{icon: <i className="icon flaticon-pen text-primary" />, num: '1343', title: 'Ordered Coffee', num2: '2089', },	
];


class ShortCounter extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<PageTitle motherMenu= 'Counter' activeMenu='Counter' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-12  align-self-center " >
                                        <h5>Quienes somos</h5>
                                        <h2 className="font-weight-700">Más de 20 años de experiencia en el sector real y solidario </h2>
                                    </div>
                                    <div className="col-xl-8 col-lg-12 ">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
													<Radial />
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Day Of Experience</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
													<Radial2 />
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Awards Winning</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 ">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    
													<Radial3 />
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Happy Clients</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner overlay-primary bg-img-fix text-white" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    {counterBlog.map((data,index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6 p-a30">
											<h2 className="m-t0 m-b10 font-weight-400 font-45">{data.icon}<span className="counter"><CountUp end={data.num} duration={4}/></span>+</h2>
											<h4 className="font-weight-300 m-t0">{data.title}</h4>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner bg-img-fix ">
                            <div className="sort-title-bx" data-name="Element Style 3">Element Style 3 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <ConsultingBlog />
							</div>	
                        </div>
                        <div className="section-full content-inner overlay-primary bg-img-fix text-white" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 4">Element Style 4 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
										{counterBlog3.map((data,index)=>(
											<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
												<div className="counter-style-1">
													<div className="">
														{data.icon}
														<span className="counter"><CountUp end={data.num} duration={4}/></span>
													</div>
													<span className="counter-text">{data.title}</span>
												</div>
											</div>
										))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 5">Element Style 5 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
									{counterBlog3.map((data,index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													{data.icon}
													<span className="counter"><CountUp end={data.num2} duration={4}/></span>
												</div>
												<span className="counter-text">{data.title}</span>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
function ConsultingBlog(){
	return(
		<>
			<div className="row m-b30">
				<div className="col-lg-4 col-md-12 align-self-center" >
					<h5>Quienes somos</h5>
					<h2 className="font-weight-700">Más de 20 años de experiencia en el sector real y solidario</h2>
				</div>
				<div className="col-lg-8 col-md-12">
					<div className="row">
						{counterBlog2.map((data,index)=>(	
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="icon-bx-wraper bx-style-1 p-tb30 p-lr20 m-b30 center br-col-b1 bg-white">
									<h2 className="counter font-45"><CountUp end={data.num} duration={4}/></h2>
									<div className="icon-content">
										<h5 className="font-weight-500">{data.title}</h5>
										<p className="m-b0 font-14">{data.texto}</p>
									</div>
								</div>
							</div>
						))}	  
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6 m-b30">
					<img src={about1} className="radius-sm" alt="" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6 m-b30 ">
					<img src={about2} className="radius-sm" alt="" />
				</div>
			</div>
		</>
	)
}
export {ConsultingBlog};
export default ShortCounter;