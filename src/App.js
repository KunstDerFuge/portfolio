import React, { useEffect } from 'react'
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Avatar, Typography, Paper } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    profileCard: {
      margin: theme.spacing(5),
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: theme.spacing(1),
      marginTop: theme.spacing(10)
    },
    profile: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      margin: theme.spacing(5),
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    textContainer: {
      margin: theme.spacing(5)
    },
    title: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"'
    },
    subTitle: {
      fontFamily: 'garamond-premier-pro, serif',
      fontStyle: 'italic',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"'
    },
    projects: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    sectionPaper: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
    },
    header: {
      fontFamily: 'garamond-premier-pro, serif',
      fontStyle: 'italic',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig", "swsh"'
    },
    subHeader: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"'
    },
    ornament: {
      fontFamily: 'garamond-premier-pro, serif',
      margin: '15vh'
    },
    bioHeader: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      marginTop: '10vh'
    },
    bioSubHeader: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"'
    },
    bio: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      marginTop: theme.spacing(15),
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '1.4em',
      width: '60vw'
    },
    bioLast: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      marginTop: theme.spacing(2),
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '1.4em',
      width: '60vw'
    },
    projectBody: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontSize: '1.4em',
      paddingTop: theme.spacing(2)
    },
    timeline: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontStyle: 'italic',
      fontSize: '1.2em'
    },
    gif: {
      maxWidth: '700px',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    descriptionContainer: {},
    technology: {
      display: 'table-cell',
      marginTop: 'auto'
    },
    technologyHeader: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig", "swsh"',
      fontStyle: 'italic',
      paddingTop: theme.spacing(2)
    },
    technologyItem: {
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontSize: '1.3em',
      marginLeft: theme.spacing(2),
      width: '100%'
    },
    spacer: {
      display: 'table-cell',
      height: 'auto'
    },
    button: {
      margin: theme.spacing(0.5)
    },
    imageButton: {
      marginTop: theme.spacing(2)
    },
    topHeader: {
      borderRadius: 0,
      backgroundColor: '#444',
      height: theme.spacing(10)
    },
    headerGrid: {
      height: '100%'
    },
    link: {
      color: '#fff',
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig", "swsh"',
      fontStyle: 'italic',
      fontSize: '1.5em',
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    }
  })
)

function App () {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = theme.breakpoints.down('sm')
  const [avatarElevation, setAvatarElevation] = React.useState(0)
  useEffect(() => {
    let avatarFloatInterval = setInterval(() => {
      if (avatarElevation < 16) {
        setAvatarElevation(16)
      } else {
        setAvatarElevation(10)
      }
    }, 750)
    return () => clearInterval(avatarFloatInterval)
  })
  return (
    <Grid container className={classes.root} alignItems='space-around' direction='column'>
      <Paper className={classes.topHeader}>
        <Grid container className={classes.headerGrid} alignItems='center'>
          <Grid item container justify='center'>
            <Link className={classes.link}
                  href='Robert-Amour-resume.pdf'>Resume</Link>
            <Link className={classes.link} href='#bio'>Bio</Link>
            <Link className={classes.link} href='#projects'>Projects</Link>
          </Grid>
        </Grid>
      </Paper>
      <Grid item container alignContent='center'>
        <Paper elevation={avatarElevation} className={classes.profileCard}>
          <Grid item>
            <Avatar className={classes.profile} variant='circle' src='profile.jpg' />
          </Grid>
          <Grid item className={classes.textContainer}>
            <Typography className={classes.title} variant='h3' align='center'>
              Robert Amour
            </Typography>
            <Typography className={classes.subTitle} variant='h5' align='center'>
              Full Stack Developer
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item id='bio'>
        <Typography className={classes.bioHeader} align='center' variant='h2'>
          Hi! I'm Robert (or Bobby).
        </Typography>
        <Typography className={classes.bioSubHeader} align='center' variant='h5'>
          I like playing piano, cooking, baking, and making awesome software.
        </Typography>
        <Grid item alignContent='center'>
          <Typography className={classes.bio} align='center'>
            I originally spent a few years pursuing a degree in music, before deciding my interest in computer science
            and programming was more than just a hobby. A few toy projects and one Barnes-Hut N-body simulator later, I
            decided to pursue programming with a renewed vigor.
          </Typography>
          <Typography className={classes.bioLast} align='center'>
            I love simple, functional design with great UX.
          </Typography>
          <Typography className={classes.ornament} align='center' variant='h2'>
            ❦
          </Typography>
        </Grid>
      </Grid>
      <Grid id='projects' item container direction='column' className={classes.projects}>
        <Typography className={classes.header} variant='h3' align='center'>
          Projects:
        </Typography>
        <Paper elevation={4} className={classes.sectionPaper}>
          <Grid item container direction='row'>
            <Grid item container sm={12} md={6} alignItems='stretch' className={classes.descriptionContainer}>
              <Grid item container>
                <Grid item>
                  <Typography className={classes.subHeader} variant='h4'>
                    Typometry
                  </Typography>
                  <Typography className={classes.timeline}>
                    October 2018 - present
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title='Typometry.io'>
                    <IconButton target='_blank' href='https://typometry.io'>
                      <LinkIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Check it out on Github'>
                    <IconButton target='_blank' href='https://github.com/KunstDerFuge/typometry'>
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Typography variant='body1' className={classes.projectBody}>
                Typometry is a web app for improving typing speed at all levels by assessing typing characteristics and
                seamlessly delivering personalized exercises.
              </Typography>
              <Grid item className={classes.spacer} />
              <Grid item className={classes.technology}>
                <Typography className={classes.technologyHeader} variant='h5'>
                  Frontend:
                </Typography>
                <Typography className={classes.technologyItem} variant='subtitle1'>
                  React
                </Typography>
                <Typography className={classes.technologyHeader} variant='h5'>
                  Backend:
                </Typography>
                <Typography className={classes.technologyItem} variant='subtitle1'>
                  Django
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <img src='typometry.gif' alt='Animated GIF of typing practice with Typometry' className={classes.gif} />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={4} className={classes.sectionPaper}>
          <Grid item container direction='row'>
            <Grid item container sm={12} md={6} alignItems='stretch' className={classes.descriptionContainer}>
              <Grid item container>
                <Grid item>
                  <Typography className={classes.subHeader} variant='h4'>
                    eFerret
                  </Typography>
                  <Typography className={classes.timeline}>
                    December 2017 - present
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title='eFerret.io'>
                    <IconButton className={classes.button} target='_blank' href='https://eferret.io'>
                      <LinkIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Check it out on Github'>
                    <IconButton className={classes.button} target='_blank'
                                href='https://github.com/KunstDerFuge/eFerret-web-frontend'>
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <a target='_blank' href='https://play.google.com/store/apps/details?id=io.eferret.eferret'
                 rel="noopener noreferrer">
                <img className={classes.imageButton} alt='Get it on Google Play' src='google-play.png' />
              </a>
              <Typography variant='body1' className={classes.projectBody}>
                eFerret is a native Android app and modern web app (eFerret.io) for finding great deals and rare items
                on eBay. Utilizing live data from the eBay API, it notifies users of interesting items within seconds
                after they are posted.
              </Typography>
              <ul className={classes.technologyItem}>
                <li>1000+ installs on Google Play</li>
                <li>~ 75 daily active users, 250 monthly</li>
                <li>Drives over $450,000 in sales to eBay every year</li>
                <li>Processes ~1 million eBay API requests per day</li>
              </ul>
              <Grid item className={classes.technology}>
                <Typography className={classes.technologyHeader} variant='h5'>
                  Frontend:
                </Typography>
                <Typography className={classes.technologyItem} variant='subtitle1'>
                  React (web)
                </Typography>
                <Typography className={classes.technologyItem} variant='subtitle1'>
                  Java (Android)
                </Typography>
                <Typography className={classes.technologyHeader} variant='h5'>
                  Backend:
                </Typography>
                <Typography className={classes.technologyItem} variant='subtitle1'>
                  Django
                </Typography>
                <Typography className={classes.technologyItem}>
                  Celery / Redis task scheduling for push notification processing
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <img src='eferret.gif' alt='Animated GIF of the eFerret Android app' className={classes.gif} />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={4} className={classes.sectionPaper}>
          <Grid item container direction='row'>
            <Grid item container sm={12} md={6} alignItems='stretch' className={classes.descriptionContainer}>
              <Grid item container>
                <Grid item>
                  <Typography className={classes.subHeader} variant='h4'>
                    Heatwave (Freelance)
                  </Typography>
                  <Typography className={classes.timeline}>
                    April 2018 - present
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title='More info'>
                    <IconButton className={classes.button} target='_blank'
                                href='https://www.chrisrentsch.com/home/GW/setup'>
                      <LinkIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Check it out on Github'>
                    <IconButton className={classes.button} target='_blank'
                                href='https://github.com/rentcp/Heatwave'>
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Typography variant='body1' className={classes.projectBody}>
                "Project Heatwave" - A data-driven analysis of global warming using atmospheric radiation emission
                data from NASA's AIRS program. This project gathers and analyzes a large dataset from the NASA AIRS
                satellite using Pandas and Numpy. Heatwave is a fully open-source project by <a
                href='https://www.chrisrentsch.com' target='_blank' rel="noopener noreferrer">Chris Rentsch</a>.
              </Typography>
              <ul className={classes.technologyItem}>
                <li>Implemented major feature additions and bug fixes over the course of 14 months</li>
                <li>Resulted in several rehires by the client for additional features, fixes, and consultation.</li>
              </ul>
              <Grid item className={classes.technology}>
                <Typography className={classes.technologyHeader} variant='h5'>
                  Technologies used:
                </Typography>
                <Typography className={classes.technologyItem} variant='subtitle1'>
                  Python
                </Typography>
                <Typography className={classes.technologyItem} variant='subtitle1'>
                  Pandas
                </Typography>
                <Typography className={classes.technologyItem} variant='subtitle1'>
                  Numpy
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <img src='heatwave.gif' alt='Animated GIF of Heatwave being used from the command line'
                   className={classes.gif} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
