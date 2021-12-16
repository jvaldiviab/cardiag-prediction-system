import "./Footer.css";
import LicenseImage from "../assets/text.png";

export default function Footer() {

  // const LicenseImage = "https://licensebuttons.net/l/by-sa/4.0/88x31.png";

  return (
    <div>

      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <p class="box">
                <a href="https://github.com/jenkins-infra/jenkins.io/edit/master/content//index.html.haml" title="Edit /index.html.haml on GitHub">
                  CardiagService
                </a>
              </p>
              <div class="license-box">
                <div id="creativecommons">
                  <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                    <p>
                      <img alt="Creative Commons Attribution-ShareAlike license" src={LicenseImage} />
                    </p>
                  </a>
                  <p>
                    El Contenido de este sitio esta licensiado bajo el equipo de DEV-NULL.
                  </p>
                </div>
              </div>
            </div>
            <div class="links col-md-8">
              <div class="container">
                <div class="row">
                  <div class="area col-md-4">
                    <div class="div-mar">
                      <h5>Ven y únete</h5>
                      <ul class="resources">
                        <li>
                          <a href="https://www.jenkins.io/download/">
                            
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/node/">
                            Ingresar
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/doc/">
                            Registrase
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="area col-md-4">
                    <div class="div-mar">
                      <h5>Mas de nosotros</h5>
                      <ul class="project">
                        <li>
                          <a href="https://www.jenkins.io/project/">
                            ¿Quienes Somos?
                          </a>
                        </li>
                        <li>
                          <a href="https://issues.jenkins.io/">
                            Contáctanos
                          </a>
                        </li>
                        <li>
                          <a href="https://issues.jenkins.io/">
                            Sobre el proyecto
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="area col-md-4">
                    <div class="div-mar">
                      <h5>Redes Sociales</h5>
                      <ul class="community">
                        <li>
                          <a href="https://www.jenkins.io/events/">
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/mailing-lists/">
                            Twitter
                          </a>
                        </li>
                        
                        <li>
                          <a href="https://www.jenkins.io/sigs/">
                            Youtube
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/jenkinsci">
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}