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

const Niveles = [
    {
        value: 'Usuario',
        label: 'Usuario',
    },
    {
        value: 'Monitor',
        label: 'Monitor',
    },
    {
        value: 'Administrador',
        label: 'Administrador',
    },
];

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

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const LoginScreen = () => {

    const [valueClave, setValueClave] = React.useState();
    const handleChangeClave = (event) => {
        setValueClave(event.target.value);
    };

    const [valueHelperText, setHelperText] = React.useState('');
    const [valueError, setError] = React.useState(false);

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });


        if (event.target.value == parseInt(event.target.value, 10)) {

            setHelperText('');
            setError(false)

        } else {
            setHelperText('Valor numerico');
            setError(true)
        }
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState([]);
    const [errorM, setErrorM] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const setUser=(info)=>{
    //     user=info;
    // }

    const CheckUserInDB = () => {
        fetch('http://localhost:8080/API/CheckUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(DataUser())

        }).then((response) => {
            return (
                response.json()
            )
        }).then((a) => {
            if (a.length != 0) {
                //console.log('y');
                setUser(a[0]);
                CheckError(true);
            } else {
                CheckError(false);
            }
        });


    }
    const history = useHistory();

    const CheckError = (n) => {
        let cond;
        if (n) {
            //console.log(user);
            cond = true;
            setErrorM(false);
        } else {
            cond = false;
            setErrorM(true);
        }
        if (cond === true) {
            handleOpen();
        }

    }

    const CheckForm = () => {
        if (valueClave && values.password) {
            CheckUserInDB();

        } else {

        }

    }

    const DataUser = () => {
        //console.log(valueClave,values.password)
        return {
            b01_us_clave: valueClave,
            b01_us_password: values.password,
        }

    }

    const hist = () => {
        console.log(user.b01_us_role)
        switch (user.b01_us_role) {
            case 'Administrador':
                history.push("/AdminBuscar");
                break;
            case 'Monitor':
                history.push("/MonitorBuscar");
                break;
            case 'Usuario':
                history.push("/UsuarioBuscar");
                break;
            case 'Personal de Modulo':
                history.push("/PersonalDeModuloBuscar");
                break;

        }
        
    }
    const BasicData = {
        b01_us_Nombre: 'Nombre',
        b01_us_Apellido: 'Apellidos',
        
        
        b01_us_role: 'Rol'
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">¿Eres tú?</h2>
            {Object.keys(BasicData).map(key =>
                <BigText key={key}>{BasicData[key] + " : " + user[key]}</BigText>)}
            <FormLine>
                <Button to="/Visualizar" onClick={() => { handleClose(); hist(); }} variant="contained" color="primary" >Si</Button>
                <Button onClick={() => { handleClose(); setUser([]); }} variant="contained" color="secondary" >No</Button>
            </FormLine>

        </div>
    );


    return (
        <CreateBox onSubmit={(e) => {
            e.preventDefault();
            CheckForm();




        }}>
            <FormLine>
                <BigTextField id="Clave" label="Clave"
                    value={valueClave}
                    onChange={handleChangeClave} />
            </FormLine>
            <FormLine>
                <BigPassword>
                    <InputLabel htmlFor="standard-adornment-password" >Contraseña</InputLabel>
                    <Input
                        id="standard-adornment-password"

                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}

                        onChange={handleChangePassword('password')}
                        error={valueError}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText id="component-helper-text">{valueHelperText}</FormHelperText>

                </BigPassword>
            </FormLine>
            <FormLine>
                <Button variant="contained" color="primary" type='submit'>
                    Iniciar Sesión
                </Button>
            </FormLine>
            <FormLine>
                <BigText>{errorM ? 'El usuario/constraseña que ingresaste es incorrecto' : undefined}</BigText>
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


    )
}

export default LoginScreen;