import "./banner.css";
import BannerImage from "../../assets/text.png";
import Video from "./video";

export default function Banner() {
  return (
    <div>
      <div className="banner-container">
        {/* container Class creates equal margin on both left and right sides. Helpful in Responsiveness */}
        <div >
          <div className="row"> &nbsp; </div>
          <div className="row">
            <div className="col-md-1 "></div>
            <div className="col-md-3 col-lg-2">
              <div style={{ width: 256 }}>
                <img src={BannerImage} style={{ width: 240, height: 330 }} alt="BannerImage" />
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <h1 className="ban-text"> <span>Cardiag Service</span> </h1>
              <p className="ban-text"> <strong>Lo mejor para tu corazón</strong> </p>
              <p className="ban-text">Lo mejor que puedes hacer para tu salud es siempre estar prevenido, aqui te ayudaremos a estar preparado</p>

            </div>
            <div className="col-md-4 col-lg-4">
              <Video />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}