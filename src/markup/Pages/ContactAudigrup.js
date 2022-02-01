import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../Layout/headerAudigrup';
import Footer from '../Layout/FooterAudigrup';

import bgimg from './../../images/background/bg2.jpg';
import { Control, Form, Errors, actions } from 'react-redux-form';
import {  Button, Row, Col, Label } from 'reactstrap';

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    

class Contact extends Component {

    constructor(props) {
        super(props);

        
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Gracias por escribirnos');
      
        this.props.postFeedback(values.firstname, values.telnum, values.email, values.message, this.props.token.token );
        this.props.resetFeedbackForm();
    }
    

    render() {
        return (
            <>
                <Header />
                <div className="full-section">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xs-4">
                                    <div className="row text-white">
                                        <div className="col-lg-12 col-md-6 m-b30" >
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-location-pin"></i></span>
                                                        Estamos ubicados en
													</h5>
                                                    <p>Cr. 10 No 23 - 06 Of. 401 Bogotá-Colombia </p>
                                                    <h6 className="m-b15 font-weight-400"><i className="ti-alarm-clock"></i> Horario</h6>
                                                    <p className="m-b0">Lunes a viernes - 8:00 am -5:00 pm</p>
                                                    <p>Sábados - 8:00 am a 12:00 pm</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-email"></i></span>
                                                        E-mail
													</h5>
                                                    <p className="m-b0">audigrup@audigrup.com.co</p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-mobile"></i></span>
                                                        Teléfonos
														</h5>
                                                    <p>3112411218</p>
                                                    <p>3124311678</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xs-8">
                                <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                                 <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Nombre y Apellidos</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="Nombre y Apellidos"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Requerido',
                                            minLength: 'Debe contener más de dos letras',
                                            maxLength: 'Debe contener más de dos letras'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contacto.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Celular"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Requerido',
                                            minLength: 'Debe ser mayor a 2 números',
                                            maxLength: 'Debe contener 10 numeros o menos',
                                            isNumber: 'Debe ser un número'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Tus comentarios</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Enviar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Contact;