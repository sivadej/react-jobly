import React from 'react';
import Companies from './components/Companies';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  container: { padding: theme.spacing(2), maxWidth: 1200, margin: 'auto' },
  column: { padding: theme.spacing(2) }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container direction='row' className={classes.container}>
        <Grid item xs={12} sm={8}>
          <Companies />
        </Grid>
        <Grid item xs sm={4} className={classes.column}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;


