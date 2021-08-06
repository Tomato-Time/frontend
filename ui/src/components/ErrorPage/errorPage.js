import { Grid, Link, makeStyles } from "@material-ui/core";
import "./errorPage.css";


const useStyles = makeStyles((theme) => ({
      
    link: {
      margin: theme.spacing(4, 12, 2), //changes the position
      // alignItems: 'center',
      marginTop: theme.spacing(15),
      color: "#E3ECFF",
      font: "Montserrat"
    },
  }));
  
export default function ErrorPage(){

    const classes = useStyles();

    return(
        <div className="error-message">
            <h1> Page not Found </h1>
                <h2> We're sorry, we couldn't find the page you requested. </h2>

        
            <Grid container>
              <Grid item>
                <Link href="/login"  className={classes.link}>
                  Already have an account? Log in
                </Link>

                <Link href="/register"  className={classes.link}>
                Don't have an account? Register
              </Link>
              </Grid>
            </Grid>      
        </div>
    )
}