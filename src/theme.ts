import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuLink: {
        marginRight: theme.spacing(1),
        cursor: "pointer",
    },
    title: {
        flexGrow: 1,
    },
    input: {
        flexGrow: 1,
        marginTop: theme.spacing(3),
    },
    formControlLabelTypo: {
        fontSize: 20,
    },
    formControlLabelTypoCompleted: {
        textDecoration: 'line-through',
        fontSize: 20,
    },
    formControlLabel: {
        marginLeft: theme.spacing(1),
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        marginTop: theme.spacing(2),
    },
    deleteIcon: {
        marginRight: theme.spacing(2),
    }
}));