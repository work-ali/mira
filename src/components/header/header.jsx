import React from 'react';
import Grid from '@material-ui/core/Grid';
import { headerStyles } from './header_style'


export default function Header() {
  const classes = headerStyles();

  return (
    <Grid container className={classes.main_header}>
        <Grid item xs={12} className={classes.header_row}>
            <img className={classes.brand_logo} src="./images/mira_logo.png"/>
            <div className={classes.menu_btn}>
                <span className={classes.btn_bar}></span>
                <span className={classes.btn_bar}></span>
                <span className={classes.btn_bar}></span>
            </div>
    </Grid>
    </Grid>
  )
}



