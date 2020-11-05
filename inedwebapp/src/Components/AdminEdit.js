import 'date-fns';
import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const StyledTextField = styled(TextField)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})

const SmallTextField = styled(TextField)({
    width: '30%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})

const CreateBox = styled.span({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'noWrap',
    backgroundColor: 'white',
    paddingTop: '1%',
    paddingBottom: '1%',
    width: '70%',
    marginLeft: 'Auto',
    marginRight: 'Auto'

})

const FormLine = styled.span({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'noWrap',
    marginTop: '2%',

})

const TiposDeEntrada = [
    {
        value: 'Oficio',
        label: 'OFICIO',
    },
    {
        value: 'VisitaFoliada',
        label: 'VISITA FOLIADA',
    },
    {
        value: 'Otro',
        label: 'OTRO',
    },
];

const TipoDeVialidad = [
    {
        value: 'Calle',
        label: 'CALLE',
    },
    {
        value: 'Callejon',
        label: 'CALLEJON',
    },
    {
        value: 'Cerrada',
        label: 'CERRADA',
    },
    {
        value: 'Avenida',
        label: 'AVENIDA',
    },
    {
        value: 'Andador',
        label: 'ANDADOR',
    },
    {
        value: 'Privada',
        label: 'PRIVADA',
    },
    {
        value: 'Retorno',
        label: 'RETORNO',
    },
    {
        value: 'Calzada',
        label: 'CALZADA',
    },
    {
        value: 'Carretera',
        label: 'CARRETERA',
    },
    {
        value: 'Camino',
        label: 'CAMINO',
    },
    {
        value: 'Plaza',
        label: 'PLAZA',
    },
    {
        value: 'Boulevard',
        label: 'BOULEVARD',
    },
    {
        value: 'Paseo',
        label: 'PASEO',
    },
    {
        value: 'Plazuela',
        label: 'PLAZUELA',
    },
    {
        value: 'Pasaje',
        label: 'PASAJE',
    },
    {
        value: 'Glorieta',
        label: 'GLORIETA',
    },
    {
        value: 'Parque',
        label: 'PARQUE',
    },
    {
        value: 'Jardin',
        label: 'JARDIN',
    },
    {
        value: 'Autopista',
        label: 'AUTOPISTA',
    },
    {
        value: 'Eje',
        label: 'EJE',
    },
    {
        value: 'Viaducto',
        label: 'VIADUCTO',
    },
    {
        value: 'Circuito',
        label: 'CIRCUITO',
    },
    {
        value: 'Prolongacion',
        label: 'PROLONGACION',
    },
    {
        value: 'Seccion',
        label: 'SECCION',
    },
    {
        value: 'SuperManzana',
        label: 'SUPER MANZANA',
    },
    {
        value: 'Paraje',
        label: 'PARAJE',
    },
];

const PertenenciaEtnica = [
    {
        value: 'ACATECO',
        label: 'ACATECO',
    },
    {
        value: 'ACAXEES',
        label: 'ACAXEES',
    },
    {
        value: ' AGUACATECO ',
        label: ' AGUACATECO ',
    },
    {
        value: ' AMUZGO ',
        label: ' AMUZGO ',
    },
    {
        value: ' CHATINO ',
        label: ' CHATINO ',
    },
    {
        value: ' CHICHIMECA ',
        label: ' CHICHIMECA ',
    },
    {
        value: ' CHINANTECA ',
        label: ' CHINANTECA ',
    },
    {
        value: ' CHOL ',
        label: ' CHOL ',
    },
    {
        value: ' CHONTAL ',
        label: ' CHONTAL ',
    },
    {
        value: ' COAHUILTEC ',
        label: ' COAHUILTEC ',
    },
    {
        value: ' COCHIMI ',
        label: ' COCHIMI ',
    },
    {
        value: ' CONCHOS ',
        label: ' CONCHOS ',
    },
    {
        value: ' CORA ',
        label: ' CORA ',
    },
    {
        value: ' GUACHICHIL ',
        label: ' GUACHICHIL ',
    },
    {
        value: ' GUAMARE ',
        label: ' GUAMARE ',
    },
    {
        value: ' GUARIJIO ',
        label: ' GUARIJIO ',
    },
    {
        value: ' HUICHOL ',
        label: ' HUICHOL ',
    },
    {
        value: ' JUMANOS ',
        label: ' JUMANOS ',
    },
    {
        value: ' KIKAPU ',
        label: ' KIKAPU ',
    },
    {
        value: ' KILIWA ',
        label: ' KILIWA ',
    },
    {
        value: ' KUMIAI ',
        label: ' KUMIAI ',
    },
    {
        value: ' LACANDON ',
        label: ' LACANDON ',
    },
    {
        value: ' MAMES ',
        label: ' MAMES ',
    },
    {
        value: ' MAYA ',
        label: ' MAYA ',
    },
    {
        value: ' MAYOS ',
        label: ' MAYOS ',
    },
    {
        value: ' MAZAHUA ',
        label: ' MAZAHUA ',
    },
    {
        value: ' MAZATECO ',
        label: ' MAZATECO ',
    },
    {
        value: ' MEXICANEROS ',
        label: ' MEXICANEROS ',
    },
    {
        value: ' MIXE ',
        label: ' MIXE ',
    },
    {
        value: ' MIXTECA ',
        label: ' MIXTECA ',
    },
    {
        value: ' NAHOAS ',
        label: ' NAHOAS ',
    },
    {
        value: ' NAHUATL ',
        label: ' NAHUATL ',
    },
    {
        value: ' OPATA ',
        label: ' OPATA ',
    },
    {
        value: ' OTOMI ',
        label: ' OTOMI ',
    },
    {
        value: ' PAIPAI ',
        label: ' PAIPAI ',
    },
    {
        value: ' PAME ',
        label: ' PAME ',
    },
    {
        value: ' PAPAGOS ',
        label: ' PAPAGOS ',
    },
    {
        value: ' POPOLUCA ',
        label: ' POPOLUCA ',
    },
    {
        value: ' PUEBLO HUASTECO ',
        label: ' PUEBLO HUASTECO ',
    },
    {
        value: ' PUEBLO SERI ',
        label: ' PUEBLO SERI ',
    },
    {
        value: ' PUREPECHA ',
        label: ' PUREPECHA ',
    },
    {
        value: ' SUMAS ',
        label: ' SUMAS ',
    },
    {
        value: ' TARAHUMARA ',
        label: ' TARAHUMARA ',
    },
    {
        value: ' TEPANECA ',
        label: ' TEPANECA ',
    },
    {
        value: ' TEPECANOS ',
        label: ' TEPECANOS ',
    },
    {
        value: ' TEPEHUANES ',
        label: ' TEPEHUANES ',
    },
    {
        value: ' TEPEHUANES DEL NORTE ',
        label: ' TEPEHUANES DEL NORTE ',
    },
    {
        value: ' TEPEHUANES DEL SUR ',
        label: ' TEPEHUANES DEL SUR ',
    },
    {
        value: ' TLAHUICA ',
        label: ' TLAHUICA ',
    },
    {
        value: ' TLATELOLCA ',
        label: ' TLATELOLCA ',
    },
    {
        value: ' TLAXCALTECA ',
        label: ' TLAXCALTECA ',
    },
    {
        value: ' TOBOSOS ',
        label: ' TOBOSOS ',
    },
    {
        value: ' TOHONO OO ',
        label: ' TOHONO OO ',
    },
    {
        value: ' TRIQUI ',
        label: ' TRIQUI ',
    },
    {
        value: ' TZELTAL ',
        label: ' TZELTAL ',
    },
    {
        value: ' TZOTZIL ',
        label: ' TZOTZIL ',
    },
    {
        value: ' XIXIME ',
        label: ' XIXIME ',
    },
    {
        value: ' YAQUI ',
        label: ' YAQUI ',
    },
    {
        value: ' ZOQUE ',
        label: ' ZOQUE ',
    }];

const GradoDeEstudios = [
    {
        value: 0,
        label: 'NUNCA ASISTIO',
    },
    {
        value: 1,
        label: 'PRIMARIA',
    },
    {
        value: 2,
        label: 'SECUNDARIA',
    },
    {
        value: 3,
        label: 'PREPA',
    },
    {
        value: 4,
        label: 'TECNICA',
    },
    {
        value: 5,
        label: 'LIC',
    },
    {
        value: 6,
        label: 'MAESTRIA',
    },
    {
        value: 7,
        label: 'DOCTORADO',
    },
];






const AdminEditForm = () => {

    const [tipoE, setTipoE] = React.useState();
    const handleChangeTipoE = (event) => {
        setTipoE(event.target.value);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const [valueGender, setValueGender] = React.useState('mujer');
    const handleChangeGender = (event) => {
        setValueGender(event.target.value);
    };


    const [tipoVial, setTipoVial] = React.useState();
    const handleChangeTipoVial = (event) => {
        setTipoVial(event.target.value);
    };

    const [tipoEtnica, setTipoEtnica] = React.useState();
    const handleChangeTipoEtnica = (event) => {
        setTipoEtnica(event.target.value);
    };

    const [tipoGrado, setTipoGrado] = React.useState();
    const handleChangeTipoGrado = (event) => {
        setTipoGrado(event.target.value);
    };


    return (
        <CreateBox>
            <FormLine>
                <StyledTextField id="IDP" label="IDP" />

                <StyledTextField
                    id="TipoDeIngreso"
                    select
                    label="Tipo de Entrada"
                    value={tipoE}
                    onChange={handleChangeTipoE}

                >
                    {TiposDeEntrada.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledTextField>

                <StyledTextField id="Nu" label="No." />
            </FormLine>
            <FormLine>
                <StyledTextField id="Nombre" label="Nombre(s)"/>
                <StyledTextField id="ApellidoP" label="Apellido Paterno" />
                <StyledTextField id="AppelidoM" label="Apellido Materno" />
            </FormLine>

            <FormLine>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField id="Edad" label="Edad" />
                <TextField id="LdNacimiento" label="Lugar de Nacimiento" />



                <FormControl component="fieldset">
                    <FormLabel component="legend">Sexo</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender1" value={valueGender} onChange={handleChangeGender}>
                        <FormControlLabel value="mujer" control={<Radio />} label="Mujer" />
                        <FormControlLabel value="hombre" control={<Radio />} label="Hombre" />
                    </RadioGroup>
                </FormControl>
            </FormLine>
            <FormLine>
                <StyledTextField id="CIB" label="C.I.B." />
                <StyledTextField id="CURP" label="CURP" />
            </FormLine>
            <FormLine>
                <StyledTextField id="TelCasa" label="Tel. Casa" />
                <StyledTextField id="TelReca" label="Tel. Recados" />
                <StyledTextField id="Cel" label="Celular" />
            </FormLine>
            <FormLine>
                <StyledTextField id="Ocupacion" label="Ocupacion" />

                <StyledTextField
                    id="TipoDeEtnicidad"
                    select
                    label="Tipo de Etnicidad"
                    value={tipoEtnica}
                    onChange={handleChangeTipoEtnica}

                >
                    {PertenenciaEtnica.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledTextField>

                <StyledTextField
                    id="TipoDeGrado"
                    select
                    label="Tipo de Grado"
                    value={tipoGrado}
                    onChange={handleChangeTipoGrado}

                >
                    {GradoDeEstudios.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledTextField>

            </FormLine>
            <FormLine>
                <StyledTextField id="Padre" label="Padre" />
            </FormLine>
            <FormLine>
                <StyledTextField id="Madre" label="Madre" />
            </FormLine>
            <FormLine>
                <StyledTextField id="Tutor" label="Tutor" />
            </FormLine>
            <FormLine>
                <StyledTextField id="Calle" label="Calle" />
                <SmallTextField id='interno' label='Interno' />
                <SmallTextField id='externo' label='Externo' />
            </FormLine>

            <FormLine>
                <StyledTextField
                    id="TipoDeVialidad"
                    select
                    label="Tipo de Vialidad"
                    value={tipoVial}
                    onChange={handleChangeTipoVial}

                >
                    {TipoDeVialidad.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledTextField>
                <SmallTextField id='ut' label='UT' />
                <SmallTextField id='CodigoPostal' label='Codigo Postal' />
            </FormLine>
            <FormLine>
                <StyledTextField id="EntreCalle1" label="Entre Calle 1" />
            </FormLine>
            <FormLine>
                <StyledTextField id="EntreCalle2" label="Entre Calle 2" />
            </FormLine>
            <FormLine>
                <StyledTextField id="NumeroReg" label="Numero Regimen" />
                <StyledTextField id="TipoReg" label="Tipo de Regimen" />
                <StyledTextField id="NombreReg" label="Nombre de Regimen" />
            </FormLine>
            <FormLine>
                <StyledTextField id="NumeroAse" label="Numero Asentamiento" />
                <StyledTextField id="TipoAse" label="Tipo de Asentamiento" />
                <StyledTextField id="NombreAse" label="Nombre de Asentamiento" />
            </FormLine>
            <FormLine>
                <StyledTextField id="Comentarios" label="Comentarios" />
            </FormLine>


        </CreateBox>

    )
}
export default AdminEditForm;