import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },

  },
}));

function App() {
  const classes = useStyles();

  const APP_ID = 'c59824c8';
  const APP_KEY = '4cedcc900eb5943f613ed4a42166df6e	';


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);
  const Request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(Request);
    const data = await response.json();
    setRecipes(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }


  return (
    <Grid container direction="column" className="App">
      <Grid container direction="column" alignContent='center' alignItems="center" justify="center">
        <form onSubmit={getSearch} className={classes.root}>
          <Grid item>
            <TextField
              type="text"
              id="standard-basic" label="Eat less & stay blessed..."
              value={search}
              onChange={updateSearch}
            />
          </Grid>

          <Grid item container alignContent='center' alignItems="center" justify="center" >
            <Button variant="outlined" type="submit" color="primary">
              Search
        </Button>
          </Grid>



        </form>
      </Grid>

      <Grid direction="row" container justify="space-around" spacing={1}>


        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}







      </Grid>

    </Grid>
  );
}

export default App;
