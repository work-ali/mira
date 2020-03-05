import { makeStyles } from '@material-ui/core/styles';

export const boxStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: '0 2px 5px rgba(59,59,59,.2)',
        borderRadius: 18,
        border: '2px solid transparent',
        cursor: 'pointer',
        height: '100%'
      },
      box_img: {
        maxWidth: 60,
        minHeight: 60,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      box_text: {
        fontSize: 13,
        color: '#000',
        marginTop: 4,
        display: 'block'
      }
}));