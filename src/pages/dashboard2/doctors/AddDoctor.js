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
import { useSignup } from '../../../hooks/useSignup';

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

export default function AddDoctor({ sc }) {

  const { user } = useAuthContext()
  const { addDocument, response } = useFirestore('doctors')

  const [nombres, setNombres] = useState('')
  const [edad, setEdad] = useState('')
  const [sexo, setSexo] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [pass, setPass] = useState('1234qwer')
  const [rol, setRol] = useState('doctor')

  const [tdp, setTdp] = useState('')
  const [pa, setPa] = useState('')
  const [cs, setCs] = useState('')
  const [as, setAs] = useState('')
  const [rec, setRec] = useState('')
  const [fcm, setFcm] = useState('')
  const [ai, setAi] = useState('')
  const [st, setSt] = useState('')
  const [pst, setPst] = useState('')

  const { signup, error, isPending } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // proj data body to be stored
    const doctor = {
      nombres,
      email,
      telefono,
      pass,
      rol,
    }

    signup(email, pass, nombres, '', rol)

    await addDocument(doctor)

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
                  subheader="Ingrese los campos para registrar un nuevo doctor"
                  title="Datos del DOCTOR"
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
                      GUARDAR DATOS DEL DOCTOR / USUARIO
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

