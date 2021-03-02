import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
// import { green, grey, red } from '@material-ui/core/colors/';
// import { List } from '@material-ui/core';



const useStyles = makeStyles(() => ({
    root: {
        width: 400,
        marginBottom: 15,
        backgroundColor: '#f5deb3',
        borderRadius: '1.5%',
        padding: '-5%',


    },
    media: {
        height: 50,
        marginLeft: '5%',
        borderRadius: '5%',
        marginRight: '5%',
        paddingTop: '56.25%', // 16:9
    },
    headerstyle: {

        color: orange[800],

    }


}));


export default function Recipe({ title, calories, image, ingredients }) {

    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.headerstyle}
                title={title}
                subheader={'Calories: ' + Math.round(calories)}
            />
            <hr />
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
            />
            <CardContent>

                <Typography variant="subtitle2" color="textPrimary">
                    <ol>
                        {ingredients.map(ingredient => (
                            <li key={Math.random()}>{ingredient.text}</li>
                        ))}
                    </ol>
                </Typography>
            </CardContent>


        </Card>
    )
}
