import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FilterListIcon from '@material-ui/icons/FilterList';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const TableTitle = styled(Typography)({

    fontFamily: "Open Sans",
    fontSize: '32px !important',
    color: '#294F91',
    marginRight: '2%',
    marginTop: '5px'
})


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Roberto R.', 'Alta', 'damian perez perez', 'Alta de Adulto'),
    createData('Ignacio Rey king', 'Baja', 'daniel mitch mitch', 'Baja de Adulto mayor'),
    createData('Ignacio Rey king', 'Cambio', 'diego ramirez ramirez	', 'Actualización de domicilio'),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Usuario' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Tipo de Solicitud' },
    //{ id: 'fat', numeric: true, disablePadding: false, label: 'Cambio' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Nombre del Adulto' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Comentario' },
];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">

                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected, OnClickDelete, selected } = props;
    const history = useHistory();

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} seleccionados
                </Typography>
            ) : (
                    <TableTitle className={classes.title} variant="h6" id="tableTitle" component="div">
                        Base de Datos de Solicitudes
                    </TableTitle>
                )}

            {numSelected > 0 ? (

                <div>
                    <Tooltip title="Borrar">
                        <IconButton aria-label="Borrar">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Aceptar">
                        <IconButton aria-label="Aceptar" onClick={() => {

                            console.log(selected);

                            history.push({
                                pathname: 'AceptarAdultoMonitor' + '/' + selected[0],
                                id: selected[0]
                            })
                        }}>
                            <CheckCircleIcon />
                        </IconButton>
                    </Tooltip>

                </div>

            ) : (
                    <span />
                )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function EnhancedTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [requests, setRequests] = React.useState([]);
    const ConValue =(value)=>{
        let s='(';
        for(let i=0;i<value.length;i++){
            if((i+1)==value.length){
                s+=parseInt(value[i].Id_Persona)+')';
            }else{
                s+=parseInt(value[i].Id_Persona)+',';
            }
            
        };
        
        
        return s
    }
    let kl=true;
    React.useEffect(() => {
        if(props.value.yes){
            if(props.value.yes.length>0 || kl==false){
                let i= ConValue(props.value.yes)
                
                fetch('http://localhost:8080/API/GetRequestMonitor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({datos:i})
                }).then(response => {
    
                return (
                    response.json()
                )
    
            }).then(a => { setRequests(a); kl=false;});
    
            }else if(kl==true){
                fetch('http://localhost:8080/API/AllRequestsMonitor').then(response => {
    
                    return (
                        response.json()
                    )
    
                }).then(a => { setRequests(a); })
        }}
        else{
            fetch('http://localhost:8080/API/AllRequestsMonitor').then(response => {
    
                    return (
                        response.json()
                    )
    
                }).then(a => { setRequests(a); })
        // }
    }}, []);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = requests.map((n) => n.Id_Persona);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, Id_Persona) => {
        const selectedIndex = selected.indexOf(Id_Persona);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, Id_Persona);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };
    let LabelStatusArchivo=(status)=>{
        switch(status){
            case 0:
                return 'Alta';
                break;
            case 1:
                return 'Baja';
                break;   
            case 2:
                return 'Modificacion';
                break;
        }
    }
    const isSelected = (Id_Persona) => selected.indexOf(Id_Persona) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, requests.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar selected={selected} numSelected={selected.length} to={props.to} OnClickDelete={() => {
                    selected.forEach((select) => {
                        fetch(`http://localhost:8080/API/DeleteAdult/${select}`)
                            .then(() => {
                                console.log('Deleted ID = ' + select)
                                setRequests(requests.filter((adulto) => {
                                    return adulto.Id_Persona !== select
                                }))
                                setSelected([])
                            })
                    })
                }} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"

                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={requests.length}
                        />
                        <TableBody>
                            {stableSort(requests, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.Id_Persona);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.Id_Persona)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={index}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.Recibe_solicitud}
                                            </TableCell>
                                            <TableCell align="right">{LabelStatusArchivo(row.StatusArchivo)}</TableCell>
                                            <TableCell align="right">{row.Nombre_Completo}</TableCell>
                                            <TableCell align="right">{row.Observaciones}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={requests.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

        </div>
    );
}