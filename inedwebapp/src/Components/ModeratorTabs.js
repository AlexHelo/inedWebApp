import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Adulto from './AdultMonitor'
import Usuario from './User'
import Request from './RequestMonitor'
import { useLocation } from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component='div'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: '80%',
        marginLeft: 'Auto',
        marginRight: 'Auto'

    },
}));


const ModeratorTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    const location = useLocation();
    let first = true;
    React.useEffect(() => {
        console.log(location);
        if (location.yes && first == true) {
            switch (location.tab) {
                case 0:
                    setValue(0);
                    break;
                case 1:
                    setValue(1);
                    break;
                case 2:
                    setValue(2)
                    break;

            }
            first = false;
        }
    })

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Adultos" {...a11yProps(0)} />
                    <Tab label="Solicitudes" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Adulto value={location} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Request value={location} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Usuario value={location} />
            </TabPanel>
        </div>
    );

}

export default ModeratorTabs;