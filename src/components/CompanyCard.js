import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CompanyContext from './../sidebarJobsContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 16
  }
});

const CompanyCard = ({handle, name, description, logoUrl}) => {
  const {setCurrentCompany} = useContext(CompanyContext);
  const classes = useStyles('hello');

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>setCurrentCompany(handle)}>Show Jobs</Button>
      </CardActions>
    </Card>
  );
};

export default CompanyCard;