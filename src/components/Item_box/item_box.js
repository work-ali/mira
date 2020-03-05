import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { boxStyles } from './item_box_style'


export default function ItemBox({ item_data, handleClick }) {
  const classes = boxStyles();
  const {img, text, id, active } = item_data
  return (
    <React.Fragment>
        <Grid item lg={2} md={3} xs={6} className={classes.box_wrapper} onClick={() => handleClick(id)}>
            <Paper className={`${classes.paper} ${active ? "active" : null} box-wrapper`} >
                <img className={classes.box_img} src={img}/>
                <span className={classes.box_text}>{text}</span>
            </Paper>
        </Grid>
    </React.Fragment>
  )
}



