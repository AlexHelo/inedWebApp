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
import Button from '@material-ui/core/Button';

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

const CreateBox = styled.form({

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

    const [tipoIDP, setTipoIDP] = React.useState();
    const handleChangeTipoIDP = (event) => {
        setTipoIDP(event.target.value);
    };

    const [tipoE, setTipoE] = React.useState();
    const handleChangeTipoE = (event) => {
        setTipoE(event.target.value);
    };

    const [tipoNO, setTipoNO] = React.useState();
    const handleChangeTipoNO = (event) => {
        setTipoNO(event.target.value);
    };
    const [tipoNombre, setTipoNombre] = React.useState();
    const handleChangeTipoNombre = (event) => {
        setTipoNombre(event.target.value);
    };
    const [tipoApellidoP, setTipoApellidoP] = React.useState();
    const handleChangeTipoApellidoP = (event) => {
        setTipoApellidoP(event.target.value);
    };
    const [tipoApellidoM, setTipoApellidoM] = React.useState();
    const handleChangeTipoApellidoM = (event) => {
        setTipoApellidoM(event.target.value);
    };
    const [tipoEdad, setTipoEdad] = React.useState();
    const handleChangeTipoEdad = (event) => {
        setTipoEdad(event.target.value);
    };
    const [tipoLugarNacimiento, setTipoLugarNacimiento] = React.useState();
    const handleChangeTipoLugarNacimiento = (event) => {
        setTipoLugarNacimiento(event.target.value);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const [valueGender, setValueGender] = React.useState();
    const handleChangeGender = (event) => {
        setValueGender(event.target.value);
    };
    const [valueCIB, setValueCIB] = React.useState();
    const handleChangeCIB = (event) => {
        setValueCIB(event.target.value);
    };
    const [valueCURP, setValueCURP] = React.useState();
    const handleChangeCURP = (event) => {
        setValueCURP(event.target.value);
    };

    const [valueTelCasa, setValueTelCasa] = React.useState();
    const handleChangeTelCasa = (event) => {
        setValueTelCasa(event.target.value);
    };
    const [valueTelRec, setValueTelRec] = React.useState();
    const handleChangeTelRec = (event) => {
        setValueTelRec(event.target.value);
    };
    const [valueCelular, setValueCelular] = React.useState();
    const handleChangeCelular = (event) => {
        setValueCelular(event.target.value);
    };

    const [valueOcupacion, setValueOcupacion] = React.useState();
    const handleChangeOcupacion = (event) => {
        setValueOcupacion(event.target.value);
    };
    const [valuePadre, setValuePadre] = React.useState();
    const handleChangePadre = (event) => {
        setValuePadre(event.target.value);
    };
    const [valueMadre, setValueMadre] = React.useState();
    const handleChangeMadre = (event) => {
        setValueMadre(event.target.value);
    };
    const [valueTutor, setValueTutor] = React.useState();
    const handleChangeTutor = (event) => {
        setValueTutor(event.target.value);
    };
    const [valueCalle, setValueCalle] = React.useState();
    const handleChangeCalle = (event) => {
        setValueCalle(event.target.value);
    };
    const [valueNoInterno, setValueNoInterno] = React.useState();
    const handleChangeNoInterno = (event) => {
        setValueNoInterno(event.target.value);
    };
    const [valueNoExterno, setValueNoExterno] = React.useState();
    const handleChangeNoExterno = (event) => {
        setValueNoExterno(event.target.value);
    };
    const [valueUT, setValueUT] = React.useState();
    const handleChangeUT = (event) => {
        setValueUT(event.target.value);
    };
    const [valueCodigoPostal, setValueCodigoPostal] = React.useState();
    const handleChangeCodigoPostal = (event) => {
        setValueCodigoPostal(event.target.value);
    };
    const [valueEntreCalle1, setValueEntreCalle1] = React.useState();
    const handleChangeEntreCalle1 = (event) => {
        setValueEntreCalle1(event.target.value);
    };
    const [valueCalle2, setValueCalle2] = React.useState();
    const handleChangeCalle2 = (event) => {
        setValueCalle2(event.target.value);
    };
    const [valueNoReg, setValueNoReg] = React.useState();
    const handleChangeNoReg = (event) => {
        setValueNoReg(event.target.value);
    };
    const [valueTipoReg, setValueTipoReg] = React.useState();
    const handleChangeTipoReg = (event) => {
        setValueTipoReg(event.target.value);
    };
    const [valueNombreReg, setValueNombreReg] = React.useState();
    const handleChangeNombreReg = (event) => {
        setValueNombreReg(event.target.value);
    };
    const [valueNumeroAse, setValueNumeroAse] = React.useState();
    const handleChangeNumeroAse = (event) => {
        setValueNumeroAse(event.target.value);
    };
    const [valueTipoAse, setValueTipoAse] = React.useState();
    const handleChangeTipoAse = (event) => {
        setValueTipoAse(event.target.value);
    };
    const [valueNombreAse, setValueNombreAse] = React.useState();
    const handleChangeNombreAse = (event) => {
        setValueNombreAse(event.target.value);
    };
    const [valueComentario, setValueComentario] = React.useState();
    const handleChangeComentario = (event) => {
        setValueComentario(event.target.value);
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
        <CreateBox onSubmit={(e)=>{
            e.preventDefault();
            
            console.log(Array.from(e.target).map(i => i));
            console.log(Array.from(e.target).map(i => i.value));
            
            // fetch('http://localhost:8080/API/SetAdults',{
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json' },
            //     body: JSON.stringify(e.target)
            // }).then((res)=>console.log(res))
        }}>
            <FormLine>
                <StyledTextField id="IDP" label="IDP" 
                    value={tipoIDP}
                    onChange={handleChangeTipoIDP}
                    />

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

                <StyledTextField id="Nu" label="No." 
                    value={tipoNO}
                    onChange={handleChangeTipoNO} />
            </FormLine>
            <FormLine>
                <StyledTextField id="Nombre" label="Nombre(s)" 
                    value={tipoNombre}
                    onChange={handleChangeTipoNombre}/>
                <StyledTextField id="ApellidoP" label="Apellido Paterno" 
                    value={tipoApellidoP}
                    onChange={handleChangeTipoApellidoP}/>
                <StyledTextField id="AppelidoM" label="Apellido Materno" 
                    value={tipoApellidoM}
                    onChange={handleChangeTipoApellidoM}/>
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
                <TextField id="Edad" label="Edad" 
                    value={tipoEdad}
                    onChange={handleChangeTipoEdad}/>
                <TextField id="LdNacimiento" label="Lugar de Nacimiento" 
                    value={tipoLugarNacimiento}
                    onChange={handleChangeTipoLugarNacimiento}/>



                <FormControl component="fieldset">
                    <FormLabel component="legend">Sexo</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender1" value={valueGender} onChange={handleChangeGender}>
                        <FormControlLabel value="Mujer" control={<Radio 
                            
                            onChange={handleChangeGender}
                            />} 
                            label="Mujer" />
                        <FormControlLabel value="Hombre" control={<Radio
                            
                            onChange={handleChangeGender}
                            />} 
                            label="Hombre" />
                    </RadioGroup>
                </FormControl>
            </FormLine>
            <FormLine>
                <StyledTextField id="CIB" label="C.I.B." 
                    value={valueCIB}
                    onChange={handleChangeCIB}/>
                <StyledTextField id="CURP" label="CURP" 
                    value={valueCURP}
                    onChange={handleChangeCURP}/>
            </FormLine>
            <FormLine>
                <StyledTextField id="TelCasa" label="Tel. Casa" 
                    value={valueTelCasa}
                    onChange={handleChangeTelCasa}/>
                <StyledTextField id="TelReca" label="Tel. Recados"
                    value={valueTelRec}
                    onChange={handleChangeTelRec} />
                <StyledTextField id="Cel" label="Celular" 
                    value={valueCelular}
                    onChange={handleChangeCelular}/>
            </FormLine>
            <FormLine>
                <StyledTextField id="Ocupacion" label="Ocupacion"
                    value={valueOcupacion}
                    onChange={handleChangeOcupacion} />

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
                <StyledTextField id="Padre" label="Padre" 
                    value={valuePadre}
                    onChange={handleChangePadre}/>
            </FormLine>
            <FormLine>
                <StyledTextField id="Madre" label="Madre" 
                    value={valueMadre}
                    onChange={handleChangeMadre}/>
            </FormLine>
            <FormLine>
                <StyledTextField id="Tutor" label="Tutor" 
                    value={valueTutor}
                    onChange={handleChangeTutor}/>
            </FormLine>
            <FormLine>
                <StyledTextField id="Calle" label="Calle"
                    value={valueCalle}
                    onChange={handleChangeCalle} />
                <SmallTextField id='interno' label='Interno'
                    value={valueNoInterno}
                    onChange={handleChangeNoInterno} />
                <SmallTextField id='externo' label='Externo' 
                    value={valueNoExterno}
                    onChange={handleChangeNoExterno}/>
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
                <SmallTextField id='ut' label='UT'
                    value={valueUT}
                    onChange={handleChangeUT} />
                <SmallTextField id='CodigoPostal' label='Codigo Postal' 
                    value={valueCodigoPostal}
                    onChange={handleChangeCodigoPostal}/>
            </FormLine>
            <FormLine>
                <StyledTextField id="EntreCalle1" label="Entre Calle 1" 
                    value={valueEntreCalle1}
                    onChange={handleChangeEntreCalle1}/>
            </FormLine>
            <FormLine>
                <StyledTextField id="EntreCalle2" label="Entre Calle 2"
                    value={valueCalle2}
                    onChange={handleChangeCalle2} />
            </FormLine>
            <FormLine>
                <StyledTextField id="NumeroReg" label="Numero Regimen"
                    value={valueNoReg}
                    onChange={handleChangeNoReg} />
                <StyledTextField id="TipoReg" label="Tipo de Regimen" 
                    value={valueTipoReg}
                    onChange={handleChangeTipoReg}/>
                <StyledTextField id="NombreReg" label="Nombre de Regimen"
                    value={valueNombreReg}
                    onChange={handleChangeNombreReg} />
            </FormLine>
            <FormLine>
                <StyledTextField id="NumeroAse" label="Numero Asentamiento" 
                    value={valueNumeroAse}
                    onChange={handleChangeNumeroAse}/>
                <StyledTextField id="TipoAse" label="Tipo de Asentamiento" 
                    value={valueTipoAse}
                    onChange={handleChangeTipoAse}/>
                <StyledTextField id="NombreAse" label="Nombre de Asentamiento"
                    value={valueNombreAse}
                    onChange={handleChangeNombreAse} />
            </FormLine>
            <FormLine>
                <StyledTextField id="Comentarios" label="Comentarios" 
                v   alue={valueComentario}
                    onChange={handleChangeComentario}/>
            </FormLine>
            <FormLine>
                <Button variant="contained" color="primary" type='submit'>
                    Agregar
                </Button>
            </FormLine>


        </CreateBox>

    )
}

export default AdminEditForm;