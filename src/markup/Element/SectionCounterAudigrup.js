import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';

import bg1 from './../../images/background/meet.jpg';

const iconBlog =[
	{icon: <i className="flaticon-management" />,	   title: 'Lideramos con ejemplo', texto:"Estimulamos, aporta ejemplo, trabaja codo con codo con sus colaboradores, somos coherente con lo que pensamos, con lo que se dice y con lo que se hace."},
	{icon: <i className="flaticon-team" />, title: 'Trabajo en equipo',texto:"Es la manera organizada de trabajar con el fin de alcanzar metas comunes. "},
	{icon: <i className="flaticon-leadership" />, title: 'Respeto',texto:"Es valor que permite a la firma, aceptar, apreciar y valorar las cualidades del grupo de trabajo, clientes y sus derechos."},
	{icon: <i className="flaticon-search" />, title: 'Investigación consulta e indagación',texto:"Proceso dinámico que consiste en estar abiertos a experimentar y llegar a conocer el mundo."},
	{icon: <i className="flaticon-communications" />, title: 'Comunicación',texto:"La acción de informar, generar acciones, crear un entendimiento o transmitir cierta idea."},
	{icon: <i className="flaticon-trophy" />, title: 'Compromiso e integridad',texto:"Poseemos la capacidad para tomar conciencia de la importancia de cumplir con honestidad y tener fuertes principios morales."},
];

class SectionCounter extends Component{
	render(){
		return(
			<Fragment>
				<div className="section-full content-inner-1 overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
					<div className="container">
						<div className="section-head text-white text-center">
							<h1 className="box-title m-tb0 max-w800 m-auto">Nuestros valores corporativos<span className="bg-primary"></span></h1>
							<h3 className="box-title m-tb0 max-w800 m-auto">Trabajamos con ética y calidad humana</h3>
						
						</div>
					</div>
					<div className="container">
						<div className="row text-white">
							{iconBlog.map((item, index)=> (
								<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
									<div className="icon-bx-wraper bx-style-1 center">
										<div className="icon-lg text-white m-b20 "> <span className="icon-cell icon-lg ">{item.icon}</span> </div>
										<div className="icon-content">
											<h3 className="dlab-tilte text-uppercase">{item.title}</h3>
											<h4 className="box-title m-tb0 max-w800 m-auto">{item.texto}</h4>
									
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					
				</div>	
			</Fragment>
		)
	}
}
export default SectionCounter;