import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Layout/headerAudigrup';
import Footer2 from '../Layout/FooterAudigrup';
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
import javier from './../../images/our-team/javier.jpeg';
import mauricio from './../../images/our-team/mauricio.jpeg';
import logo1 from './../../images/logoclientes/Imagen1.png';
import logo2 from './../../images/logoclientes/Imagen2.png';
import logo3 from './../../images/logoclientes/Imagen3.png';
import logo4 from './../../images/logoclientes/Imagen4.png';
import logo5 from './../../images/logoclientes/Imagen5.png';
import logo6 from './../../images/logoclientes/Imagen6.png';
import logo7 from './../../images/logoclientes/Imagen7.jpg';
import logo8 from './../../images/logoclientes/Imagen8.jpg';
import logo9 from './../../images/logoclientes/Imagen9.png';
import logo10 from './../../images/logoclientes/Imagen10.png';
import logo11 from './../../images/logoclientes/Imagen11.png';
import logo12 from './../../images/logoclientes/Imagen12.png';
import logo13 from './../../images/logoclientes/Imagen13.png';
import logo14 from './../../images/logoclientes/Imagen14.png';
import logo15 from './../../images/logoclientes/Imagen15.png';
import logo16 from './../../images/logoclientes/Imagen16.png';
import logo17 from './../../images/logoclientes/Imagen17.png';


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
	{image: mauricio, cargo:"Socio Gerente de Auditoria",nombre:"CP DR. HENRY MAURICIO PUENTES CRUZ", resumen:"Amplia experiencia y conocimiento en Revisoría Fiscal y en las áreas de Contabilidad, Auditoria Interna - Externa y Consultoría, Análisis Financiero y evaluación de cuentas, coordinación del trabajo y manejo de relaciones con la alta gerencia de los usuarios. Diplomado en Normas Internaciones de Auditoria NIA Cámara de Comercio de Bogotá 2014, IFRS Normas de información Financiara 2012 Price Wáter House Couper 2012 Gestión Tributaria (Impuestos Nacionales y Distritales) y Gestión de Riesgo de Lavado de Activos y Financiación del Terrorismo (SARLAFT) y Sistema Integrado de Administración de Riesgo (SIAR). Universidad EAN. "  },
    {image: javier, cargo:"SOCIO – Gerente General", nombre:"CP DR JAVIER RODRIGO JIMÉNEZ AMAYA", resumen:"Con amplia experiencia y conocimiento en las áreas de Contabilidad, Auditoría y Consultoría, coordinación del trabajo y manejo de relaciones con la alta gerencia de los usuarios,  Administración y capacitación técnica de talento humano a cargo, comercialización del portafolio de servicios. Diplomado en Normas Internaciones de Auditoria NIA Cámara de Comercio de Bogotá 2014, IFRS Normas de información Financiara 2012 Price Wáter House Couper 2012 Gestión Tributaria (Impuestos Nacionales y Distritales) y Gestión de Riesgo de Lavado de Activos y Financiación del Terrorismo (SARLAFT) y Sistema Integrado de Administración de Riesgo (SIAR). Universidad EAN." }
    ,{image: team1, cargo: "Coordinador de Auditoria", nombre:"CP DR. WILMAN ARLEY MUÑOZ BUSTOS", resumen:"Profesional en contaduría pública con una amplia experiencia y conocimiento en las áreas de Contabilidad y evaluación de cuentas, coordinación del trabajo y manejo de excelentes relaciones interpersonales. Diplomado Normas Internacionales de Información Financiera NIIF. Universidad Externado de Colombia 2013. Normas Internacionales de Auditoria y Aseguramiento. Cámara de Comercio de Bogotá 2014.Gestión de Riesgo de Lavado de Activos y Financiación del Terrorismo (SARLAFT) y Sistema Integrado de Administración de Riesgo (SIAR). Universidad EAN."}, 
];

const logoBlog = [
	{ image: logo1},{ image: logo2},{ image: logo3},{ image: logo4},{ image: logo5},{ image: logo6},
	{ image: logo7},{ image: logo8},{ image: logo9},{ image: logo10},{ image: logo11},{ image: logo12},
	{ image: logo13},{ image: logo14},{ image: logo15},{ image: logo16},{ image: logo17}
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
													<Link to={'./services-details'} className="site-button red">Leer más</Link>
                                                   
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
                                                <h2 className="box-title m-tb0">Cómo seleccionar una firma?.<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">Nosotros te lo explicamos.</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p class=" m-b15">La Declaración Profesional No. 7 del Consejo Técnico de la Contaduría Pública dictamina que “la revisoría fiscal es un órgano de fiscalización que, 
                                                    en interés de la comunidad, bajo la dirección y responsabilidad del revisor fiscal y con sujeción a las normas de auditoría generalmente aceptadas,
                                                 le corresponde dictaminar los estados financieros y revisar y evaluar sistemáticamente sus componentes y elementos que integran el control interno, en forma oportuna e independiente en los términos que le señala la ley, 
                                                 los estatutos y los pronunciamientos profesionales</p>
                                                 <h4 className="text-gray-dark">¿Qué factores debes tomar en cuenta a la hora de contratar una revisoría fiscal?</h4>
                                                 <p class=" m-b15">-Liderazgo y responsabilidad por la calidad dentro de la firma</p>
                                                 <p class=" m-b15">-Monitorear las actividades que realizan los consultores de la firma</p>
                                                 <p class=" m-b15"> -Deben tener definido un programa de trabajo y evidencia de actividades previamente ejecutadas</p>
                                                 <p class=" m-b15"> -Deben contar con personal calificado que pueda desarrollar las actividades delegadas dentro de los encargos de auditoría </p>
                                                 <p class=" m-b15"> -La firma debe diseñar un código de ética aplicable a todo su equipo de trabajo </p>
                                                 <p class=" m-b15"> -Es necesario que sepan identificar riesgos y controles para atender los casos con comportamiento ético </p>
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
										<div className="col-md-6 col-lg-4 col-sm-6 m-b30 " key={index}>
											<div className="team-section">
												<img src={item.image} alt="" />
												<div className="team-content text-white">
													<p className="m-a0">{item.cargo}</p>
													<h6 className="text-uppercase text-black m-b0">{item.nombre}</h6>
                                                    <div className="dlab-divider bg-white mt-2 mb-2"></div>
													<ul className="list-inline m-a0">
														<li><Link to={"#"} className="text-white"><i className="fa fa-facebook"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-linkedin"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-instagram"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-twitter"></i></Link></li>
													</ul>
												</div>
                                              
											</div>
                                        
                                            <p class=" m-b15">{item.resumen}</p>		
														
											
                                           
										</div>
									))}
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-12 text-center section-head">
                                        <h2 className="m-b10">Experiencia y logros</h2>
                                        <h5 className="m-b0 font-weight-300 max-w600 m-auto">Nos sentimos orgullosos del camino recorrido hasta el momento de la mano de nuestros clientes</h5>
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