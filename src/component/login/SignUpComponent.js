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
import Swal, { isLoading } from 'sweetalert2'
import ApiUser from "../../api/ApiUser"

const paperStyle = {
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
export class SignUpComponent extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      isLoading: true,
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      message: null
    }
  }

  componentDidMount () {
    this.setState({ isLoading: false })
  }

  handleChange (event, name) {
    this.setState({ [name]: event.target.value })
    // console.log(this.state)
  }

  handleSubmit (event) {
    let error = ''
    if(this.state.password !== this.state.passwordConfirm){
      error += 'Two input password must be consistent<br/>'
    }
    const user = { username: this.state.username, email: this.state.email, password: this.state.password }
    // console.log(topic)
    if (user.username === '') {
      error += 'username is required<br/>'
    }
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
    ApiUser.register(user)
      .then(res => {
        console.log(res);
        this.props.history.push('/')
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
                Sign up
              </Typography>
              <form style={formStyle} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => this.handleChange(e, 'username')}
                      autoComplete='username'
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
                      onChange={(e) => this.handleChange(e, 'email')}
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
                      onChange={(e) => this.handleChange(e, 'password')}
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
                      onChange={(e) => this.handleChange(e, 'passwordConfirm')}
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
                  type='button'
                  fullWidth
                  variant='contained'
                  color='primary'
                  style={submitStyle}
                  onClick={this.handleSubmit}
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
        </FPaper>
      </Template>
    )
  }
}

export default SignUpComponent
