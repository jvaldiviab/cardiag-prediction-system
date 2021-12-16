import IndividualFeature from "./individualFeature";
import "./feature.css";

export default function TotalFeatures() {
  return (
    <div>

      <div>
        <div className="row" style={{ width: 0, height: 50 }}> &nbsp; </div>
        <div className="container">
          <div className="row uniform-height">
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <i className="icon-shuffle"></i>
                <IndividualFeature title="Resultado Rapido" parag="Los resultados se daran al instante, son resultados que puede llevar con cualquier especialista." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <i className="icon-download3"></i>
                <IndividualFeature title="Confiable" parag="Tenemos un grupo de trabajo con especialistas de por medio, que brindan confianza en los resultados." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <i className="icon-equalizer"></i>
                <IndividualFeature title="Rapida Configuracion" parag="Para obtener los resultados, basta llenar un formulario y obtendra el resultado." />
              </div>
            </div>
           
          </div>
        </div>
      </div>

    </div>
  );
}