import { createMuiTheme } from '@material-ui/core';
import primary from '@material-ui/core/colors/blue';
import secondary from '@material-ui/core/colors/deepPurple';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: primary[700],
        },
        secondary: {
            main: secondary[400],
        },
        type: 'light',
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
        MuiButton: {
            disableElevation: true,
        },
    },
    typography: {
        fontFamily: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '4px',
            },
        },
        MuiPaper: {
            rounded: {
                borderRadius: '4px',
            },
        },
        MuiInputBase: {
            root: {
                borderRadius: '4px',
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: '4px',
            },
        },
    },
});
