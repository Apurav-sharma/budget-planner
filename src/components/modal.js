import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEdit } from "react-icons/fa";

function MODAL({ setbudget }) {
  const [show, setShow] = useState(false);
  var [newbudget, setnew] = useState(2000);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();
    setbudget(newbudget);
    handleClose();
  }

  return (
    <>
      <FaEdit onClick={handleShow} style={{ cursor: "pointer" }} />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Budget</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              value={newbudget}
              onChange={(e) => setnew(e.target.value)}
              placeholder="Enter..."
              className="form-control"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Understood
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default MODAL;
