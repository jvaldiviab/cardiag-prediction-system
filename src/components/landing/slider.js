import "./slider.css"

import SlideImage1 from "../../assets/sliderImages/slider-corazon.png";
import SlideImage2 from "../../assets/sliderImages/slider-doctor.png";
import SlideImage3 from "../../assets/sliderImages/slider-contacto.png";
import SlideImage4 from "../../assets/sliderImages/slider-image4.jpg";
import SlideImage5 from "../../assets/sliderImages/slider-image5.png";


export default function Slider() {
  // prevents from refreshing the react page like '#' in HTML
  let handleClick = e => e.preventDefault();

  return (
    <div className="slider">

      <div className="row" style={{ width: 0, height: 5 }}> &nbsp; </div>

      <div className="carousel slideShow slide" data-ride="carousel" id="Project_SlideShow">
        <div className="container">
          <ol className="carousel-indicators">
            <li data-slide-to="0" data-target="#Project_SlideShow" className="active"></li>
            <li data-slide-to="1" data-target="#Project_SlideShow" className=""></li>
            <li data-slide-to="2" data-target="#Project_SlideShow" className=""></li>
          </ol>
          <div className="carousel-inner slideShow">
            <div className="carousel-item slideShow active">
              <div className="container">
                <div className="pt-4"> &nbsp; </div>
                <div className="row">
                  <div className="col-md-12 col-lg-8 order-first order-lg-last">
                    <img role="presentation" src={SlideImage1} alt="SlideImage1" style={{ width: 290, height: 300 }} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                    <a href="/" onClick={handleClick}>
                      <h2>Cuida tu corazón</h2>
                      <p>El ataque cardíaco se produce cuando se bloquea el flujo de sangre que va al corazón. Por lo general, el bloqueo es una acumulación de grasa, colesterol y otras sustancias que forman una placa en las arterias que alimentan el corazón</p>
                    </a>
                    <div>
                      <a className="btn btn-primary float-left" href="/login">
                        Registrate
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-4"> &nbsp; </div>
              </div>
            </div>
            <div className="carousel-item slideShow">
              <div className="container">
                <div className="pt-4"> &nbsp; </div>
                <div className="row">
                  <div className="col-md-12 col-lg-8 order-first order-lg-last">
                    <img role="presentation" src={SlideImage2} alt="SlideImage2" style={{ width: 340, height: 300 }} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                    <a href="/" onClick={handleClick}>
                      <h2>Obten los mejores resultados</h2>
                      <p>Cardiag Service, es el resultado del uso de la Inteligencia Artificial con la Cardiología con el fin de poder ayudarte a obtener los mejores resultados con respecto de la prevencion ante un ataque cardiaco, ven y unete para obtener tu propio diagnóstico </p>
                    </a>
                    <div>
                      <a className="btn btn-primary float-left" href="/service" >
                        Ir al servicio
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-4"> &nbsp; </div>
              </div>
            </div>
            <div className="carousel-item slideShow">
              <div className="container">
                <div className="pt-4"> &nbsp; </div>
                <div className="row">
                  <div className="col-md-12 col-lg-8 order-first order-lg-last">
                    <img role="presentation" src={SlideImage3} alt="SlideImage3" style={{ width: 300, height: 300 }} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                    <a href="/" onClick={handleClick}>
                      <h2>Informate</h2>
                      <p>Cerca del 1% de la población mayor de 40 años presenta insuficiencia cardíaca. La prevalencia de esta
                        enfermedad se dobla con cada década de edad y se sitúa alrededor del 10% en los mayores de 70 años. </p>
                    </a>
                    <div>
                      <a className="btn btn-primary float-left" href="https://jenkinsistheway.io/">
                        Informate
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-4"> &nbsp; </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}