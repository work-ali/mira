import { makeStyles } from '@material-ui/core/styles';

export const buttonStyles = makeStyles(theme => ({
    btn_primary: {
        width: 330,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#0a9e01',
        boxShadow: 'none',
        border: 0,
        height: 60,
        borderRadius: 18,
        cursor: 'pointer'
    },
    btn_wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));