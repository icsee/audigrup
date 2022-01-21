import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';

import bg1 from './../../images/background/meet.jpg';

const iconBlog =[
	{icon: <i className="flaticon-management" />,	   title: 'Lideramos con ejemplo', texto:"opcional"},
	{icon: <i className="flaticon-team" />, title: 'Trabajo en equipo',texto:"opcional"},
	{icon: <i className="flaticon-leadership" />, title: 'Respeto',texto:"opcional"},
	{icon: <i className="flaticon-search" />, title: 'Investigación consulta e indagación',texto:"opcional"},
	{icon: <i className="flaticon-communications" />, title: 'Comunicación',texto:"opcional"},
	{icon: <i className="flaticon-trophy" />, title: 'Compromiso e integridad',texto:"opcional"},
];

class SectionCounter extends Component{
	render(){
		return(
			<Fragment>
				<div className="section-full content-inner-1 overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
					<div className="container">
						<div className="section-head text-white text-center">
							<h2 className="box-title m-tb0 max-w800 m-auto">Nuestros valores corporativos<span className="bg-primary"></span></h2>
							<p>Trabajamos con ética y calidad humana</p>
						</div>
					</div>
					<div className="container">
						<div className="row text-white">
							{iconBlog.map((item, index)=> (
								<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
									<div className="icon-bx-wraper bx-style-1 center">
										<div className="icon-lg text-white m-b20 "> <span className="icon-cell icon-lg ">{item.icon}</span> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
											<p>{item.texto}</p>
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