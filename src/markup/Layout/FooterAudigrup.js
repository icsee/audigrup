import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top bg-primary">
                        <div className="container" >
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Empresa</h5>
                                        <ul>
											<li><Link to={'./about-1'}>Audigrup </Link></li>
                                            <li><Link to={'./'}>Home </Link></li>
                                            <li><Link to={'./services-details'}>Servicios</Link></li>
                                            <li><Link to={"#"}>Nuestro equipo</Link></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Contactanos</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>Dirección</strong> Av. Cra. 68 75 A 50 OF 310 Ofiespacios Centro Empresarial Metropolis  Bogotá-Colombia </li>
                                            <li><i className="ti-mobile"></i><strong>Teléfono</strong>3112411218 - 3124311678 - 601 347 21 94 </li>

                                                                                                                                                                       
                                            <li><i className="ti-email"></i><strong>email</strong>audigrup@audigrup.com.co</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        
                                        <ul className="list-inline m-a0">
                                            <li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><Link to={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </footer>
            </>
        );
    }
}

export default Footer1;