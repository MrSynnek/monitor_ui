import {Modal,Button} from 'react-bootstrap'
import './Modal.css'

function VerticallyCenteredModal(props) {
        return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modalHeader">
          <Modal.Title id="contained-modal-title-vcenter"><p>{props.head}</p></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <p>{props.message}</p>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
            <Button className="deleteButton">Delete</Button>
            <Button onClick={props.onHide} className="cancleButton">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default(VerticallyCenteredModal)
  