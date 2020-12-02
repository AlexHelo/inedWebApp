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
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { LineStyle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useLocation } from "react-router-dom";

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

const BigText = styled(Typography)({
    width: '100%',
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
    marginRight: 'Auto',
    marginBottom: '5%',

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
        value: 'NUNCA ASISTIO',
        label: 'NUNCA ASISTIO',
    },
    {
        value: 'PRIMARIA',
        label: 'PRIMARIA',
    },
    {
        value: 'SECUNDARIA',
        label: 'SECUNDARIA',
    },
    {
        value: 'PREPA',
        label: 'PREPA',
    },
    {
        value: 'TECNICA',
        label: 'TECNICA',
    },
    {
        value: 'LIC',
        label: 'LIC',
    },
    {
        value: 'MAESTRIA',
        label: 'MAESTRIA',
    },
    {
        value: 'DOCTORADO',
        label: 'DOCTORADO',
    },
];

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 700,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}






const AdminEditForm = () => {

    const location = useLocation();
    const [user, setUser] = React.useState([]);

    const [tipoIDP, setTipoIDP] = React.useState();
    const handleChangeTipoIDP = (event) => {
        setTipoIDP(event.target.value);
    };

    const [tipoIngreso, setTipoIngreso] = React.useState(" ");
    const handleChangeTipoIngreso = (event) => {
        setTipoIngreso(event.target.value);
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

    const [valueRFC, setValueRFC] = React.useState();
    const handleChangeRFC = (event) => {
        setValueRFC(event.target.value);
    };
    const [valueTipoDeDelegacion, setValueTipoDeDelegacion] = React.useState();
    const handleChangeTipoDeDelegacion = (event) => {
        setValueTipoDeDelegacion(event.target.value);
        console.log(event.target.value);
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

    const [tipoNdUsuario, settipoNdUsuario] = React.useState();
    const handleChangeTipoNdUsuario = (event) => {
        settipoNdUsuario(event.target.value);
    };

    const [tipoTele, setTipoTele] = React.useState([]);
    const [tipoRegimen, setTipoRegimen] = React.useState([]);
    const [tipoAsentamiento, setTipoAsentamiento] = React.useState([]);
    const [TipoDelegacion, setTipoDelegacion] = React.useState([]);
    const [TipoDeVialidad, setTipoDeVialidad] = React.useState([]);
    const handleChangeTipoDeVialidad = (event) => {
        setTipoDeVialidad(event.target.value);
    };
    const [valueHelperText, setHelperText] = React.useState('');
    const [valueError, setError] = React.useState(false);

    const NombreCompleto = String(tipoNombre) + " " + String(tipoApellidoP) + " " + String(tipoApellidoM)
    const DomicilioPrincipal = String(valueCalle) + " " + String(valueNoInterno) + " " + String(valueNoExterno)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    React.useEffect(() => {
        fetch('http://localhost:8080/API/AllPhones').then(response => {

            return (
                response.json()
            )

        }).then(a => { setTipoTele(a); console.log(a); });
        fetch('http://localhost:8080/API/AllRegimen').then(response => {

            return (
                response.json()
            )

        }).then(a => { setTipoRegimen(a); console.log(a); });
        fetch('http://localhost:8080/API/AllAse').then(response => {

            return (
                response.json()
            )

        }).then(a => { setTipoAsentamiento(a); console.log(a); });
        fetch('http://localhost:8080/API/AllVialidad').then(response => {

            return (
                response.json()
            )

        }).then(a => { setTipoDeVialidad(a); console.log(a); });
        fetch('http://localhost:8080/API/AllDelegaciones').then(response => {

            return (
                response.json()
            )

        }).then(a => { setTipoDelegacion(a); console.log(a); });
    }, []);

    today = yyyy + '-' + mm + '-' + dd;

    const AllDataAdults = () => {
        const NewvalueGender = (valueGender === 'Hombre') ? 1 : 2;
        return {
            Idp: tipoIDP,
            Usuario: tipoNdUsuario,
            //TipoIngrso: tipoIngreso,
            //Folio_solicitud: tipoNO,
            Nombre: tipoNombre,
            IdPersona: location.id,
            Apellido_Paterno: tipoApellidoP,
            Apellido_Materno: tipoApellidoM,
            Fecha_Nacimiento: selectedDate,
            Edad: tipoEdad,
            LugarNacimiento: tipoLugarNacimiento,
            Sexo: NewvalueGender,
            Status1: 6,
            StatusArchivo: 2,
            //Tipo_Telefono: 1,
            Domicilio_Principal: DomicilioPrincipal,
            CIB: valueCIB,
            Rfc: valueRFC,
            Curp: valueCURP,
            Nombre_Completo: NombreCompleto,
            //Tipo_Telefono: valueTelCasa,
            Tipo_Telefono: valueTelCasa,
            Telefono: valueTelRec,
            Celular: valueCelular,
            Ocupacion: valueOcupacion,
            Tipo_de_Etnicidad: tipoEtnica,
            Tipo_de_Grado: tipoGrado,
            Padre: valuePadre,
            Madre: valueMadre,
            Rep_Completo: valueTutor,
            Calle: valueCalle,
            do_No_Interior: valueNoInterno,
            do_No_Exterior: valueNoExterno,
            Vialidad: tipoVial,
            Tipo_Vialidad: tipoVial,
            UT: valueUT,
            Codigo_Postal: valueCodigoPostal,
            do_Calle1: valueEntreCalle1,
            do_Calle2: valueCalle2,
            Regimen_Hab: valueTipoReg,
            Regimen: valueNombreReg,
            do_Regimen: valueNombreReg,
            tipo_Asentamiento: valueTipoAse,
            //ValueNumeroAse
            Asentamiento: valueNombreAse,
            do_Asentamiento: valueNombreAse,
            Observaciones: valueComentario,
            Fecha_Alta: today,
            Delegacion: valueTipoDeDelegacion
        }

    }
    const AllDataAdults1 = () => {
        const NewvalueGender = (valueGender === 'Hombre') ? 1 : 2;
        return {
            Idp: tipoIDP,
            Usuario: tipoNdUsuario,
            Nombre: tipoNombre,
            Apellido_Paterno: tipoApellidoP,
            Apellido_Materno: tipoApellidoM,
            Curp: valueCURP,
            Telefono: valueTelRec,
            Domicilio_Principal: DomicilioPrincipal,
            Tipo_Vialidad: tipoVial,
            UT: valueUT,
            Codigo_Postal: valueCodigoPostal,

        }

    }

    const BasicData = {
        Idp: 'IDP',
        // TipoIngrso: 'Tipo de Ingreso',
        // Folio_solicitud: 'Folio Solicitud',
        Nombre: 'Nombre',
        Apellido_Paterno: 'Apellido Paterno',
        Apellido_Materno: 'Apellido Materno',
        Fecha_Nacimiento: 'Fecha de Nacimiento',
        Edad: 'Edad',
        LugarNacimiento: 'Lugar de Nacimiento',
        Sexo: 'Genero',
        // CIB: 'CIB',
        Curp: 'CURP',
        // Tipo_Telefono: 'Tel. Casa',
        Telefono: 'Tel. Recados',
        // Celular: 'Celular',
        Ocupacion: 'Ocupacion',
        Tipo_de_Etnicidad: 'Etnicidad',
        Tipo_de_Grado: 'Tipo de Grado',
        Padre: 'Padre',
        Madre: 'Madre',
        Rep_Completo: 'Tutor',
        Domicilio_Principal: 'Domicilio Principal',
        // Calle: 'Calle',
        // do_No_Interior: 'No. Interno',
        // do_No_Exterior: 'No. Externo',
        Tipo_Vialidad: 'Tipo de Vialidad',
        UT: 'Unidad Territorial',
        Codigo_Postal: 'Codigo Postal',
        // do_Calle1: 'Entre Calle 1',
        // do_Calle2: 'Entre Calle 2',
        Regimen_Hab: 'No. Regimen',
        Regimen: 'Tipo de Regimen',
        do_Regimen: 'Nombre de Regimen',
        tipo_Asentamiento: 'Numero Asentamiento',
        Asentamiento: 'Tipo de Asentamiento',
        do_Asentamiento: 'Nombre de Asentamiento',
        // Observaciones: 'Comentarios'
    }
    const history = useHistory();
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const UploadData = () => {
        fetch('http://localhost:8080/API/UpdateAdult', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(AllDataAdults())
        }).then((res) => console.log(res));
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Se va a Modificar el Adulto:</h2>
            {Object.keys(AllDataAdults1()).map(key =>
                <BigText key={key}>{BasicData[key] + " : " + AllDataAdults1()[key]}</BigText>)}
            <FormLine>
                <Button to="/MonitorBuscar" onClick={() => { UploadData(); handleClose(); history.push("/MonitorBuscar"); }} variant="contained" color="primary" >Aceptar Edición</Button>
                <Button onClick={handleClose} variant="contained" color="secondary" >Regresar</Button>
            </FormLine>

        </div>
    );

    React.useEffect(() => {
        fetch(`http://localhost:8080/API/EditAdults/${location.id}`).then(response => {

            return (
                response.json()
            )

        }).then(a => {

            setTipoIDP(a[0].Idp);
            setTipoNombre(a[0].Nombre);
            setTipoApellidoP(a[0].Apellido_Paterno);
            setTipoApellidoM(a[0].Apellido_Materno);
            setSelectedDate(a[0].Fecha_Nacimiento);
            setTipoEdad(a[0].Edad);
            setTipoLugarNacimiento(a[0].co_lugarnac);
            const NewvalueGender = (a[0].Sexo === 1) ? 'Hombre' : 'Mujer';
            setValueGender(NewvalueGender);
            setValueCURP(a[0].Curp);
            setValueRFC(a[0].RFC);
            setValueTelCasa(a[0].Tipo_Telefono);
            setValueTelRec(a[0].Telefono);
            setValueOcupacion(a[0].co_ocupacion);
            setTipoEtnica(a[0].co_etnica);
            setTipoGrado(a[0].co_gradoest);
            setValuePadre(a[0].co_padre);
            setValueMadre(a[0].co_madre);
            setValueTutor(a[0].co_tutor);
            setValueNoInterno(a[0].do_No_Interior);
            setValueNoExterno(a[0].do_No_Exterior);
            setTipoVial(a[0].do_Tipo_Vialidad);
            setValueUT(a[0].Unidad_Territorial);
            setValueCodigoPostal(a[0].Codigo_Postal);
            setValueEntreCalle1(a[0].do_Calle1);
            setValueCalle2(a[0].do_Calle2);
            setValueTipoReg(a[0].Regimen_Hab);
            setValueTipoAse(a[0].Tipo_Asentamiento);
            setValueNombreReg(a[0].Regimen);
            setValueNombreAse(a[0].Asentamiento);
            setValueComentario(a[0].Observaciones);
            setValueCalle(a[0].do_completo.split(/(\d+)/)[0]);
            setTipoGrado(a[0].co_gradoest);
            setValueTipoDeDelegacion(a[0].Delegacion);



        })
    }, []);


    return (

        <div>
            <CreateBox>
                <FormLine>
                    <StyledTextField id="NdUsuario" label="Nombre de Usuario"
                        value={tipoNdUsuario}
                        onChange={handleChangeTipoNdUsuario}
                    />

                </FormLine>

            </CreateBox>

            <CreateBox onSubmit={(e) => {
                e.preventDefault();
                handleOpen()

            }}>
                <FormLine>
                    <StyledTextField id="IDP" label="IDP"
                        value={tipoIDP || ''}
                        onChange={handleChangeTipoIDP}
                    />

                    <StyledTextField disabled type="password"
                        id="TipoDeIngreso"
                        select
                        label="Tipo de Entrada"
                        value={tipoIngreso || ''}
                        onChange={handleChangeTipoIngreso}

                    >

                    </StyledTextField>

                    <StyledTextField disabled type="password" id="Nu" label="No."
                        value={tipoNO || ''}
                        onChange={handleChangeTipoNO} />
                </FormLine>
                <FormLine>
                    <StyledTextField id="Nombre" label="Nombre(s)"
                        value={tipoNombre || ''}
                        onChange={handleChangeTipoNombre} />
                    <StyledTextField id="ApellidoP" label="Apellido Paterno"
                        value={tipoApellidoP || ''}
                        onChange={handleChangeTipoApellidoP} />
                    <StyledTextField id="AppelidoM" label="Apellido Materno"
                        value={tipoApellidoM || ''}
                        onChange={handleChangeTipoApellidoM} />
                </FormLine>

                <FormLine>
                    <MuiPickersUtilsProvider disabled type="password" utils={DateFnsUtils}>
                        <KeyboardDatePicker disabled type="password"
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={selectedDate || ''}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <TextField disabled type="password" id="Edad" label="Edad"
                        value={tipoEdad || ''}
                        onChange={handleChangeTipoEdad} />
                    <TextField disabled type="password" id="LdNacimiento" label="Lugar de Nacimiento"
                        value={tipoLugarNacimiento || ''}
                        onChange={handleChangeTipoLugarNacimiento} />



                    <FormControl disabled type="password" component="fieldset">
                        <FormLabel component="legend">Sexo</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender1" value={valueGender || ''} onChange={handleChangeGender}>
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
                    <SmallTextField disabled type="password" id="RFC" label="RFC"
                        value={valueRFC || ''}
                        onChange={handleChangeRFC} />
                    <StyledTextField id="CURP" label="CURP"
                        value={valueCURP || ''}
                        onChange={handleChangeCURP} />
                </FormLine>
                <FormLine>
                    <StyledTextField
                        id="TelCasa"
                        select
                        label="Tipo de Telefono"
                        value={valueTelCasa || ''}
                        onChange={handleChangeTelCasa}

                    >
                        {tipoTele.map((option) => (
                            <MenuItem key={option.te_id} value={option.te_id}>
                                {option.te_msglargo}
                            </MenuItem>
                        ))}
                    </StyledTextField>
                    <StyledTextField id="TelReca" label="Telefono"
                        value={valueTelRec || ''}
                        onChange={handleChangeTelRec} />

                </FormLine>
                <FormLine>
                    <StyledTextField disabled type="password" id="Ocupacion" label="Ocupacion"
                        value={valueOcupacion || ''}
                        onChange={handleChangeOcupacion} />

                    <StyledTextField disabled type="password"
                        id="TipoDeEtnicidad"
                        select
                        label="Tipo de Etnicidad"
                        value={tipoEtnica || ''}
                        onChange={handleChangeTipoEtnica}

                    >

                    </StyledTextField>

                    <StyledTextField disabled type="password"
                        id="TipoDeGrado"
                        select
                        label="Tipo de Grado"
                        value={tipoGrado || ''}
                        onChange={handleChangeTipoGrado}

                    >

                    </StyledTextField>

                </FormLine>
                <FormLine>
                    <StyledTextField disabled type="password" id="Padre" label="Padre"
                        value={valuePadre || ''}
                        onChange={handleChangePadre} />
                </FormLine>
                <FormLine>
                    <StyledTextField disabled type="password" id="Madre" label="Madre"
                        value={valueMadre || ''}
                        onChange={handleChangeMadre} />
                </FormLine>
                <FormLine>
                    <StyledTextField disabled type="password" id="Tutor" label="Tutor"
                        value={valueTutor || ''}
                        onChange={handleChangeTutor} />
                </FormLine>
                <FormLine>
            <StyledTextField
                    id="TipoDeDelegacion"
                    select
                    label="Delegacion"
                    value={valueTipoDeDelegacion || ''}
                    onChange={handleChangeTipoDeDelegacion}

                >
                    {TipoDelegacion.map((option) => (
                        <MenuItem key={option.dl_id} value={option.dl_id}>
                            {option.dl_msglargo}
                        </MenuItem>
                    ))}
                </StyledTextField>
            </FormLine>
                <FormLine>
                    <StyledTextField id="Calle" label="Calle"
                        value={valueCalle || ''}
                        onChange={handleChangeCalle} />
                    <SmallTextField id='interno' label='Interno'
                        value={valueNoInterno || ''}
                        onChange={handleChangeNoInterno} />
                    <SmallTextField id='externo' label='Externo'
                        value={valueNoExterno || ''}
                        onChange={handleChangeNoExterno} />
                </FormLine>

                <FormLine>
                    <StyledTextField
                        id="TipoDeVialidad"
                        select
                        label="Tipo de Vialidad"
                        value={tipoVial || ''}
                        onChange={handleChangeTipoDeVialidad}

                    >
                        {TipoDeVialidad.map((option) => (
                            <MenuItem key={option.vi_id} value={option.vi_id}>
                                {option.vi_msglargo}
                            </MenuItem>
                        ))}
                    </StyledTextField>
                    <SmallTextField id='ut' label='UT'
                        value={valueUT || ''}
                        onChange={handleChangeUT} />
                    <SmallTextField id='CodigoPostal' label='Codigo Postal'
                        value={valueCodigoPostal || ''}
                        onChange={handleChangeCodigoPostal} />
                </FormLine>
                <FormLine>
                    <StyledTextField id="EntreCalle1" label="Entre Calle 1"
                        value={valueEntreCalle1 || ''}
                        onChange={handleChangeEntreCalle1} />
                </FormLine>
                <FormLine>
                    <StyledTextField id="EntreCalle2" label="Entre Calle 2"
                        value={valueCalle2 || ''}
                        onChange={handleChangeCalle2} />
                </FormLine>
                <FormLine>
                    <StyledTextField disabled type="password"
                        id="TipoReg"
                        select
                        label="Tipo de Regimen"
                        value={valueTipoReg || ''}
                        onChange={handleChangeTipoReg}

                    >

                    </StyledTextField>
                    <StyledTextField disabled type="password" id="NombreReg" label="Nombre de Regimen"
                        value={valueNombreReg || ''}
                        onChange={handleChangeNombreReg} />
                </FormLine>
                <FormLine>
                    <StyledTextField disabled type="password"
                        id="TipoAse"
                        select
                        label="Tipo de Asentamiento"
                        value={valueTipoAse || ''}
                        onChange={handleChangeTipoAse}

                    >

                    </StyledTextField>
                    <StyledTextField disabled type="password" id="NombreAse" label="Nombre de Asentamiento"
                        value={valueNombreAse || ''}
                        onChange={handleChangeNombreAse} />
                </FormLine>
                <FormLine>
                    <StyledTextField disabled type="password" id="Comentarios" label="Comentarios"
                        value={valueComentario || ''}
                        onChange={handleChangeComentario} />
                </FormLine>
                <FormLine>
                    <Button variant="contained" color="primary" type='submit'>
                        Editar
                </Button>
                </FormLine>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    disableBackdropClick='true'
                >
                    {body}
                </Modal>


            </CreateBox>

        </div>

    )
}

export default AdminEditForm;