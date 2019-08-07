import React from "react";
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // width: 500,
        // height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const DetailLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

function List(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                    <ListSubheader component="div"/>
                </GridListTile>
                {props.restaurants.map(data => (
                    <GridListTile key={data.restaurant.id}>
                        <img src={data.restaurant.photos[0].photo.url} alt={data.restaurant.name}/>
                        <GridListTileBar
                            title={data.restaurant.name}
                            subtitle={<span>location: {data.restaurant.location.address}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${data.restaurant.name}`} className={classes.icon}
                                            component={DetailLink} to={`/detail/${data.restaurant.id}`}>
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default List;