import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {
  Link
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const paperStyle = {
  marginTop: '20%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}
const avatarStyle = {
  margin: 10,
  backgroundColor: 'red'
}
const formStyle = {
  width: '100%', // Fix IE 11 issue.
  marginTop: '10%'
}
const submitStyle = {
  marginTop: '5%',
  marginBottom: '5%'
}
export class SignupComponent extends React.Component {
  render () {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div style={paperStyle}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form style={formStyle} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='fname'
                  name='userName'
                  variant='outlined'
                  required
                  fullWidth
                  id='userName'
                  label='User Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='passwordConfirm'
                  label='Confirm password'
                  type='password'
                  id='passwordConfirm'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value='allowExtraEmails' color='primary' />}
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              style={submitStyle}
            >
              Sign Up
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link to='/login' variant='body2'>
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5} />
      </Container>
    )
  }
}

export default SignupComponent
