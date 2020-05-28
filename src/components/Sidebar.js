import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Jobs from './Jobs';

const useStyles = makeStyles({
  sticky: { padding: 16, position: 'sticky', top: 16 }
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Card className={classes.sticky} variant="outlined">
      <Jobs />
    </Card>
  );
};

export default Sidebar;