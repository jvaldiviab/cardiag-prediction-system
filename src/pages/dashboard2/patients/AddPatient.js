import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Container
} from '@material-ui/core';
import { useAuthContext } from '../../../hooks/useAuthContext';

import { useFirestore } from '../../../hooks/useFirestore'

const typeSexo = [
  {
    value: 'hombre',
    label: 'Hombre'
  },
  {
    value: 'mujer',
    label: 'Mujer'
  }
];

const typeTdp = [
  {
    value: 'angina tipica AT',
    label: 'Angina Típica (AT)'
  },
  {
    value: 'angina atipica AAT',
    label: 'Angina Atípica (AAT)'
  },
  {
    value: 'dolor no anginal DNoA',
    label: 'Dolor no Anginal (DNoA)'
  },
  {
    value: 'asintomatico ASY',
    label: 'Asintomático (ASY)'
  },
];

const typeAi = [
  {
    value: 'si',
    label: 'Si'
  },
  {
    value: 'no',
    label: 'No'
  }
];

export default function AddPatient({ sc }) {

  const { user } = useAuthContext()
  const { addDocument, response } = useFirestore('patients')

  const [nombres, setNombres] = useState('')
  const [edad, setEdad] = useState('')
  const [sexo, setSexo] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const [tdp, setTdp] = useState('')
  const [pa, setPa] = useState('')
  const [cs, setCs] = useState('')
  const [as, setAs] = useState('')
  const [rec, setRec] = useState('')
  const [fcm, setFcm] = useState('')
  const [ai, setAi] = useState('')
  const [st, setSt] = useState('')
  const [pst, setPst] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // proj data body to be stored
    const patient = {
      nombres,
      edad,
      sexo,
      peso,
      altura,
      email,
      telefono,
      tdp,
      pa,
      cs,
      as,
      rec,
      fcm,
      ai,
      st,
      pst,
    }

    await addDocument(patient)

    sc(1)

  }

  return (

    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <form
              autoComplete="off"
              className=""
              onSubmit={handleSubmit}
            >
              <Card>
                <CardHeader
                  subheader="Ingrese los campos requeridos"
                  title="Datos del paciente"
                />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        helperText="Please specify the first name"
                        label="Nombres completos"
                        name="firstName"
                        onChange={(e) => setNombres(e.target.value)}
                        required
                        value={nombres}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Edad"
                        name="edad"
                        onChange={(e) => setEdad(e.target.value)}
                        type="number"
                        value={edad}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Sexo"
                        name="sexo"
                        onChange={(e) => setSexo(e.target.value)}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={sexo}
                        variant="outlined"
                      >
                        {typeSexo.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Peso"
                        name="peso"
                        onChange={(e) => setPeso(e.target.value)}
                        type="number"
                        value={peso}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Altura"
                        name="altura"
                        onChange={(e) => setAltura(e.target.value)}
                        type="number"
                        value={altura}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        value={email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        onChange={(e) => setTelefono(e.target.value)}
                        type="number"
                        value={telefono}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardHeader
                  title="Datos medicos del paciente"
                />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Tipo de dolor de pecho"
                        name="tdp"
                        onChange={(e) => setTdp(e.target.value)}
                        select
                        SelectProps={{ native: true }}
                        value={tdp}
                        variant="outlined"
                      >
                        {typeTdp.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Presion arterial en reposo [mm/Hg]"
                        name="pa"
                        onChange={(e) => setPa(e.target.value)}
                        type="number"
                        value={pa}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Colesterol sérico [mm/dl]"
                        name="cs"
                        onChange={(e) => setCs(e.target.value)}
                        type="number"
                        value={cs}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Azúcar en la sangre en ayunas"
                        name="as"
                        onChange={(e) => setAs(e.target.value)}
                        type="number"
                        value={as}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Resultados de electrocardiograma en reposo"
                        name="rec"
                        onChange={(e) => setRec(e.target.value)}
                        type="number"
                        value={rec}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Frecuencia cardiaca máxima alcanzada"
                        name="fcm"
                        onChange={(e) => setFcm(e.target.value)}
                        type="number"
                        value={fcm}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Angina inducida por el reposo"
                        name="ai"
                        onChange={(e) => setAi(e.target.value)}
                        select
                        SelectProps={{ native: true }}
                        value={ai}
                        variant="outlined"
                      >
                        {typeAi.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Valor numérico ST en depresión"
                        name="st"
                        onChange={(e) => setSt(e.target.value)}
                        type="number"
                        value={st}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="La pendiente del segmento ST en ejercicio"
                        name="pst"
                        onChange={(e) => setPst(e.target.value)}
                        type="number"
                        value={pst}
                        variant="outlined"
                      />
                    </Grid>

                  </Grid>
                </CardContent>


                <Divider />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                  }}
                >

                  {!response.isPending &&
                    <button
                      className="btn btn-secondary"


                    >
                      GUARDAR DATOS DEL PACIENTE
                    </button>
                  }

                  {response.isPending &&
                    <button
                      className="btn btn-primary"
                      disabled
                    >
                      PROCESANDO
                    </button>
                  }


                </Box>
              </Card>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>


  );
};

