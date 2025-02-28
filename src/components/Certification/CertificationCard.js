import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdVerified } from "react-icons/md";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

function CertificationCard(props) {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <>
      <Card className="certification-card-view">
        {/* Conditionally render the image only if imgPath is provided */}
        {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />}

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <strong>Issued by:</strong> {props.issuedBy}
          </Card.Text>

          <div className="certification-card-footer">
            {/* Badge link if available */}
            {props.certLink && (
              <Button variant="primary" href={props.certLink} target="_blank" style={{ marginRight: "10px" }}>
                <MdVerified /> &nbsp; View Badge
              </Button>
            )}

            {/* PDF Modal button */}
            {props.pdfLink && (
              <Button variant="secondary" onClick={() => setShowPDF(true)}>
                <BsFillFileEarmarkPdfFill /> &nbsp; View Certificate
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Modal for PDF Viewer */}
      <Modal show={showPDF} onHide={() => setShowPDF(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title} - Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={props.pdfLink}
            width="100%"
            height="500px"
            title="Certification PDF"
            style={{ border: "none" }}
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CertificationCard;
