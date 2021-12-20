import React, { useEffect, useState } from "react";
import Axios from "axios";
const baseURL = "https://heartdiseasepredictions.herokuapp.com/api/prediction";

export default function Prediction() {
  const [age, setAge] = useState();
  const [sex, setSex] = useState(0);
  const [chestPainType, setChestPainType] = useState(0);
  const [restingBP, setRestingBP] = useState();
  const [cholesterol, setCholesterol] = useState();
  const [fastingBS, setFastingBS] = useState(0);
  const [restingECG, setRestingECG] = useState(0);
  const [maxHR, setMaxHR] = useState();
  const [exerciseAngina, setExerciseAngina] = useState(0);
  const [oldpeak, setOldpeak] = useState();
  const [ST_Slope, setST_Slope] = useState(0);
  const [prediction, setPrediction] = useState(null);

  const makeAPrediction = async () => {
    let resp;
    try {
      resp = await Axios.post(`${baseURL}`, {
        Age: age,
        Sex: sex,
        ChestPainType: chestPainType,
        RestingBP: restingBP,
        Cholesterol: cholesterol,
        FastingBS: fastingBS,
        RestingECG: restingECG,
        MaxHR: maxHR,
        ExerciseAngina: exerciseAngina,
        Oldpeak: oldpeak,
        ST_Slope: ST_Slope,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setPrediction(resp.data.prediction);
    }
  };
  return (
    <div className="m-5">
      <div className="row">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Realizar un prediagnostico</h5>
              <span className="card-title">
                Para realizar una predicción necesitamos algunos de tus datos
              </span>
              <div className="form-group">
                <label>Edad:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ingresa tu edad"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  required
                />
              </div>
              <div className="form-group">
                <label>Sexo:</label>
                <select
                  className="form-control"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option value="0">Masculino</option>
                  <option value="1">Femenino</option>
                </select>
              </div>
              <div className="form-group">
                <label>ChestPainType:</label>
                <select
                  className="form-control"
                  value={chestPainType}
                  onChange={(e) => setChestPainType(e.target.value)}
                >
                  <option value="0">Asintomático</option>
                  <option value="1">Angina atípica</option>
                  <option value="2">Dolor no anginal</option>
                  <option value="3">Angina típica</option>
                </select>
              </div>
              <div className="form-group">
                <label>Presión arterial en reposo:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ingresa tu presión arterial"
                  onChange={(e) => setRestingBP(e.target.value)}
                  value={restingBP}
                  required
                />
              </div>
              <div className="form-group">
                <label>Nivel de colesterol:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ingresa tu Cholesterol"
                  onChange={(e) => setCholesterol(e.target.value)}
                  value={cholesterol}
                  required
                />
              </div>
              <div className="form-group">
                <label>Glucemia en ayunas:</label>
                <select
                  className="form-control"
                  value={fastingBS}
                  onChange={(e) => setFastingBS(e.target.value)}
                >
                  <option value="0"> {">"} 120 mg/dl</option>
                  <option value="1"> {"<"} 120 mg/dl</option>
                </select>
              </div>
              <div className="form-group">
                <label>Resultados del electrocardiograma en reposo:</label>
                <select
                  className="form-control"
                  value={restingECG}
                  onChange={(e) => setRestingECG(e.target.value)}
                >
                  <option value="0">Normal</option>
                  <option value="1">
                    Presenta una anomalía de la onda ST-T
                  </option>
                  <option value="2">
                    Muestra hipertrofia ventricular izquierda probable o
                    definitiva
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Frecuencia cardíaca máxima alcanzada:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ingresa tu MaxHR"
                  onChange={(e) => setMaxHR(e.target.value)}
                  value={maxHR}
                  required
                />
              </div>
              <div className="form-group">
                <label>Angina inducida por el ejercicio:</label>
                <select
                  className="form-control"
                  value={exerciseAngina}
                  onChange={(e) => setExerciseAngina(e.target.value)}
                >
                  <option value="0">No</option>
                  <option value="1">Si</option>
                </select>
              </div>
              <div className="form-group">
                <label>Valor numérico medido en depresión:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu Oldpeak"
                  onChange={(e) => setOldpeak(e.target.value)}
                  value={oldpeak}
                  required
                />
              </div>
              <div className="form-group">
                <label>ST_Slope:</label>
                <select
                  className="form-control"
                  value={ST_Slope}
                  onChange={(e) => setST_Slope(e.target.value)}
                >
                  <option value="0">Down</option>
                  <option value="1">Up</option>
                  <option value="2">Flat</option>
                </select>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => makeAPrediction()}
              >
                Realizar predicción
              </button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              {prediction === null && (
                <div>
                  <h5 className="card-title">
                    En esta seccion aparecerán los resultados de la prediccion
                  </h5>
                  <p className="card-text  text-dark">
                    No todas las personas que tienen ataques cardíacos tienen
                    los mismos síntomas o presentan síntomas con la misma
                    gravedad. Algunas personas tienen un dolor leve; otras
                    presentan un dolor más intenso. Algunas personas no
                    presentan síntomas. Para otros, la primera señal puede ser
                    un paro cardíaco repentino. Sin embargo, cuantos más signos
                    y síntomas tengas, mayor es la probabilidad de que estés
                    teniendo un ataque cardíaco.
                  </p>
                </div>
              )}
              {prediction === 1 && (
                <div>
                  <img
                    className="card-img-top"
                    style={{ height: 200 }}
                    src="https://as01.epimg.net/deporteyvida/imagenes/2018/01/24/portada/1516808124_487829_1516808239_noticia_normal.jpg"
                  ></img>
                  <h5 className="card-title mt-3">
                    El paciente es propenso a sufrir un paro cardiáco
                  </h5>
                  <h6 class="card-subtitle mb-2 text-danger">
                    Es urgente que el paciente consulte a un médico
                  </h6>
                  <p className="card-text  text-dark">
                    Un ataque cardíaco ocurre cuando una o más de las arterias
                    coronarias se bloquean. Con el tiempo, la acumulación de
                    depósitos de grasa, incluido el colesterol, forma sustancias
                    llamadas placas, que pueden estrechar las arterias
                    (ateroesclerosis). Esta afección, llamada enfermedad de las
                    arterias coronarias, causa la mayoría de los ataques
                    cardíacos.
                  </p>
                </div>
              )}
              {prediction === 0 && (
                <div>
                  <img
                    className="card-img-top"
                    style={{ height: 200 }}
                    src="https://s28461.pcdn.co/wp-content/uploads/2017/07/Tu-corazo%CC%81n-consejos-para-mantenerlo-sano-y-fuerte.jpg"
                  ></img>
                  <h5 className="card-title mt-3">
                    El paciente tiene un corazon saludable
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    No bajar la guardia, el paciente debe mantener el corazon
                    saludable
                  </h6>
                  <p className="card-text  text-dark">
                    El corazón humano puede compararse al motor de un auto:
                    ambos son fuentes de alimentación que mantienen cuerpos en
                    movimiento. El corazón actúa como una bomba que impulsa la
                    sangre hacia los órganos, tejidos y células del organismo.
                    La sangre bombeada por el corazón suministra oxígeno y
                    nutrientes a cada célula y recoge el dióxido de carbono y
                    las sustancias de desecho producidas por esas células.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
