import React from 'react'
import { withStyles } from "@material-ui/core";

// withStyles & makeStyles
// define CSS source with JSS
const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    // console.log('in SideMenu classes',classes)
    return (
        <div className={classes.sideMenu}>

        </div>
    )
}

export default withStyles(style)(SideMenu);
