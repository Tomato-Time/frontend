import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles,alpha,StylesProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../Components/Registration.css';
// import { withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    marginTop: theme.spacing(8),
    width: '50ch',
    borderRadius: 50,
  },

  submit: {
    margin: theme.spacing(4, 19, 2), //changes the position 
    alignItems: 'center',
    backgroundColor: '#3D68DE',
    
  },

  link: {
    margin: theme.spacing(4, 13, 2), //changes the position 
    // alignItems: 'center',
    marginTop: theme.spacing(15),
    color: '#E3ECFF'
     
  },


  fnameInput: {
    borderRadius: 7,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    right: 50,
    // width: 'auto',
    width: 260,
    height: 44,
    padding: '10px 12px',
    fontFamily: [
      '"Montserrat"', //our font 
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },

  lnameInput: {
    borderRadius: 7,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    left: 0,
    // width: 'auto',
    width: 260,
    height: 44,
    padding: '10px 12px',
    fontFamily: [
      '"Montserrat"', //our font 
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },

  longInput: {
    borderRadius: 7,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    right: 50,
    // width: 'auto',
    width: 537,
    height: 44,
    padding: '10px 12px',
    fontFamily: [
      '"Montserrat"', //our font from figma
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },

}));

export default function Registration() {
  const classes = useStyles();

  return (
    <StylesProvider injectFirst> 
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Create Account
        </Typography>

        {/* FIRST NAME */}
        <form className={classes.form} noValidate >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

              {/* <fnameInput
              className={classes.inputBase}
              /> */}

              <TextField
            className={classes.fnameInput}
                autoComplete="fname"
                name="firstName"
                // variant="filled"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

             {/* LAST NAME */}
            <Grid item xs={12} sm={6}>
              <TextField
              className={classes.lnameInput}
                // variant="filled"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

             {/* EMAIL */}
            <Grid item xs={12}>
              <TextField
              className={classes.longInput}
              // variant="filled"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

             {/* PASSWORD */}
            <Grid item xs={12}>
              <TextField
                className={classes.longInput}
                // variant="filled"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

          {/* REGISTER BUTTON */}
          </Grid>
          <Button
            type="submit"
            width = "50px"
            variant="contained"
            color="primary"
            
            className={classes.submit}
          >
            Register
          </Button>

          {/* LOGIN LINK */}
          <div className="loginLink"></div>
          <Grid container >
            <Grid item>
              <Link href="#" variant="body2"
              className={classes.link}>
                Already have an account? Sign in

              </Link>
            </Grid>
        
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    </StylesProvider>
  );
}
