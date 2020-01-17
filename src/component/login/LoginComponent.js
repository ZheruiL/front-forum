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
import Template from '../template/Template'
import { FPaper } from '../template/weight/surface/FPaper'
import Swal from 'sweetalert2'
import ApiUser from '../../api/ApiUser'

const paperStyle = {
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const avatarStyle = {
  margin: 1,
  backgroundColor: 'red'
}

const formStyle = {
  width: '100%', // Fix IE 11 issue.
  marginTop: 1
}

const submitStyle = {
  margin: 3
}

export class LoginComponent extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      isLoading: true,
      email: '',
      password: '',
      message: null
    }
  }

  componentDidMount () {
    this.setState({ isLoading: false })
  }

  handleChange (event, name) {
    this.setState({ [name]: event.target.value })
  }

  handleSubmit (event) {
    let error = ''
    const user = { email: this.state.email, password: this.state.password }
    if (user.email === '') {
      error += 'email is required<br/>'
    }
    if (user.password === '') {
      error += 'password is required<br/>'
    }
    if (error !== '') {
      Swal.fire({
        title: 'Error!',
        html: error,
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    this.setState({ isLoading: true })
    ApiUser.login(user)
      .then(res => {
        console.log(res)
        // this.props.history.push('/')
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          html: 'email or password incorrect',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        this.setState({ isLoading: false })
        console.log(error)
      })
  }

  render () {
    return (
      <Template isLoading={this.state.isLoading}>
        <FPaper>
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div style={paperStyle}>
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Login
              </Typography>
              <form style={formStyle} noValidate>
                <TextField
                  onChange={(e) => this.handleChange(e, 'email')}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  onChange={(e) => this.handleChange(e, 'password')}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Remember me'
                />
                <Button
                  type='button'
                  fullWidth
                  variant='contained'
                  color='primary'
                  style={submitStyle}
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to='forgetPassword' variant='body2'>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to='/signup' variant='body2'>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8} />
          </Container>
        </FPaper>
      </Template>
    )
  }
}

export default LoginComponent
