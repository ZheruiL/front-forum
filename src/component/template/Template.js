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

export default function Template (props = null) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const match = useRouteMatch()

  const toolbarList = []
  toolbarList.push({ text: 'Home', icon: HomeIcon })
  toolbarList.push({ text: 'Trending', icon: WhatshotIcon })
  toolbarList.push({ text: 'Newest topic', icon: NewReleasesIcon })
  toolbarList.push({ text: 'Attention', icon: AddAlertIcon })
  toolbarList.push({ text: 'Liked', icon: GradeIcon })

  const settingToolbarList = []
  settingToolbarList.push({ text: 'About', icon: InfoIcon })
  settingToolbarList.push({ text: 'Setting', icon: SettingsIcon })
  settingToolbarList.push({ text: 'Help', icon: HelpIcon })
  settingToolbarList.push({ text: 'Send feedback', icon: FeedbackIcon })
  // {props.isLoading === true ? <LinearProgress className={classes.linearProgress} /> : <div />}
  return (
    <div className={classes.root}>
      <LinearProgressComponent isLoading={props.isLoading} />
      <CssBaseline />
      <AppBar
        position='fixed'
        /* className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })} */
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={open === true ? handleDrawerClose : handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              /* [classes.hide]: open */
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            <Link to='' className={classes.link}>
              Forum
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          收回...
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
          {toolbarList.map((value, index) => (
            <ListItem button key={value.text}>
              <ListItemIcon><value.icon /></ListItemIcon>
              <ListItemText primary={value.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {settingToolbarList.map((value, index) => (
            <ListItem button key={value.text}>
              <ListItemIcon><value.icon /></ListItemIcon>
              <ListItemText primary={value.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div>
          {props.children}
        </div>
      </main>
    </div>
  )
}
// {props.isLoading === true ? <LinearProgressComponent isLoading={props.isLoading} /> : <LinearProgressComponent isLoading={props.isLoading} />}
