import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LinearProgress from '@material-ui/core/LinearProgress'
import LinearProgressComponent from '../template/LinearProgressComponent'

import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import AddAlertIcon from '@material-ui/icons/AddAlert'
import GradeIcon from '@material-ui/icons/Grade'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'
import FeedbackIcon from '@material-ui/icons/Feedback'
import InfoIcon from '@material-ui/icons/Info'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: 'grey',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    marginTop: 50,
    flexGrow: 1,
    padding: theme.spacing(3)
  },

  link: {
    color: 'white',
    textDecorationLine: 'none'
  }
}))

class TemplateComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { completed: 0, display: 'block' }
  }

  componentDidMount () {
    let t = 0
    this.LinearProgressBeginID = setInterval(
      () => {
        // console.log('props: ' + this.props.isLoading)
        if (this.props.isLoading === true) {
          // s = 0.5 g t2 :: v=gt
          // const Newcompleted = this.state.completed + 1
          t += 0.01
          let Newcompleted = 100000 * t * t
          if (Newcompleted >= 30) {
            Newcompleted = 30
          }
          this.setState({ completed: Newcompleted })
        } else {
          this.setState({ completed: 100 })
          setTimeout(() => { this.setState({ display: 'none' }) }, 500) // 完成后过0.5秒消失
          clearInterval(this.LinearProgressBeginID)
        }
      },
      10
    )
  }

  componentWillUnmount () {
    clearInterval(this.LinearProgressBeginID)
  }

  render () {
    const style = {
      display: this.state.display
    }

    return (
      <LinearProgress style={style} variant='determinate' value={this.state.completed} />
    )
  }
}

export default TemplateComponent