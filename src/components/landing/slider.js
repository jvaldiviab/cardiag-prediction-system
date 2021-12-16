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
                    <img role="presentation" src={SlideImage1} alt="SlideImage1" style={{ width: 220, height: 300 }} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                    <a href="https://www.jenkins.io/blog/2021/04/07/contributhon-participants/">
                      <h2>Cuida tu corazón</h2>
                      <p>El ataque cardíaco se produce cuando se bloquea el flujo de sangre que va al corazón. Por lo general, el bloqueo es una acumulación de grasa, colesterol y otras sustancias que forman una placa en las arterias que alimentan el corazón</p>
                    </a>
                    <div>
                      <a className="btn btn-primary float-left" href="https://www.jenkins.io/blog/2021/03/19/SheCodeAfrica-announcement/">
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
                    <img role="presentation" src={SlideImage2} alt="SlideImage2" style={{ width: 240, height: 300 }} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                    <a href="/" onClick={handleClick}>
                      <h2>Obten los mejores resultados</h2>
                      <p>Cardiag Service, es el resultado del uso de la Inteligencia Artificial con la Cardiología con el fin de poder ayudarte a obtener los mejores resultados con respecto de la prevencion ante un ataque cardiaco, ven y unete para obtener tu propio diagnóstico </p>
                    </a>
                    <div>
                      <a className="btn btn-primary float-left" href="/" onClick={handleClick}>
                        Ingresar
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
                    <img role="presentation" src={SlideImage3} alt="SlideImage3" style={{ width: 200, height: 300 }} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                    <a href="https://jenkinsistheway.io/">
                      <h2>Contáctanos</h2>
                      <p>Estamos preparados para darte toda la informacion que necesites, consulta cualquier duda que tengas con nuestro personal capacitado</p>
                    </a>
                    <div>
                      <a className="btn btn-primary float-left" href="https://jenkinsistheway.io/">
                        Contáctanos
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