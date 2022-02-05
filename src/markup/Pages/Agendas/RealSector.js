import React from "react";
import { API } from "../../Constants";
import Header from '../../Layout/header2';
import Footer from '../../Layout/FooterAudigrup';
//Modal
import ModalAudigrup from '../../Element/Modal/ModalAudigrup';
import { FaFileDownload } from 'react-icons/fa/';
import { Button } from 'react-bootstrap';
import { Alert } from "bootstrap";
import { uuid } from 'uuidv4';


class RealSector extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            realSectorList: [],
            dataisLoaded: false,
            showModal: false,
            title: '',
            body: null,
            enableCloseButton: false
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
        })

        fetch(`${API.REAL_SECTOR}`)
            .then((res) => res.json())
            .then((realSectorList) => {
                this.setState({
                    realSectorList,
                    dataisLoaded: realSectorList.length >= 0 ? true : false,
                    showModal: false
                });
            })
    }

    notFoundFile = () => {
        this.setState({
            showModal: true,
            titleModal: 'Falla en el archivo',
            bodyModal: 'Archivo no existe. Contacte su administrador.',
            enableCloseButton: true,
        })
    }

    downloadRealSector = (idRealSector, publicationDateFinal) => {

        this.setState({
            showModal: true,
            titleModal: 'Descargando...',
            bodyModal: null,
            enableCloseButton: false,
        })

        fetch(
            `${API.REAL_SECTOR}${idRealSector}`
        )
            .then((res) => {
                if (res.ok)
                    return Promise.resolve(res.json())
                else if (res.status == 404)
                    return Promise.reject(res.status)
                else {
                    this.setState({ dataisLoaded: false })
                    Alert('Error fatal. Comúniquese con su administrador')
                    return
                }
            })
            .then((realSector) => {
                this.setState({ showModal: false })
                const downloadLink = document.createElement("a")
                downloadLink.href = `data:pdf/${realSector.extension};base64,${realSector.content}`
                downloadLink.download = `file${publicationDateFinal.replace('/', '-')}.${realSector.extension}`
                downloadLink.click()
            })
            .catch(err => {
                this.setState({ showModal: false })
                this.notFoundFile()
            })
    }

    handleClick = (data, e) => {
        this.downloadRealSector(e.target.value, data.publicationDateFinal)
    }

    render() {
        const { dataisLoaded, realSectorList, titleModal, bodyModal, enableCloseButton, showModal } = this.state;

        return (
            <>
                <Header />

                <ModalAudigrup
                    handlerModal={this.handlerModal}
                    open={false}
                    show={showModal}
                    titleModal={titleModal}
                    bodyModal={bodyModal}
                    enableCloseButton={enableCloseButton} />


                <div className="section-ful our-about-info content-inner-1 " style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div className="container" >

                        <div className="col-md-12 text-center section-head">
                            <h2 className="font-weight-700 m-b0">Sector Real año {new Date().getFullYear()}</h2>
                            <p className="m-b0">Review sector real</p>
                        </div>

                        {dataisLoaded && realSectorList.length == 0 && (
                            <Alert key={uuid()} variant='danger'>
                                No cuenta con un listado de sectores solidarios. Contacte a su administrador.
                            </Alert>
                        )}

                        {dataisLoaded && realSectorList.map((realSector) => (
                            <>
                                <div className=" row dzseth  m-b30" key={realSector.idRealSector}>
                                    <div className="col-lg-6 col-md-12 m-b30 about-img ">
                                        <img src={realSector.contentImage} alt={realSector.extensionImage.id ? 'Not Found Image' : 'imageRealSector'} />
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                                        <div className="dis-tbl-cell">
                                            <h2 className="box-title m-tb0">{realSector.title}<span className="bg-primary"></span></h2>
                                            <p>Fecha de publicación: {realSector.publicationDateFinal}  </p>
                                            <h3 className="box-title">{realSector.title}<span className="bg-primary"></span></h3>
                                            <p className="font-16">{realSector.summary}</p>
                                        </div>
                                        <Button variant="dark" value={realSector.idRealSector} onClick={this.handleClick.bind(this, realSector)}>
                                            <FaFileDownload />  Descargar
                                        </Button>
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default RealSector;
