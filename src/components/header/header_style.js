import { makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles(theme => ({
  header_row: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  brand_logo: {
    width: 83
  },
  menu_btn: {
    height: 20,
    width: 22,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'space-between',
    cursor: 'pointer'
  },
  btn_bar: {
    display: 'block',
    height: 3,
    backgroundColor: '#000',
    width: '100%'
  }
}));