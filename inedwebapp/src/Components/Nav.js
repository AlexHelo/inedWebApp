import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';



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
const NavBar = styled.span({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'noWrap',
    backgroundColor: 'white',
    paddingTop: '1%',
    paddingBottom: '1%',
    marginBottom: '2%'
})

const Title = styled.span({

    fontFamily: "Open Sans",
    fontSize: '32px',
    color: '#294F91',
    marginRight: '2%',
    marginTop: '5px'
})

const StyledTextField = styled(TextField)({
    width: '50%',
    marginRight: '5% !important'

})

const StyledComboBox = styled(TextField)({
    marginLeft: '2% !important',
});

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



const Nav = (props) => {

    const [field, setField] = React.useState('Name');
    const handleChangeField = (event) => {
        setField(event.target.value);
    };
    const [valueBusqueda, setValueBusqueda] = React.useState();
    const handleChangeBusqueda = (event) => {
        setValueBusqueda(event.target.value);
    };

    const history = useHistory();
    const AllDataUsers = () => {
        return {
            //b01_us_id: location.id,
        }

    }

    return (
        <NavBar>

            <Button onClick={() => { history.push(props.to); }} variant="contained" color="primary" type='submit'>
                Regresar a Busqueda
                </Button>

            <Title>INED | Instituto para el Envejecimiento Digno</Title>
        </NavBar>
    )


}

export default Nav;