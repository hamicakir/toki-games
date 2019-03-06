import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const Loading = ({classes}) => (
    <CircularProgress className={classes.progress}/>
);

export default withStyles(Loading);
