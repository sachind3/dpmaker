import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
const Intro = () => {
  const [valid, setValid] = useState(false);
  let history = useHistory();

  const handleCheck = (e) => {
    if (e.target.checked) {
      setValid(true);
    }
  };
  const goToform = () => {
    if (valid) {
      history.push("/form");
    } else {
      alert("please check terms & conditions");
    }
  };
  return (
    <section>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        reiciendis animi beatae in dolores repellat! Ipsam repellat sed aut
        temporibus laboriosam laborum perspiciatis tempore iure veritatis nihil.
        Cum, sit quo.
      </div>
      <label htmlFor="terms" className="checkboxLabel">
        <input type="checkbox" id="terms" onChange={handleCheck} />
        <p>
          I have read and agree to the{" "}
          <a href="https://www.google.com" target="_blank">
            terms and conditions
          </a>
        </p>
      </label>
      <Button variant="primary" onClick={goToform}>
        Enter
      </Button>
    </section>
  );
};

export default Intro;
