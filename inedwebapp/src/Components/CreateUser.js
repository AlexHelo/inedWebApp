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


const BigTextField = styled(TextField)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})

const BigPassword = styled(FormControl)({
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


const CreateUser = () => {

    const [valueNombre, setValueNombre] = React.useState();
    const handleChangeNombre = (event) => {
        setValueNombre(event.target.value);
    };
    const [valueApellidoP, setValueApellidoP] = React.useState();
    const handleChangeApellidoP = (event) => {
        setValueApellidoP(event.target.value);
    };
    const [valueApellidoM, setValueApellidoM] = React.useState();
    const handleChangeApellidoM = (event) => {
        setValueApellidoM(event.target.value);
    };
    const [tipoNivel, setTipoNivel] = React.useState();
    const handleChangeTipoNivel = (event) => {
        setTipoNivel(event.target.value);
    };
    const [valueUT, setValueUT] = React.useState();
    const handleChangeValueUT = (event) => {
        setValueUT(event.target.value);
    };
    
    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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


    return (
        <CreateBox>
            <FormLine>
                <BigTextField id="Nombre" label="Nombre(s)" 
                value={valueNombre}
                onChange={handleChangeNombre}/>
                <BigTextField id="ApellidoP" label="Apellido Paterno" 
                value={valueApellidoP}
                onChange={handleChangeApellidoP}/>
                <BigTextField id="ApellidoM" label="Apellido Materno" 
                value={valueApellidoM}
                onChange={handleChangeApellidoM}/>
            </FormLine>
            <FormLine>
                <BigPassword>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChangePassword('password')}
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
            </BigPassword>
            </FormLine>
            <FormLine>
                <BigTextField
                    id="Nivel"
                    select
                    label="Nivel"
                    value={tipoNivel}
                    onChange={handleChangeTipoNivel}

                >
                    {Niveles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>
                <BigTextField id="UT" label="Unidad Territorial" value={valueUT} onChange={handleChangeValueUT} />
            </FormLine>
            <FormLine>
                <Button variant="contained" color="primary" type='submit'>
                    Crear
                </Button>
            </FormLine>
        </CreateBox>

    )
}

export default CreateUser;