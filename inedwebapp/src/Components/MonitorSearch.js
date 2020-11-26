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

const BigText = styled(Typography)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

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



const fields = [
    {
        value: 'Name',
        label: 'Nombre',
    },
    {
        value: 'Direction',
        label: 'Dirección',
    },
    {
        value: 'CURP',
        label: 'CURP',
    },
    {
        value: 'Birthday',
        label: 'Fecha de Nacimiento',
    },
    {
        value: 'Cellphone',
        label: 'Celular',
    },
    {
        value: 'Responsible',
        label: 'Responsable',
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
    const [tipoBusqueda, setTipoBusqueda] = React.useState();
    const handleChangeTipoBusqueda = (event) => {
        setTipoBusqueda(event.target.value);
    };

    const [tipoCampo, setTipoCampo] = React.useState();
    const handleChangeTipoCampo = (event) => {
        setTipoCampo(event.target.value);
    };
    const [valueBusqueda, setValueBusqueda] = React.useState();
    const handleChangeBusqueda = (event) => {
        setValueBusqueda(event.target.value);
    };











    return (
        <CreateBox >

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
                <Button onClick={() => { history.push("/VisualizarMonitor"); }} variant="contained" color="primary" type='submit'>
                    Buscar
        </Button>
            </FormLine>

        </CreateBox>


    )
}

export default MonitorSearch;