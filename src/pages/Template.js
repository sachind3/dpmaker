import { useContext } from "react";
import { LoadingContext } from "./../context/Service";
import html2canvas from "html2canvas";
const Template = () => {
  const [setIsLoading] = useContext(LoadingContext);
  const userData = JSON.parse(localStorage.getItem("imageData"));
  console.log(userData);
  const downloadImage = () => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("wrapper")).then((canvas) => {
      var data = canvas.toDataURL();
      document.getElementById("generatedImg").src = data;
      setTimeout(() => {
        generateImg();
      }, 1000);
    });
  };

  const generateImg = () => {
    let imgSrc = document.getElementById("generatedImg").src;
    var imgLink = document.createElement("a");
    imgLink.href = imgSrc;
    imgLink.download = "Download.jpg";
    document.body.appendChild(imgLink);
    imgLink.click();
    document.body.removeChild(imgLink);
    setIsLoading(false);
  };
  return (
    <>
      <section id="wrapper">
        {userData && (
          <img
            src={userData.image}
            style={{ width: "100%", display: "block" }}
            alt="img"
          />
        )}
        <h1>{userData.name}</h1>
        <h2>{userData.email}</h2>
      </section>
      <button type="button" onClick={downloadImage}>
        download
      </button>
      <img
        id="generatedImg"
        style={{ opacity: "0", display: "none" }}
        alt="img"
      />
    </>
  );
};

export default Template;
