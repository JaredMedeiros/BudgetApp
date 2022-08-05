import React from 'react';
import { Grid } from '@material-ui/core';

import Details from './components/Details/Details';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className = {classes.grid} container spacing={0} alginItems="center" justify="center" styles = {{height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    Main
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
        </div>
    )
}

export default App