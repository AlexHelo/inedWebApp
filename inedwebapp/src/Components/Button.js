import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';


const AddButton = styled(Button)({
    fontFamily: "Open Sans !important",
    fontSize: '15 px !important',
    color: '#7D7D7D !important',
    fontWigth: 'bold !important',
    paddingTop: '1% !important',
    paddingBottom: '1% !important',
    marginBottom: '2% !important',
    marginLeft: '79% !important',

})



const AddIcon = styled(AddCircleOutlineIcon)({

    marginRight: '15px !important',
    color: '#7D7D7D'
})


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function OutlinedButtons(props) {
    const classes = useStyles();
    const history = useHistory();
    return (


        <AddButton variant="outlined" onClick={() => history.push(props.to)}> {props.txt === ('Agregar Adulto') && (<AddIcon />)} {props.txt === ('Agregar Usuario') && (<AddIcon />)}{props.txt}   </AddButton>
        //<AddButton variant="outlined" onClick={() => history.push(props.to)}> {props.txt === 'Agregar Usuario' && (<AddIcon />)} {props.txt}   </AddButton>


    );
}