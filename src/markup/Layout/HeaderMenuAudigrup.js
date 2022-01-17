import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component{
	render(){
		return(
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link to={'./'}><span className="ti-home"></span> <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'./'} className="dez-page">Inicio</Link></li>
							
						</ul>
					</li>
					<li><Link to={'#'}>Audigrup <i className="fa fa-chevron-down"></i></Link>
				
								<ul className="sub-menu">
									<li><Link to={'./about-1'} className="dez-page">Nosotros</Link></li>
								</ul>
						
					</li>
					<li><Link to={'#'}>Servicios<i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'./service'} className="dez-page">Services</Link></li>
							<li><Link to={'./services-details'} className="dez-page">Services Details</Link></li>
						</ul>
					</li>
					
					<li><Link to={'#'}>Agendas <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu left">
							<li><Link to={'./portfolio-full-width'} className="dez-page">Sector solidario  </Link></li>
							<li><Link to={'./portfolio-grid-2'} className="dez-page">Sector Real </Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Contáctanos <i className="fa fa-chevron-down"></i></Link>
						
					</li>
					
				</ul>
			</>
		)
	}
}
export default HeaderMenu;