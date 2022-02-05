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
      open: props.open
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      this.setState({ 
        show: this.props.show, 
        title:this.props.title,
        body: this.props.body,
        enableCloseButton:this.props.enableCloseButton
      })
    }
  }

  render() {

    const handleClose = () => {
      this.setState({ show: false });
      this.props.handlerModal();
    }
    const { show, open ,enableCloseButton} = this.state

    return (
      <>

        <Modal className="border d-flex align-items-center justify-content-center"
          open={open}
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton={enableCloseButton}>
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