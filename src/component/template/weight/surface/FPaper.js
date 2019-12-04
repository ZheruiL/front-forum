// import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
import React from 'react'
// import Grid from '@material-ui/core/Grid'
import './FPaper.css'

/* const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 15,
    marginBottom: 15
  }
})) */
export function FPaper (props) {
  // const classes = useStyles()
  let className
  if (props.type === 'hover') {
    className = 'paper paper-hover'
  } else {
    className = 'paper'
  }
  return (
    <div className={className}>
      {/* <Grid container wrap='nowrap' spacing={2}>
        <Grid item> */}
      {props.children}
      {/*
        </Grid>
      </Grid> */}
    </div>
  )
}
