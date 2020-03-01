import React, {Fragment} from 'react';
import Header from './Header';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { Grid } from "@material-ui/core";


const styles = {
  Paper: {
    padding: 20,
    height: "100vh"
  }
};
export default props => (
    <Fragment>
        <Header/>
        <Grid container>
            <Grid item xs>
            <LeftPane styles={styles} />
        </Grid>
        <Grid item xs>
            <RightPane styles={styles} />
        </Grid>
        </Grid>
    </Fragment>
);
