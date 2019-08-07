import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

function Review(props) {
    const classes = useStyles();
console.info(props.data)
    return (
        <List className={classes.root}>
            {props.data.user_reviews.map(review => (
                <ListItem alignItems="flex-start" key={review.review.id}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={review.review.user.profile_image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={review.review.user.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {review.review.rating_text}
                                </Typography>
                                &nbsp;
                                {review.review.review_text}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default Review;