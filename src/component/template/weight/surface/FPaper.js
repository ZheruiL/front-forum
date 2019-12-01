import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    /* margin: theme.spacing(3, 0) */
    marginTop: 15,
    marginBottom: 15
  }
}))

export function FPaper (props) {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography variant='h5' component='h3'>
        {props.title}
      </Typography>
      <Typography component='p'>
        {props.content}
      </Typography>
      {props.children}
    </Paper>
  )
}
