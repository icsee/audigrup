import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../Layout/headerAudigrup';
import Footer from '../../Layout/FooterAudigrup';
import PageTitle from '../../Layout/PageTitle';
import SectionCounter from '../../Element/SectionCounterAudigrup';
import TestimonialCarousel from '../../Element/TestimonialCarousel';
import FormStyle from '../../Element/FormStyle';

//Images
import  about9 from './../../../images/about/ejecutiva.jpg';
import bg2 from './../../../images/background/bg-map.jpg';
import services1 from './../../../images/our-services/pic1.jpg';
import services2 from './../../../images/our-services/pic2.jpg';
import mision from './../../../images/our-work/mision.jpg';
import vision from './../../../images/our-work/team.jpg';
import bg1 from './../../../images/background/bg1.jpg';

import bnr from './../../../images/our-work/baner2.png';

class Aboutus1 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
					<div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<PageTitle motherMenu='Audigrup' />
					</div>	
                    <div className="content-block">
                        <div className="section-full content-inner-2">
                           <div className="container">
                                <div className="row ">
                                    <div className="col-lg-5 col-md-4 about-img">
                                        <img src={about9} data-tilt alt="" />
                                    </div>
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box left row m-lr0 ">
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">¿Quiénes somos?<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">Firma de auditoría integral</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>El Grupo Auditor y Financiero Integral, fue constituido en mayo de 2008 por los profesionales expertos en las ciencias contables Javier Rodrigo Jimenez Amaya, Henry Mauricio Puentes Cruz y Wilman Arely Muñoz Bustos, 
                                                    Contadores Públicos Titulados de profesión, el Grupo profesional que compone AUDIGRUP LTDA cuenta con más de veinte (20) años de experiencia ejerciendo auditoria y Revisoría Fiscal en el Sector Solidario y Comercial.</p>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
						{ /* Counetr section */ }
						   <SectionCounter /> 	
						{ /* Counetr section End*/ }
							<VisionBlog />
							
							
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
function VisionBlog(){
	return(
		<>
			<div className="section-ful our-about-info content-inner-1 " style={{ backgroundImage: "url(" + bg2 + ")",backgroundPosition:"center" ,backgroundRepeat:"no-repeat" }}>
				<div className="container">
					<div className="section-head text-center">
						<h2 className="box-title m-tb0">Misión y Visión<span className="bg-primary"></span></h2>
						<p> Nuestra firma, un grupo profesional para su respaldo empresarial. </p>
					</div>
					<div className=" row dzseth  m-b30">
						<div className="col-lg-6 col-md-12 m-b30 about-img ">
							<img src={mision} data-tilt alt="" />
						</div>
						<div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
							<div className="dis-tbl-cell">
								<h3 className="box-title">Misión<span className="bg-primary"></span></h3>
								<p className="font-16">Ofrecer un servicio experto de auditoría y ciencias contables, dirigido a la colectividad empresarial, 
								con el propósito de acompañamiento, diligencia y generación de ideas para soluciones de respaldo. </p>
								
							</div>
						</div>
					</div>
					<div className="row dzseth column-reverse">
						<div className="col-lg-6 col-md-12 dis-tbl text-justify">
							<div className="dis-tbl-cell">
								<h3 className="box-title">Visión<span className="bg-primary"></span></h3>
								<p className="font-16">
									Ser un grupo corporativo, reconocido como la mejor opción, en calidad, servicio y respaldo integral, adoptando herramientas y estándares
									internacionales generando riqueza en la sociedad mediante unidad empresarial. 
								</p>
							
							</div>
						</div>
						<div className="col-lg-6 col-md-12 about-img ">
							<img src={vision} data-tilt alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}	

export {VisionBlog};
export default Aboutus1;