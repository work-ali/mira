import { makeStyles } from '@material-ui/core/styles';

export const selectionStyles = makeStyles(theme => ({
    container: {
        maxWidth: 1090,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 15,
        paddingRight: 15
    },
    title_content: {
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 60,
        
    },
    title: {
        lineHeight: '1.4',
        fontSize: 60,
        marginTop: 0,
        marginBottom: 20
    },
    sub_title: {
        lineHeight: '1.4',
        fontSize: 22,
        marginTop: 0,
        marginBottom: 0
    },
    item_list: {
        marginBottom: 50
    }
}));