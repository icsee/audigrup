import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component{
	render(){
		return(
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link to={'./'}><span className="ti-home"></span> <i className="fa fa-chevron-down"></i></Link>
						
					</li>
					<li><Link to={'./about-1'}>Audigrup <i className="fa fa-chevron-down"></i></Link>
				
								
						
					</li>
					<li><Link to={'./services-details'}>Servicios<i className="fa fa-chevron-down"></i></Link>
						
					</li>
					
					<li><Link to={'#'}>Agendas <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu left">
							<li><Link to={'./real-sectors'} className="dez-page">Sector Real</Link></li>
							<li><Link to={'./solidarity-sectors'} className="dez-page">Sector Solidario</Link></li>
						</ul>
					</li>
					<li><Link to={'/contact'}>Contáctanos <i className="fa fa-chevron-down"></i></Link>
						
					</li>
					
				</ul>
			</>
		)
	}
}
export default HeaderMenu;