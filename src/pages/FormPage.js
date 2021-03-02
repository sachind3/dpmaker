import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Form, Button, ButtonGroup } from "react-bootstrap";
const FormPage = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [cropper, setCropper] = useState(null);
  const cropperRef = useRef(null);

  const fileChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "imageData",
      JSON.stringify({
        image: cropper.getCroppedCanvas().toDataURL(),
        name,
        email,
      })
    );
    history.push("/template");
  };

  const rotateBtn = () => {
    cropper.rotate(90);
  };
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="selectImage" className="btn btn-primary customBtn">
            <input type="file" id="selectImage" onChange={fileChange} />
            Browse Image
          </label>{" "}
          <Button type="button" variant="primary">
            Open Camera
          </Button>
        </Form.Group>
        <Form.Group>
          {image && (
            <>
              <Cropper
                ref={cropperRef}
                style={{ height: 250, width: 250 }}
                className="cropperContainer"
                initialAspectRatio={1}
                preview=".img-preview"
                src={image}
                viewMode={3}
                guides={true}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                rotatable={true}
                cropBoxResizable={false}
                checkOrientation={false}
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
              />
              <Button
                variant="dark"
                type="button"
                onClick={rotateBtn}
                className="mt-3"
              >
                Rotate
              </Button>
            </>
          )}
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default FormPage;
