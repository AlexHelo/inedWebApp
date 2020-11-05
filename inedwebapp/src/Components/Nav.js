import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';




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

const Nav = () => {

    const [field, setField] = React.useState('Name');

    return (
        <NavBar>


            <StyledComboBox
                id="filled-select-currency"
                select
                label="Select"
                value={field}
                onChange={(e) => setField(e.target.value)}

            >


                {fields.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}

            </StyledComboBox>
            <StyledTextField id="filled-basic" label="Busqueda" />
            <Title>INED | Instituto para el Envejecimiento Digno</Title>
        </NavBar>
    )


}

export default Nav;