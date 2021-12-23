import React, { useState } from "react";
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
  const [text, setText] = useState(
    "No todas las personas que tienen ataques cardíacos tienen los mismos síntomas o presentan síntomas con la misma gravedad. Algunas personas tienen un dolor leve; otras presentan un dolor más intenso. Algunas personas no presentan síntomas. Para otros, la primera señal puede ser un paro cardíaco repentino. Sin embargo, cuantos más signos y síntomas tengas, mayor es la probabilidad de que estés teniendo un ataque cardíaco."
  );
  const [title, setTitle] = useState(
    "En esta seccion aparecerán los resultados de la prediccion"
  );

  const changeText = (label) => {
    switch (label) {
      case "chestPainType":
        setTitle("Tipo de dolor de pecho");
        setText(
          "La angina ocurre cuando el tejido cardíaco no recibe suficiente sangre. Puede ser un síntoma común de enfermedad cardíaca. También puede ser un indicador de que está en riesgo de sufrir un ataque cardíaco."
        );
        break;

      case "restingBP":
        setTitle("Presion arterial en reposo");
        setText(
          "La presión arterial es la fuerza de su sangre al empujar contra las paredes de sus arterias. Cada vez que su corazón late, bombea sangre hacia las arterias. Su presión arterial es más alta cuando su corazón late, bombeando la sangre. Esto se llama presión sistólica. Cuando su corazón está en reposo, entre latidos, su presión arterial baja. Esto se llama presión diastólica."
        );
        break;

      case "cholesterol":
        setTitle("Nivel de colesterol");
        setText(
          "Normal: menos de 200 mg/dl, Normal-alto: entre 200 y 240 mg/dl. Se considera hipercolesterolemia a los niveles de colesterol total superiores a 200 mg/dl. Alto: por encima de 240 mg/dl"
        );
        break;

      case "fastingBS":
        setTitle("Análisis de azúcar en sangre en ayunas");
        setText(
          "Un nivel de glucosa sanguínea en ayunas por debajo de 100 miligramos por decilitro (mg/dl) (5,6 milimoles por litro [mmol/l]) se considera normal. Un nivel de glucosa sanguínea en ayunas entre 100 y 125 mg/dL (5,6 a 7,0 mmol/L) se considera prediabetes. Este resultado se denomina a veces glucosa en ayunas alterada. Un nivel de glucosa sanguínea en ayunas de 126 mg/dL (7,0 mmol/L) o superior indica diabetes tipo 2."
        );
        break;

      case "restingECG":
        setTitle("ELECTROCARDIOGRAMA DE REPOSO");
        setText(
          "El electrocardiograma (ECG/EKG) es la representación gráfica de la actividad eléctrica del corazón, que se obtiene con un electrocardiógrafo en forma de cinta continua. Es el instrumento principal de análisis de la electrofisiología cardíaca, así como también da información valiosa acerca de la función y estructura del corazón. Es útil para saber la duración del ciclo cardíaco, la frecuencia y el ritmo del corazón. Tiene una función relevante en el cuidado y diagnóstico de las enfermedades cardiovasculares, alteraciones metabólicas y la predisposición a una muerte súbita cardiaca. Este paso es interpretado por el médico."
        );
        break;

      case "maxHR":
        setTitle("Frecuencia cardíaca máxima alcanzada");
        setText(
          "Para determinar la frecuencia cardíaca máxima, se debe restar la edad a 220. La cifra resultante representa el número de veces que el corazón debería latir por minuto a una frecuencia máxima. Para determinar el rango de la frecuencia cardíaca de esfuerzo se debe multiplicar la cifra anterior por 0,5 a 0,85. Si está haciendo ejercicio a una intensidad moderada, usted puede acumularse gradualmente para poder mantener el ritmo cardíaco entre 50% y el 70% de su frecuencia cardiaca máxima durante 2 horas y 30 minutos a la semana. Si está haciendo ejercicio a una intensidad vigorosa, usted puede acumularse gradualmente para poder mantener el ritmo cardíaco entre 70% y el 85% de su frecuencia cardiaca máxima durante 1 hora y 15 minutos a la semana."
        );
        break;

      case "exerciseAngina":
        setTitle("Angina inducida por el ejercicio");
        setText(
          "La angina estable generalmente se desencadena por la actividad física. Cuando sube escaleras, hace ejercicio o camina, su corazón exige más sangre, pero las arterias estrechas ralentizan el flujo sanguíneo. Además de la actividad física, otros factores como el estrés emocional, las bajas temperaturas, las comidas copiosas y el tabaquismo también pueden estrechar las arterias y desencadenar una angina de pecho."
        );
        break;

      case "oldpeak":
        setTitle("Nivel ST");
        setText(
          "Se compara con respecto a la línea de base (TP). Normalmente debe estar al mismo nivel de la línea TP, es decir isoeléctrico, o sólo levemente por encima o por debajo. En las derivaciones del plano frontal se le permite una elevación normal de hasta 0.1 mV y en el plano horizontal hasta 0.2 mV., pero nunca se le permite una depresión “normal” mayor de 0.5 mV en ninguna de las derivaciones. La elevación del segmento ST por encima de los valores normales sugiere un evento coronario agudo en evolución o una pericarditis. La depresión del ST > 0.5 mV sugiere una isquemia de tipo subendocárdica."
        );
        break;

      case "ST_Slope":
        setTitle("Forma ST");
        setText(
          "Normalmente el segmento ST termina en una curva imperceptible con la onda T, no debe formar un ángulo agudo ni seguir un curso completamente horizontal. Es decir, el segmento ST debe iniciar isoeléctrico y terminar ligeramente ascendente. Si el segmento ST es completamente recto (como trazado con regla) se conoce con el nombre de depresión plana del ST o rectificación del ST."
        );
        break;

      default:
        break;
    }
  };

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
                <label>Tipo de dolor de pecho:</label>
                <select
                  className="form-control"
                  value={chestPainType}
                  onClick={() => changeText("chestPainType")}
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
                  onClick={() => changeText("restingBP")}
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
                  placeholder="Ingresa tu Colesterol"
                  onClick={() => changeText("cholesterol")}
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
                  onClick={() => changeText("fastingBS")}
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
                  onClick={() => changeText("restingECG")}
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
                  onClick={() => changeText("maxHR")}
                  value={maxHR}
                  required
                />
              </div>
              <div className="form-group">
                <label>Angina inducida por el ejercicio:</label>
                <select
                  className="form-control"
                  value={exerciseAngina}
                  onClick={() => changeText("exerciseAngina")}
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
                  onClick={() => changeText("oldpeak")}
                  onChange={(e) => setOldpeak(e.target.value)}
                  value={oldpeak}
                  required
                />
              </div>
              <div className="form-group">
                <label>Forma ST:</label>
                <select
                  className="form-control"
                  value={ST_Slope}
                  onClick={() => changeText("ST_Slope")}
                  onChange={(e) => setST_Slope(e.target.value)}
                >
                  <option value="0">Hacia abajo</option>
                  <option value="1">Ascendente</option>
                  <option value="2">Plano</option>
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
          <div className="card fixed-bottom">
            <div className="card-body">
              {prediction === null && (
                <div>
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text  text-dark">{text}</p>
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
