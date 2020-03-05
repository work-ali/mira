import { makeStyles } from '@material-ui/core/styles';

export const footerStyles = makeStyles(theme => ({
    main_footer: {
        paddingTop: 20,
        paddingBottom: 40,
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        bottom: 0,
        backgroundColor: '#fff'
    },
    copyright: {
        fontSize: 12,
        fontWeight: '600',
        color: 'rgba(0,0,0,.4)',
    }
}));