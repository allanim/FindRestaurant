import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GoogleMapReact from 'google-map-react';
import {Card} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3, 2),
    },
}));

const AnyReactComponent = ({text}) => <div color={red}>{text}</div>;

const mapKey = "AIzaSyB7dfdaY3wqI6yNMRfMkig6UqsQK4bMcs4";

function Detail(props) {
    const classes = useStyles();
    const defaultProps = {
        center: {
            lat: 43.6827641,
            lng: -79.4558824
        },
        zoom: 11
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        {props.data.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <br/>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Phone number
                </Typography>
                <Typography component="p">
                    {props.data.phone_numbers}
                </Typography>
                <Typography variant="h5" component="h3">
                    Cuisines
                </Typography>
                <Typography component="p">
                    {props.data.cuisines}
                </Typography>
                <Typography variant="h5" component="h3">
                    Opening hours
                </Typography>
                <Typography component="p">
                    {props.data.timings}
                </Typography>
                <Typography variant="h5" component="h3">
                    Address
                </Typography>
                <Typography component="p">
                    {props.data.location.address}
                </Typography>
            </Paper>
            <br/>
            <Card>
                <div style={{height: '40vh', width: '100%'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: mapKey}}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}

                    >
                        <AnyReactComponent
                            lat={props.data.location.latitude}
                            lng={props.data.location.longitude}
                            text="★"
                        />
                    </GoogleMapReact>
                </div>
            </Card>
        </div>
    );
}

export default Detail;