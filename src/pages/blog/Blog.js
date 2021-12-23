import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { Helmet } from 'react-helmet'

// css
import './Blog.css'
import SinglePost from "./singlePost";
import { Divider } from '@material-ui/core';
export default function Blog() {



    return (
        <div className="section blogs">

            <br></br>
            <h3 className="title">
                Publicaciones recientes
            </h3>
            <Divider />
            <div className="container">
                <div className="row body">
                    <div className="col-md-1"></div>
                    <div className="col-md-10" id="content">
                        <div id="content-top"></div>

                        <div className="block blog-posts">


                            <div className="content blog-posts">
                                <div className="item-list">
                                    <ul className="ji-blog-list ji-item-list">

                                        <SinglePost bodyLink="https://www.revespcardiol.org/es-mortalidad-causas-muerte-pacientes-con-articulo-13147698"
                                            month="Apr" day="15"
                                            title="Mortalidad y causas de muerte en pacientes con insuficiencia cardiaca: experiencia de una unidad especializada multidisciplinaria"
                                            teaser="La mortalidad de la insuficiencia cardiaca es similar o incluso superior a la de muchos cánceres. Suele ocurrir por progresión de la enfermedad, aunque la muerte súbita se ha descrito como una causa frecuente. El objetivo es evaluar la mortalidad y sus causas en una población ambulatoria de pacientes con insuficiencia cardiaca de etiología diversa tratados en una unidad especializada multidisciplinaria y analizar los factores asociados con ellas."
                                            link1="https://www.jenkins.io/blog/authors/antoniaklja" linkText1="Bartek Antoniak"
                                            comma=", "
                                            link2="https://www.jenkins.io/blog/authors/sylwiabrant" linkText2="Sylwia Brant"
                                            tagLink1="https://www.jenkins.io/node/tags/kubernetes/" tagLinkText1="kubernetes"
                                            tagLink2="https://www.jenkins.io/node/tags/operator/" tagLinkText2="operator"
                                            tagLink3="https://www.jenkins.io/node/tags/contributing/" tagLinkText3="contributing"
                                            tagLink4="https://www.jenkins.io/node/tags/announcement/" tagLinkText4="announcement"
                                        />

                                        <SinglePost bodyLink="https://secardiologia.es/comunicacion/notas-de-prensa/notas-de-prensa-sec/10242-insuficiencia-cardiaca-la-enfermedad-cardiovascular-que-no-consigue-disminuir-la-mortalidad"
                                            month="Apr" day="07"
                                            title="Insuficiencia cardiaca, la enfermedad cardiovascular que no consigue disminuir la mortalidad"
                                            teaser="Un total de 122.466 personas murieron en España en 2017 debido a enfermedades del sistema circulatorio, según los últimos datos del Instituto Nacional de Estadística (INE) sobre las causas de defunción en nuestro país. Esto supone un incremento del 2,2% respecto al número de muertes absolutas de 2016, año en el que fallecieron por"
                                            link1="https://www.jenkins.io/blog/authors/markewaite" linkText1="Mark Waite"
                                            tagLink1="https://www.jenkins.io/node/tags/events/" tagLinkText1="events"
                                            tagLink2="https://www.jenkins.io/node/tags/community/" tagLinkText2="community"
                                            tagLink3="https://www.jenkins.io/node/tags/documentation/" tagLinkText3="documentation"
                                            tagLink4="https://www.jenkins.io/node/tags/outreach-programs/" tagLinkText4="outreach-programs"
                                            tagLink5="https://www.jenkins.io/node/tags/contributing/" tagLinkText5="contributing"
                                        />

                                        <SinglePost bodyLink="https://www.elsevier.es/es-revista-archivos-cardiologia-mexico-293-articulo-muerte-subita-cardiaca-estratificacion-riesgo-S1405994015000634"
                                            month="Mar" day="22"
                                            title="Muerte súbita cardiaca. Estratificación de riesgo, prevención y tratamiento"
                                            teaser="La muerte súbita cardiaca está caracterizada por un colapso o paro cardiaco súbito secundario a arritmias cardiacas, en personas con o sin enfermedad cardiaca; la sangre deja de fluir al cerebro y todo el organismo y causa la muerte si no es tratada dentro de minutos1–5. Algunos de estos pacientes llegan a tener síntomas poco antes del evento, pero para establecer el diagnóstico definitivo de un episodio de muerte súbita se requiere que los síntomas tengan menos de una hora de duración3."
                                            link1="https://www.jenkins.io/blog/authors/oleg_nenashev" linkText1="Oleg Nenashev"
                                            tagLink1="https://www.jenkins.io/node/tags/community/" tagLinkText1="community"
                                            tagLink2="https://www.jenkins.io/node/tags/governance/" tagLinkText2="governance"
                                            tagLink3="https://www.jenkins.io/node/tags/governance-board/" tagLinkText3="governance-board"
                                        />

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
