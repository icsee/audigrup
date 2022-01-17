import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Layout/header2';
import Footer2 from '../Layout/footer2';
import {ConsultingBlog} from './ShortCode/ShortCounter'; 
import TestimonialStyle2 from './ShortCode/TestimonialStyle2'; 
import LineChart from './ShortCode/LineChart'; 
import {FormBlog} from './ShortCode/ShortForm'; 
import OurBlogSlider from '../Element/OurBlogSlider';
// Se cambio Index3Slider
import Index3Slider from '../Element/IndexSliderAudigrup';

//Images
import bg1 from './../../images/background/bg1.jpg';
import bg14 from './../../images/background/bg14.jpg';
import bg15 from './../../images/background/bg15.jpg';
import bg12 from './../../images/background/bg12.jpg';
import bg11 from './../../images/background/bg11.jpg';
import bg13 from './../../images/background/bg13.jpg';
import bg3 from './../../images/background/bg3.jpg';
import revisoriafiscal from './../../images/our-work/revisoria2.jpg';
import gestioncontable from './../../images/our-work/revisoriafiscal.jpg';
import salud from './../../images/our-work/salud.jpg';
import audiexterinter from './../../images/our-work/audiexterinter.jpg';
import quality from './../../images/our-work/quality.jpg';
import advisor from './../../images/our-work/advisor.jpg';
import work2 from './../../images/our-work/pic2.jpg';
import safety from './../../images/our-work/safety.jpg';
import work4 from './../../images/our-work/pic4.jpg';
import grid1 from './../../images/blog/grid/pic1.jpg';
import grid2 from './../../images/blog/grid/pic2.jpg';
import grid3 from './../../images/blog/grid/pic3.jpg';
import team1 from './../../images/our-team/pic1.jpg';
import team2 from './../../images/our-team/pic2.jpg';
import team3 from './../../images/our-team/pic3.jpg';
import team4 from './../../images/our-team/pic4.jpg';
import logo1 from './../../images/client-logo/logo/logo1.jpg';
import logo2 from './../../images/client-logo/logo/logo2.jpg';
import logo3 from './../../images/client-logo/logo/logo3.jpg';
import logo4 from './../../images/client-logo/logo/logo4.jpg';
import logo5 from './../../images/client-logo/logo/logo5.jpg';


const dlabBox=[
	{icon: <i className="flaticon-search" />, title:'Revisoría Fiscal', image: revisoriafiscal, resumen:'Órgano de fiscalización de las empresas, que tiene como finalidad verificar el cumplimiento de normas internas y externas, y dictaminar los estados financiero.            ' },
    {icon: <i className="flaticon-operation" />, title:'Consultoría en calidad y procesos', image: quality, resumen:'Implementamos programas orientados al perfeccionamiento de los procesos, de modo de asegurar la óptima calidad de los productos y servicios ofrecidos.            '},
	{icon: <i className="flaticon-bar-chart" />, title:'Asesoría Gerencial', image: advisor, resumen:'Orientada a gerentes de empresas, gobiernos locales, presidentes de empresas y directivos corporativos, en sus procesos de planeación y toma de decisiones.                   ' },
	{icon: <i className="flaticon-accounting" />, title:'Gestión opertativa del área contable, outsourcing contable', image: gestioncontable, resumen:'Optimización de los procesos contables y financieros. Calidad en los reportes emitidos. Oportunidad en la entrega de reportes.'},
    {icon: <i className="flaticon-money" />, title:'Asesoría tributaria', image: work2,  resumen:'Comprende la implementación de controles y procedimientos necesarios para la adecuada aplicación de las normas tributarias.       ' },
    {icon: <i className="flaticon-maze" />, title:'Auditoría interna y externa', image: audiexterinter, resumen:'Objetivo analizar y mejorar los controles y el desempeño y se pretende expresar una opinión sobre el estado financiero.                                                      '},
    {icon: <i className="flaticon-organization" />, title:'Auditoria en salud', image: salud, resumen:'Proceso de evaluación sistemática de la calidad y la gestión de recursos en la atención en salud.                                                                             '},
    {icon: <i className="flaticon-workers" />, title:'Auditoria y asesoría en SG SST', image: safety, resumen:'Diagnóstico Y Plan Anual De Trabajo SGSST A La Medida De Su Negocio.                                                                                                   '},
];

const gridBlog = [
	{	image: grid1, icon: <i className="flaticon-money" />, title: 'Business Planning, Strategy & Execution', },
	{	image: grid2, icon: <i className="flaticon-bar-chart" />, title: 'Financial Projections And Analysis', },
	{	image: grid3, icon: <i className="flaticon-notebook" />, title: 'International Business Opportunities', },
];

const teamBlog = [
	{image: team1, },{image: team2, },{image: team3, },{image: team4, }, 
];

const logoBlog = [
	{ image: logo1},{ image: logo2},{ image: logo3},{ image: logo4},{ image: logo2},{ image: logo3},
	{ image: logo4},{ image: logo5},{ image: logo1},{ image: logo3},{ image: logo4},{ image: logo2},
	
];

class IndexAudigrup extends Component {

    componentDidMount() {  
		var GalleryCategory = document.querySelectorAll('.box-hover');
		var fch = [].slice.call(GalleryCategory);
		
		for (var y = 0; y < fch.length; y++) {
            fch[y].addEventListener('mouseenter', function () { 
				galleryActive(this);
			});
        }
        
		function galleryActive(current) 
		{
            fch.forEach(el => el.classList.remove('active'));
			
			setTimeout(() => {
				 current.classList.add('active');
			},  100); 
		}
    }

    render() {
        return (
            <>
                <Header2 />

                <div className="page-content bg-white">
					
					<div className="owl-slider-banner main-slider dz-style-3">
						<Index3Slider />
					</div>	
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Our Awesome Services --> */}
                        <div className="section-full bg-blue-light content-inner about-us-box" style={{ backgroundImage: "url(" + bg15 + ")", backgroundSize: "cover" }}>
                            <div className="container">
                            <div className="row">
                                    <div className="col-md-12 col-lg-12 text-center section-head">
                                        <h2 className="font-weight-700 max-w700 m-auto">Somos los mejores en ...</h2>
                                        <p className="m-b0">Ofrecemos los siguientes servicios con los estándares mas altos de calidad </p>
                                    </div>
                                </div>
                                <div className="row">
									{dlabBox.map((item, index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6" key={index}>
											<div className="dlab-box-bg m-b30 box-hover fly-box " style={{ backgroundImage: "url(" + item.image + ") " }}>
												<div className="icon-bx-wraper center  p-lr20 p-tb30 ">
													<div className="text-primary">
														<span className="icon-cell icon-lg ">{item.icon}</span>
													</div>
													<div className="icon-content m-b20">
														<h5 className="dlab-tilte">{item.title}</h5>
														<p>{item.resumen}</p>
													</div>
													<Link to={'#'} className="site-button red">Leer más</Link>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box row" >
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">Audigrup Ltda.<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">Nuestra experiencia nos hace su mejor opción.</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>El Grupo Auditor y Financiero Integral, fue constituido en mayo de 2008 por los Doctores Javier Rodrigo Jimenez Amaya y Henry Mauricio Puentes Cruz, Contadores Públicos Titulados de profesión, el Grupo profesional que compone AUDIGRUP LTDA cuenta con más de veinte (20) años de experiencia ejerciendo auditoria y Revisoría Fiscal en el Sector Solidario y Comercial.  
</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 about-img" >
                                        <img src={gestioncontable} data-tilt alt="" />
                                    </div>
                                </div>
                        
                        <div className="section-full content-inner bg-img-fix" style={{ backgroundImage: "url(" + bg12 + ")" }}>
                            <div className="container">
                                <ConsultingBlog />
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-2 bg-img-fix" style={{ backgroundImage: "url(" + bg13 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head">
                                        <h2 className="font-weight-700 m-b0">Nuestro equipo</h2>
                                        <p className="m-b0">Contamos con expertos profesionales especializados en ...</p>
                                    </div>
                                </div>
                                <div className="row m-b50">
									{teamBlog.map((item,index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
											<div className="team-section">
												<img src={item.image} alt="" />
												<div className="team-content text-white">
													<p className="m-a0">Manager</p>
													<h6 className="text-uppercase text-black m-b0">John Deo</h6>
													<div className="dlab-divider bg-white mt-2 mb-2"></div>
													<ul className="list-inline m-a0">
														<li><Link to={"#"} className="text-white"><i className="fa fa-facebook"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-linkedin"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-instagram"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-twitter"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-12 text-center section-head">
                                        <h2 className="m-b10">Nuestros clientes</h2>
                                        <h5 className="m-b0 font-weight-300 max-w600 m-auto">Our unmatched quality services are recognized by world's top research &amp; review companies</h5>
                                    </div>
                                </div>
                                <div className="row m-b30">
									{logoBlog.map((data,index)=>(
										<div className="col-md-2 col-sm-4 col-6 m-b30" key={index}>
											<div className="br-col-b1 border-1"><img src={data.image} alt="" /></div>
										</div>
									))}	
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* <!-- About Quotes End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer2 />
            </>
        )
    }
}
export default IndexAudigrup;