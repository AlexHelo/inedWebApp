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


const NavNoSearch = () => {

    const [field, setField] = React.useState('Name');

    return (
        <NavBar>
            <Title>INED | Instituto para el Envejecimiento Digno</Title>
        </NavBar>
    )


}

export default NavNoSearch;