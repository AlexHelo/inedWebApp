import 'date-fns';
import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
    useUtils,
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
import FormHelperText from '@material-ui/core/FormHelperText';




const BigTextField = styled(TextField)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})
const BigText = styled.span({

    fontFamily: "Open Sans",
    fontSize: '32px',
    color: '#294F91',
    marginRight: '2%',
    marginTop: '5px'
})

const BigPassword = styled(FormControl)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})

const SmallText = styled(Typography)({
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
    width: '60%',
    marginLeft: 'Auto',
    marginRight: 'Auto'

})

const FormLine = styled.span({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'noWrap',
    marginTop: '5%',
    marginBottom: '5%',

})


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



const fields1 = [
    {
        value: 'Name',
        label: 'Nombre',
    },
    {
        value: 'Apellido Paterno',
        label: 'Apellido Paterno',
    },
    {
        value: 'Apellido Materno',
        label: 'Apellido Materno',
    },
    {
        value: 'CURP',
        label: 'CURP',
    },
    {
        value: 'Cellphone',
        label: 'Telefono',
    },
    {
        value: 'Responsible',
        label: 'Responsable Nombre',
    },
    {
        value: 'Unidad Territorial',
        label: 'Unidad Territorial',
    },
    {
        value: 'IDP',
        label: 'IDP',
    }
    
    

];
const fields2 = [
    {
        value: 'User',
        label: 'Nombre Usuario',
    },
    {
        value: 'Tipo Solicitud',
        label: 'Tipo de Solicitud',
    },
    {
        value: 'Nombre de Adulto',
        label: 'Nombre de Adulto',
    }
];
const fields3 = [
    {
        value: 'Usuario',
        label: 'Usuario Nombre',
    },
    {
        value: 'Clave',
        label: 'Clave',
    },
    {
        value: 'Contraseña',
        label: 'Contraseña',
    },
    {
        value: 'Rol',
        label: 'Rol',
    },
];

const busqueda = [
    {
        value: 'Adult',
        label: 'Adulto',
    },
    {
        value: 'Request',
        label: 'Solicitud',
    },

];

const MonitorSearch = () => {


    const history = useHistory();
    const [searchh, setSearch] = React.useState();
    const [tipoBusqueda, setTipoBusqueda] = React.useState('');
    const handleChangeTipoBusqueda = (event) => {
        setTipoBusqueda(event.target.value);
        console.log(event.target.value);
        changeField(event.target.value);
    };
    const [fields, setFields] = React.useState([]);
    const [tipoCampo, setTipoCampo] = React.useState();
    const handleChangeTipoCampo = (event) => {
        setTipoCampo(event.target.value);
    };
    const [valueBusqueda, setValueBusqueda] = React.useState();
    const handleChangeBusqueda = (event) => {
        setValueBusqueda(event.target.value);
    };

    let changeField= (val)=>{
        switch(val){
            case 'Adult':
                setFields(fields1);
                break;
            case 'Request':
                setFields(fields2);
                break;
            case 'User':
                setFields(fields3);
                break;
        }
    }

    const AllDataSearch = () => {
        return {
            Tipo: FilterSearch(tipoBusqueda),
            Campo: FilterData(tipoCampo),
            Datos: (FilterData(tipoCampo)=== 'StatusArchivo') ? ChangeValue(valueBusqueda):valueBusqueda,
            Informacion : FilterSearchType(tipoBusqueda),
            BusquedaF: FilterSSearch(tipoBusqueda),
            BusquedaData: FilterSSSearch(tipoBusqueda),
        }

    }

    const ChangeValue=(data)=>{
        let con='yes';
        switch(data){
            case 'Alta':
                con= 0;
                break;
            case 'Baja':
                con= 1
                break;
            case 'Modificacion':
                con= 2
                break;
        }
        return con;
    }
    let FilterSSSearch=(data)=>{
        let con='yes';
        switch(data){
            case 'Adult':
                con= 4;
                break;
            case 'Request':
                con= 5
                break;
            case 'User':
                con= 'Usuario'
                break;
        }
        return con;
    }
    let FilterSSearch=(data)=>{
        let con='yes';
        switch(data){
            case 'Adult':
                con= 'Adulto'
                break;
            case 'Request':
                con= 'Adulto'
                break;
            case 'User':
                con= 'Usuario'
                break;
        }
        return con;
    }
    let FilterSearch=(data)=>{
        let con='yes';
        switch(data){
            case 'Adult':
                con= 'ds02_personas'
                break;
            case 'Request':
                con= 'ds02_personas'
                break;
            case 'User':
                con= 'ds01_usuarios'
                break;
        }
        return con;
    }

    let FilterSearchType=(data)=>{
        let con='yes';
        switch(data){
            case 'Adult':
                con= 'Id_Persona'
                break;
            case 'Request':
                con= 'Id_Persona'
                break;
            case 'User':
                con= 'b01_us_id'
                break;
        }
        return con;
    }

    let FilterData=(data)=>
    {
        let con='yes';
        switch(data){
            case 'Name':
                con= 'Nombre';
                break;
            case 'Apellido Paterno':
                con='Apellido_Paterno';
                break;
            case 'Apellido Materno':
                con='Apellido_Materno';
                break;
            case 'CURP':
                con='Curp';
                break;
            case 'Responsible':
                con='Rep_Completo';
                break;
            case 'Responsible Apellido Materno':
                con='Rep_ApePat';
                break;
            case 'Responsible Apellido Paterno':
                con='Rep_ApeMat';
                break;
            case 'Cellphone':
                con= 'Telefono';
                break;
            case 'User':
                con='Recibe_solicitud'
                break;
            case 'Tipo Solicitud':
                con='StatusArchivo'
                break;
            case 'Nombre de Adulto':
                con='Nombre'
                break;
            case 'Usuario':
                con='b01_us_Nombre';
                break;
            case 'Clave':
                con='b01_us_clave';
                break;
            case 'Contraseña':
                con='b01_us_password';
                break;
            case 'Rol':
                con='b01_us_role';
                break;
            case 'Unidad Territorial':
                con='Unidad_Territorial';
                break;
            case 'IDP':
                con='Idp';
                break;
        }
        return con;
    }

    const UploadData = () => {
        fetch('http://localhost:8080/API/Search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(AllDataSearch())
        }).then((response) => {
            return (
                response.json()
            )
        }).then((a) => {
            setSearch(a);
            history.push({
                pathname: "/VisualizarMonitor",
                yes: a,
                tab: FilterSearch2(AllDataSearch().BusquedaData)
            })
        });
    }

    let FilterSearch2=(data)=>{
        let con='yes';
        switch(data){
            case 4:
                con= 0
                break;
            case 5:
                con= 1
                break;
            case 'Usuario':
                con= 2
                break;
        }
        return con;
    }



    return (
        <CreateBox onSubmit={(e) => {
            e.preventDefault();
            if(valueBusqueda){
                UploadData();
            }else{
                history.push("/VisualizarMonitor");
            }


        }}>
            <FormLine>
                <BigText>Monitor</BigText>
                <Button onClick={() => { history.push("/Login"); }} variant="contained" color="secondary">Cerrar Sesion</Button>
            </FormLine>
            <FormLine>
                <BigTextField
                    id="TipoDeBusqueda"
                    select
                    label="Tipo De Busqueda"
                    value={tipoBusqueda}
                    onChange={handleChangeTipoBusqueda}

                >
                    {busqueda.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>
            </FormLine>

            <FormLine>
                <BigTextField
                    id="Nivel"
                    select
                    label="Campo"
                    value={tipoCampo}
                    onChange={handleChangeTipoCampo}

                >
                    {fields.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>
            </FormLine>
            <FormLine>
                <BigTextField id="Busqueda" label="Busqueda"
                    value={valueBusqueda}
                    onChange={handleChangeBusqueda} />
            </FormLine>
            <FormLine>
                <Button  variant="contained" color="primary" type='submit'>
                    Buscar
        </Button>
            </FormLine>

        </CreateBox>


    )
}

export default MonitorSearch;