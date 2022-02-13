import React from "react";
import { API } from "../../../shared/baseUrl";
import Header from '../../Layout/headerAudigrup';
import Footer from '../../Layout/FooterAudigrup';
//Modal
import ModalAudigrup from '../../Element/Modal/ModalAudigrup';
import { FaFileDownload } from 'react-icons/fa/';
import { Button, Alert } from 'react-bootstrap';
import { uuid } from 'uuidv4';


class Bolletin extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            bolletinList: [],
            dataisLoaded: false,
            showModal: false,
            title: '',
            body: null,
            enableCloseButton: false,
            backGroundModal:'bg-warning'
        };

        this.handlerModal = this.handlerModal.bind(this)
    }

    handlerModal() {
        this.setState({
            showModal: false
        })
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {

        this.setState({
            showModal: true,
            titleModal: 'Cargando...',
            bodyModal: null,
            enableCloseButton: false,
            backGroundModal:'bg-dark'
        })

        fetch(`${API.BOLLETINS}`)
            .then((res) => res.json())
            .then((bolletinList) => {
                this.setState({
                    bolletinList,
                    dataisLoaded: bolletinList.length >= 0 ? true : false,
                    showModal: false
                });
            })
    }

    render() {
        const { dataisLoaded, bolletinList, titleModal, bodyModal, enableCloseButton, showModal, backGroundModal } = this.state;

        return (
            <>
                <ModalAudigrup
                    handlerModal={this.handlerModal}
                    open={false}
                    show={showModal}
                    titleModal={titleModal}
                    bodyModal={bodyModal}
                    enableCloseButton={enableCloseButton} 
                    backGroundModal={backGroundModal}/>


                <div className="section-ful our-about-info content-inner-1 " style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div className="container" >

                        <div className="col-md-12 text-center section-head">
                            <h2 className="font-weight-700 m-b0">Indicadores y Actualidad año {new Date().getFullYear()}</h2>
                           
                        </div>

                        {typeof(bolletinList.length) === 'undefined' &&(
                            <Alert variant='danger'>
                                No cuenta con un listado de boletines. Contacte a su administrador.
                            </Alert>
                        )}

                        {dataisLoaded && bolletinList.map((bolletin) => (
                            <>
                                <div className=" row dzseth  m-b30" key={bolletin.idbolletin}>
                                    <div className="col-lg-6 col-md-12 m-b30 about-img ">
                                        <center>
                                        <img class="img-fluid" src={bolletin.contentImage} alt={bolletin.extensionImage.id ? 'Not Found Image' : 'imagebolletin'} />
                                        </center>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                                        <div className="dis-tbl-cell">
                                            <h2 className="box-title m-tb0">{bolletin.title}<span className="bg-primary"></span></h2>
                                            <p>Fecha de publicación: {bolletin.publicationDateFinal}  </p>
                                            <p className="font-16">{bolletin.review}</p>
                                            <p className="font-16">{bolletin.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </>
        );
    }
}

export default Bolletin;
