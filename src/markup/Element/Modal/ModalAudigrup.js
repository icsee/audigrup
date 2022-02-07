import React from 'react';
import './loading.css';


// or less ideally
import { Button, Modal} from 'react-bootstrap';


class ModalAudigrup extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      show: props.show,
      open: props.open,
      backGroundModal:props.backGroundModal
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      this.setState({ 
        show: this.props.show, 
        titleModal:this.props.titleModal,
        bodyModal: this.props.bodyModal,
        backGroundModal:this.props.backGroundModal,
        enableCloseButton:this.props.enableCloseButton
      })
    }
  }

  render() {

    const handleClose = () => {
      this.setState({ show: false });
      this.props.handlerModal();
    }
    const { show, open ,enableCloseButton, backGroundModal} = this.state

    return (
      <>

        <Modal className="border d-flex align-items-center justify-content-center"
          open={open}
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className={backGroundModal} closeButton={enableCloseButton}>
            <Modal.Title>{this.props.titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!this.props.bodyModal &&(
              <div class="lds-hourglass"></div>
            )}
            {this.props.bodyModal &&(
              <p>{this.props.bodyModal}</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            {this.props.enableCloseButton && (
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </>
    )

  }
}

export default ModalAudigrup;