// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
// //   image: {
// //     // backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dreamsquote.com%2Fwp-content%2Fuploads%2F2018%2F05%2F45-Daily-Motivational-Quotes-Of-The-Day-4.jpg&f=1&nofb=1)',
// //     backgroundRepeat: 'no-repeat',
// //     backgroundColor:
// //       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
    
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '80%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   palette: {
//       primary:{
//         main:"#f00"
//       },
//       secondary: {
//           main: "#0f0"
//       }
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignInSide() {
//   const classes = useStyles();

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Log In
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Log in
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2" >
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
              
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }



//everything above is for testing stuff out 

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './loginForm.css'
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) =>({

      loginBox: {
          width: '50%',
          marginTop: theme.spacing(1),
          alignItems: 'center',
      }
   
}));


export default function SignInSide(){

  const classes = useStyles();
    
    return(

        <div className="login">
           <h1>Log In</h1>

          <div className={classes.loginBox}>
         <TextField        
            variant="filled"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            color="primary"
            autoFocus
            fullWidth
            underlineShow= {false}
        />
           <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            

          </div>

          <div className="forgotPassword">
            <Link href="#" >
            {"Forgot Password?"}  
            </Link>
            </div>
           

            <Button
              type="submit"
              width = "50px"
              variant="contained"
              color="secondary"
            >
              Log in
            </Button>

            <div className="registerLink">
              <Link href="#">
              {"Don't have an account? Register"}  
               </Link>
              {/* <h3>Don't have an account? Sign</h3> */}
            </div>
        
        </div>
       

        
    )

}