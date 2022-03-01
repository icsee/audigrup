import React from "react";
import { API } from "../../../shared/baseUrl";
import Header from '../../Layout/headerAudigrup';
import Footer from '../../Layout/FooterAudigrup';
//Modal
import ModalAudigrup from '../../Element/Modal/ModalAudigrup';
import { FaFileDownload } from 'react-icons/fa/';
import { Button, Alert } from 'react-bootstrap';
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
            enableCloseButton: false,
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

        fetch(`${API.REAL_SECTOR}`)
            .then((res) => {
                if (res.status == 200) {
                    return Promise.resolve(res.json())
                }
                else if (res.status == 404) {
                    return Promise.reject(res.json())
                }
                else
                    return alert('Error fatal. Contacte su administrador.')
            })
            .then((realSectorList) => {
                this.setState({
                    realSectorList,
                    dataisLoaded: true,
                    showModal: false,
                });
            })
            .catch(err => {
                this.setState({
                    realSectorList: [],
                    dataisLoaded: true,
                    showModal: false,
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
        const { dataisLoaded, realSectorList, titleModal, bodyModal, enableCloseButton, showModal, responseStatus } = this.state;

        return (
            <>
                <Header />

                <ModalAudigrup
                    handlerModal={this.handlerModal}
                    open={false}
                    show={showModal}
                    titleModal={titleModal}
                    bodyModal={bodyModal}
                    enableCloseButton={enableCloseButton}
                    backGroundModal={'bg-dark'} />


                <div className="section-ful our-about-info content-inner-1 " style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div className="container" >

                        <div className="col-md-12 text-center section-head">
                            <h2 className="font-weight-700 m-b0">Sector Real año {new Date().getFullYear()}</h2>
                            <p className="m-b0">Review sector real</p>
                        </div>

                        {dataisLoaded && realSectorList.length=== 0 && (
                            <Alert variant='danger'>
                                No cuenta con un listado de sectores reales. Contacte a su administrador.
                            </Alert>
                        )}

                        {dataisLoaded && realSectorList.map((realSector) => (
                            <>
                                <div className=" row dzseth  m-b30" key={realSector.idRealSector}>
                                    <div className="col-lg-6 col-md-12 m-b30 about-img ">
                                        <center>
                                            <img src={realSector.contentImage} alt={realSector.extensionImage.id ? 'Not Found Image' : 'imageRealSector'} />
                                        </center>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                                        <div className="dis-tbl-cell">
                                            <h2 className="box-title m-tb0">{realSector.title}<span className="bg-primary"></span></h2>
                                            <p>Fecha de publicación: {realSector.publicationDateFinal}  </p>
                                            <Button variant="dark" value={realSector.idRealSector} onClick={this.handleClick.bind(this, realSector)}>
                                                <FaFileDownload />  Descargar
                                            </Button>
                                            {/* <p className="font-16">{realSector.summary}</p> */}
                                        </div>
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
