import React from 'react';
import Grid from '@material-ui/core/Grid';
import { footerStyles } from './footer_style'


export default function Header() {
  const classes = footerStyles();

  return (
    <Grid container className={classes.main_footer}>
        <Grid item xs={12} className={classes.copyright}>
           © 2020. Mira inc
        </Grid>
    </Grid>
  )
}



