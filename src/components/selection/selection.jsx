import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import { selectionStyles } from './selection_style';
import ItemBox from '../Item_box/item_box';
import content from '../../content_api';
import Button from '../button/button'


export default function Selection() {
  const classes = selectionStyles();

  const [data, setData] = useState([]);
  const [btnShow, setBtnShow] = useState(false);

  useEffect(() => {
    setData(content)
    
  });

  const handleClick = id => {
    
    const item = data.filter(item => item.id === id);
    const newData = [...data];
    newData.map(i => i.active = false)
    const index = newData.indexOf(item[0]);
    const active = newData[index].active = true
    setData(newData)
    setBtnShow(active);
  }

  return (
    <Grid container className={classes.main_body}>
        <Grid  container item xs={12} className={classes.container}>
            <Grid item xs={12} className={classes.title_content}>
                <h1 className={`${classes.title} selection-title`}>How can we help you?</h1>
                <h4 className={classes.sub_title}>Pick a condition</h4>
            </Grid>
            <Grid container item spacing={2} className={classes.item_list}>
                {data.map(item => 
                <ItemBox 
                  handleClick={handleClick} 
                  key={item.id} 
                  item_data={item}
                />)}
            </Grid>
            { btnShow ? <Button/> : null}
        </Grid>
    </Grid>
  )
}



