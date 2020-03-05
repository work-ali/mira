import React from 'react';
import Grid from '@material-ui/core/Grid';
import { buttonStyles } from './button_style';


export default function Button() {
  const classes = buttonStyles();
  return (
    <Grid item xs={12} className={classes.btn_wrapper}>
        <button className={classes.btn_primary}>
           Next
        </button>
    </Grid>
  )
}



