import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/headerAudigrup';
import Footer from '../../Layout/FooterAudigrup';
import PageTitle from '../../Layout/PageTitle';
import SectionCounter from '../../Element/SectionCounterAudigrupServicio';
import TestimonialCarousel from '../../Element/TestimonialCarousel';
import FormStyle from '../../Element/FormStyle';
import ThemeButton from '../../Element/ThemeButton/ThemeButtonAudigrup';
//Images
import bnr1 from './../../../images/banner/bnr4.jpg';
import bgmap from './../../../images/background/bg-map.jpg';
import bg1 from './../../../images/background/bg1.jpg';
import tributaria from './../../../images/audigrup/tributaria.jpg';
import gestion from './../../../images/audigrup/gestion.jpg';
import salud from './../../../images/audigrup/salud.jpg';
import calidad from './../../../images/audigrup/calidad.jpg';

const iconWraper=[
	
	{icon: <i className="flaticon-pen" />, title:'Financiera', resumen:'Determinar si los estados financieros de la Entidad, correspondientes al año terminado se presentan de acuerdo con Normas de Contabilidad Generalmente aceptadas en Colombia y si reflejan razonablemente la situación financiera.'},
	{icon: <i className="flaticon-accounting" />, title:'Control Interno', resumen:'Evaluar el sistema de control interno de la  Organización, para conceptuar sobre el adecuado uso del mismo, identificar sus debilidades y presentar recomendaciones para el fortalecimiento de éste. '},
	{icon: <i className="flaticon-management" />, title:'Cumplimiento y Gestión', resumen:'Verificar el cumplimiento de las disposiciones adoptadas por los órganos de Admón. Lo mismo que las normas legales y reglamentaciones relacionadas con sus operaciones. Evaluar y conceptuar sobre la gestión realizada por los órganos administrativos.'},
	{icon: <i className="flaticon-devices" />, title:'Sistemas', resumen:'Lo importante de la Auditoria Integral es evaluar las aplicaciones existentes, el hardware utilizado y en general la evaluación del área de sistemas'},

];

const titleBlog=[
	{title1:'PHP Web', title2: 'Portals'}, 
	{title1:'PHP Mobile', title2: 'Web Services'}, 
	{title1:'PHP Backend', title2: 'Solutions'}, 
	{title1:'Social Networking', title2: 'Development'}, 
	{title1:'PHP eCommerce', title2: 'Solution'}, 
	{title1:'PHP', title2: 'Frameworks'}, 
];

class ServicesDetails extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Detalle de nuestros servicios' activeMenu='Detalle de servicios' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner exp-services">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-black text-center">
                                            <h2 className="box-title m-tb0">Revisoría Fiscal<span className="bg-primary"></span></h2>
                                            <p className="font-weight-300 font-18">La revisoría es una figura contemplada por el artículo 203 del código de comercio, la ley 43 de 1990 y otras leyes que de forma particular contienen la obligación de tener una revisoría fiscal.
                                                    La revisoría fiscal no es más que un órgano que se encarga de fiscalizar o revisar los procedimientos internos de las empresas, a fin de verificar que estas hayan cumplido normas estatutarias, y leyes que le son aplicables,
                                                     y que la información contable y los estados financieros, se emitan en cumplimiento de las normas contables aplicables.
                                            </p>
                                        </div>
                                        <div className="row serv">
											{iconWraper.map((data,index)=>(	
												<div className="col-lg-3 col-md-4 col-sm-6 m-b30" key={index}>
                                                    
													<div className="icon-bx-wraper expertise  p-lr10 p-tb20 center">
														<div className="icon-bx-sm bg-primary radius m-b20">
															<div className="icon-cell icon-lg">{data.icon}</div>
														</div>
														<div className="icon-content m-b20">
															<h4 className="dlab-tilte">{data.title}</h4>
                                                             <h6 className="box-title m-tb0 max-w800 m-auto">{data.resumen}</h6>
														</div>
													</div>
												</div>
											))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        
                        {/* <!-- About Us --> */}
                        <div className="section-full">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-12 p-a0 img-fix">
                                        <img src={tributaria} alt="" className="img-cover" />
                                    </div>
                                    <div className="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell ">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-white">
                                                        <h3 className="box-title m-b10">Asesoría Tributaria<span className="bg-primary"></span></h3>
                                                      
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 chosesus-content">
                                                       
                                                        <p>El servicio de asesoría tributaria comprende la implementación de controles y procedimientos necesarios para la adecuada aplicación de las normas tributarias, de manera que le permita a las compañías hacer una racionalización de los impuestos y recursos financieros. Las operaciones de la compañía son analizadas, al igual que las declaraciones tributarias, se verifica el cumplimiento de las normas fiscales y se brinda una asesoría de las respuestas a los requerimientos de las autoridades fiscales.</p>
                                                        
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                        <div className="section-full content-inner exp-services">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-black text-center">
                                            <h2 className="box-title m-tb0">Outsourcing Contable<span className="bg-primary"></span></h2>
                                            <p className="font-weight-300 font-18">El outsourcing contable es la administración de todas las operaciones contables financieras y tributarias de una empresa es decir la emisión de los estados financieros, el planeamiento contable, tributario, la liquidación de impuestos, el registro contable de las operaciones en el sistema.
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
						{/* <!-- Why Chose Us --> */}
							<SectionCounter />
                            {/* <!-- Why Chose Us --> */}
                       

                        <div className="section-full">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                   
                                    <div className="col-lg-6 col-md-12 bg-withe-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell ">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-balck">
                                                        <h3 className="box-title m-b10">Consultoría en calidad y procesos<span className="bg-primary"></span></h3>
                                                      
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 chosesus-content">
                                                       
                                                        <p>Analiza la empresa y su entorno: organización, estrategia competitiva, gestión financiera, indicadores y costes. Colabora en la definición de las normas de calidad internas y las concreta en procesos según la política de calidad de la empresa. Controla los índices de calidad y su evolución.</p>
                                                        
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 p-a0 img-fix">
                                        <img src={calidad} alt="" className="img-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Gestion --> */}
                        <div className="section-full">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-12 p-a0 img-fix">
                                        <img src={gestion} alt="" className="img-cover" />
                                    </div>
                                    <div className="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell ">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-white">
                                                        <h3 className="box-title m-b10">Gestión Operativa del área contable<span className="bg-primary"></span></h3>
                                                      
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 chosesus-content">
                                                       
                                                        <p>La gestión operativa abarca cambios no solamente en la estructura de la organización, sino también en el sistema de roles y funciones contables, lo cual tienen una notable influencia en cuestiones como la elección de personal y mandos intermedios. Asimismo, la gestión operativa influye en los procesos de capacitación del personal, las relaciones entre los circuitos organizativos y la tecnología y la introducción de innovaciones técnicas y estratégicas acordes con los proyectos en curso.</p>
                                                        
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Testimonials END --> */}

                        <div className="section-full">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                   
                                    <div className="col-lg-6 col-md-12 bg-withe-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell ">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-balck">
                                                        <h3 className="box-title m-b10">Auditoría en Salud<span className="bg-primary"></span></h3>
                                                      
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 chosesus-content">
                                                       
                                                        <p>La auditoría en salud es un proceso de evaluación sistemática de la calidad y la gestión de recursos en la atención en salud, con el fin de identificar deficiencias y producir mejoras para el beneficio de la población. La auditoría basada en evidencias utiliza como herramientas la bioestadística y la epidemiología.</p>
                                                        
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 p-a0 img-fix">
                                        <img src={salud} alt="" className="img-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner exp-services">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-black text-center">
                                            <h2 className="box-title m-tb0">Auditoria y asesoría en SG SST<span className="bg-primary"></span></h2>
                                            <p className="font-weight-300 font-18">Brindamos a todas las empresas el servicio de asesoría, consultoría, implementación, auditoría y
continuidad del Sistema de Gestión en Seguridad y Salud en el Trabajo según el Decreto 1072 del
2015 y Resolución 0312 del 2019. Ejecutando diseño y desarrollo donde creamos estrategias de
gestión en prevención de riesgos para responder y proteger a los trabajadores, utilizando
herramientas para la orientación empresarial en Colombia.
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Get in touch --> */}
                       
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>
                <ThemeButton />
                <Footer />
            </>
        )
    }
}
export default ServicesDetails;