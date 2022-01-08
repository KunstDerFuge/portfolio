import React, {useEffect} from 'react'
import {createStyles, makeStyles, useTheme} from '@material-ui/core/styles'
import {Grid, Avatar, Typography, Paper, Theme} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.primary.background
    },
    profileCard: {
      backgroundColor: theme.palette.primary.paper,
      margin: theme.spacing(5),
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: theme.spacing(1),
      marginTop: theme.spacing(10),
      transition: 'box-shadow 1000ms cubic-bezier(.45,.05,.55,.95) 0ms'
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
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontDisplay: 'swap'
    },
    subTitle: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontStyle: 'italic',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontDisplay: 'swap'
    },
    projects: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    sectionPaper: {
      backgroundColor: theme.palette.primary.paper,
      margin: theme.spacing(5)
    },
    header: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontStyle: 'italic',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig", "swsh"',
      fontDisplay: 'swap'
    },
    subHeader: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontDisplay: 'swap'
    },
    ornament: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontDisplay: 'swap',
      margin: '15vh'
    },
    bioHeader: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontDisplay: 'swap',
      marginTop: '10vh',
      marginBottom: theme.spacing(2)
    },
    bioSubHeader: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontDisplay: 'swap'
    },
    bio: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontDisplay: 'swap',
      marginTop: theme.spacing(15),
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '1.4em',
      width: '60vw'
    },
    bioLast: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontDisplay: 'swap',
      marginTop: theme.spacing(2),
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '1.4em',
      width: '60vw'
    },
    projectBody: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontSize: '1.4em',
      fontDisplay: 'swap',
      paddingTop: theme.spacing(2)
    },
    timeline: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontStyle: 'italic',
      fontSize: '1.2em',
      fontDisplay: 'swap'
    },
    gif: {
      maxWidth: '700px',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      borderRadius: theme.spacing(2)
    },
    descriptionContainer: {
      padding: theme.spacing(3)
    },
    technology: {
      display: 'table-cell',
      marginTop: 'auto'
    },
    technologyHeader: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig", "swsh"',
      fontStyle: 'italic',
      fontDisplay: 'swap',
      paddingTop: theme.spacing(2)
    },
    technologyItem: {
      color: theme.palette.primary.contrastText,
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig"',
      fontSize: '1.3em',
      fontDisplay: 'swap',
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
    footer: {
      borderRadius: 0,
      backgroundColor: '#444',
      height: theme.spacing(30),
      boxShadow: 10
    },
    link: {
      color: '#fff',
      fontFamily: 'garamond-premier-pro, serif',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"liga", "clig", "swsh"',
      fontStyle: 'italic',
      fontSize: '1.5em',
      fontDisplay: 'swap',
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    bodyLink: {
      color: theme.palette.primary.bodyLink
    },
    darkThemeText: {
      color: theme.palette.primary.purpleText,
      cursor: 'pointer',
      textDecoration: theme.textDecoration.purpleText
    }
  })
)

function App(props) {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = theme.breakpoints.down('sm')
  const [avatarElevation, setAvatarElevation] = React.useState(0)
  useEffect(() => {
    let avatarFloatInterval = setInterval(() => {
      if (avatarElevation < 18) {
        setAvatarElevation(18)
      } else {
        setAvatarElevation(10)
      }
    }, 1000)
    return () => clearInterval(avatarFloatInterval)
  })
  return (
    <Grid container className={classes.root} alignItems="space-around" direction="column">
      <Paper className={classes.topHeader} elevation={6}>
        <Grid container className={classes.headerGrid} alignItems="center">
          <Grid item container justify="center">
            <Link className={classes.link}
                  href="Robert-Amour-resume.pdf">Resume</Link>
            <Link className={classes.link} href="#bio">Bio</Link>
            <Link className={classes.link} href="#projects">Projects</Link>
          </Grid>
        </Grid>
      </Paper>
      <Grid item container alignContent="center">
        <Paper elevation={avatarElevation} className={classes.profileCard}>
          <Grid item>
            <Avatar alt="Robert Amour" className={classes.profile} variant="circle" src="profile.jpg"/>
          </Grid>
          <Grid item className={classes.textContainer}>
            <Typography className={classes.title} variant="h3" align="center">
              Robert Amour
            </Typography>
            <Typography className={classes.subTitle} variant="h5" align="center">
              Full Stack Developer
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item id="bio">
        <Typography className={classes.bioHeader} align="center" variant="h2">
          Hi! I'm Robert (or Bobby).
        </Typography>
        <Typography className={classes.bioSubHeader} align="center" variant="h5">
          I like playing piano, cooking, baking, and making awesome software.
        </Typography>
        <Grid item alignContent="center">
          <Typography className={classes.bio} align="center">
            I spent a few years pursuing a degree in music before deciding my interest in computer science
            and programming was more than just a hobby. A few toy projects and one Barnes-Hut N-body simulator later, I
            decided to pursue programming with a renewed vigor.
          </Typography>
          <Typography className={classes.bioLast} align="center">
            I love simple, functional design with great UX — and I believe everything needs a <span
            className={classes.darkThemeText} onClick={props.darkThemeSwitch}>dark theme</span>.
          </Typography>
          <Typography className={classes.ornament} align="center" variant="h2">
            ❦
          </Typography>
        </Grid>
      </Grid>
      <Grid id="projects" item container direction="column" className={classes.projects}>
        <Typography className={classes.header} variant="h3" align="center">
          Projects:
        </Typography>
        <Paper elevation={4} className={classes.sectionPaper}>
          <Grid item container direction="row">
            <Grid item container sm={12} md={6} alignItems="stretch" className={classes.descriptionContainer}>
              <Grid item container>
                <Grid item>
                  <Typography className={classes.subHeader} variant="h4">
                    Typometry
                  </Typography>
                  <Typography className={classes.timeline}>
                    October 2018 - present
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title="Typometry.io">
                    <IconButton target="_blank" rel="noreferrer" href="https://typometry.io">
                      <LinkIcon/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Check it out on Github">
                    <IconButton target="_blank" rel="noreferrer" href="https://github.com/KunstDerFuge/typometry">
                      <GitHubIcon/>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.projectBody}>
                  Typometry is a web app for improving typing speed at all levels by assessing typing characteristics
                  and seamlessly delivering personalized exercises.
                </Typography>
                <Typography variant="body1" className={classes.projectBody}>
                  Typometry is my attempt at hacking touch typing. As the backend receives granular typing data,
                  simple, corrective exercises are generated in realtime to fix the "weakest link" in the user's typing
                  technique. This way, a typist with a non-traditional typing style does not have to start from scratch
                  learning which fingers go where.
                </Typography>
              </Grid>
              <Grid item className={classes.technology}>
                <Typography className={classes.technologyHeader} variant="h5">
                  Frontend:
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  React
                </Typography>
                <Typography className={classes.technologyHeader} variant="h5">
                  Backend:
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Django + Postgres
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <video autoPlay loop muted className={classes.gif} src={
                theme.palette.type === 'dark' ?
                  'typometry-dark.webm'
                  :
                  'typometry.webm'
              }/>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={4} className={classes.sectionPaper}>
          <Grid item container direction="row">
            <Grid item container sm={12} md={6} alignItems="stretch" className={classes.descriptionContainer}>
              <Grid item container>
                <Grid item>
                  <Typography className={classes.subHeader} variant="h4">
                    “Where in the World is Q? Clues from Image Metadata”
                  </Typography>
                  <Typography className={classes.timeline}>
                    January 2021 - May 2021
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title="See the article">
                    <IconButton className={classes.button} target="_blank" rel="noreferrer"
                                href="https://www.bellingcat.com/news/rest-of-world/2021/05/10/where-in-the-world-is-q-clues-from-image-metadata/">
                      <LinkIcon/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Check it out on Github">
                    <IconButton className={classes.button} target="_blank" rel="noreferrer"
                                href="https://github.com/abigailxyzw/image-metadata">
                      <GitHubIcon/>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Typography variant="body1" className={classes.projectBody}>
                As part of the <a href="https://twitter.com/QOrigins/" target="_blank" rel="noreferrer"
                                  className={classes.bodyLink}>Q Origins
                Project</a>, I helped discover the first forensic evidence of the whereabouts, and thus identity, of
                “Q”, the anonymous online persona behind the <a href="https://en.wikipedia.org/wiki/QAnon"
                                                                target="_blank" rel="noreferrer"
                                                                className={classes.bodyLink}>QAnon</a> conspiracy
                theory.
              </Typography>
              <Typography variant="body1" className={classes.projectBody}>
                Along with a professional data scientist and a QAnon subject matter expert, I participated in an
                in-depth investigation of metadata on images posted by the anonymous imageboard user “Q” who had been
                gaining an increasingly alarming grip on U.S. politics since 2018.
              </Typography>
              <Typography variant="body1" className={classes.projectBody}>
                Our investigation successfully located Q's activity to several known time zones including Pacific and
                UTC+8 (Asia), greatly narrowing down the pool of potential suspects. Subsequently, the investigation was
                published by Bellingcat, who style themselves as an “An Intelligence Agency for the People” and publish
                open source investigations impacting world geopolitics.
              </Typography>
              <ul className={classes.technologyItem}>
                <li>Worked as part of a three-person team who made this discovery and wrote up our findings</li>
                <li>Created data visualizations telling the story of our data</li>
              </ul>
              <Grid item className={classes.technology}>
                <Typography className={classes.technologyHeader} variant="h5">
                  Technologies used:
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Python
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Pandas
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  React + d3 (for the interactive dataviz, visible <a
                  href="https://bellingcat.github.io/q-image-metadata-viz/" target="_blank" rel="noreferrer"
                  className={classes.bodyLink}>here</a>;
                  source&nbsp;
                  <a href="https://github.com/KunstDerFuge/q-interactive-scatterplot" target="_blank"
                     rel="noreferrer" className={classes.bodyLink}>here</a>)
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <img src="q-metadata-viz.png" className={classes.gif}/>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={4} className={classes.sectionPaper}>
          <Grid item container direction="row">
            <Grid item container sm={12} md={6} alignItems="stretch" className={classes.descriptionContainer}>
              <Grid item container>
                <Grid item>
                  <Typography className={classes.subHeader} variant="h4">
                    dChan - Q Origins Project archives
                  </Typography>
                  <Typography className={classes.timeline}>
                    June 2021 - present
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title="Visit the archives (content warning)">
                    <IconButton className={classes.button} target="_blank" rel="noreferrer"
                                href="https://dchan.qorigins.org/">
                      <LinkIcon/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Check it out on Github">
                    <IconButton className={classes.button} target="_blank" rel="noreferrer"
                                href="https://github.com/KunstDerFuge/dChan">
                      <GitHubIcon/>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Typography variant="body1" className={classes.projectBody}>
                On behalf of the <a href="https://twitter.com/QOrigins/" target="_blank" rel="noreferrer"
                                    className={classes.bodyLink}>Q Origins
                Project</a>, I created the largest archive of <a href="https://en.wikipedia.org/wiki/QAnon"
                                                                 target="_blank" rel="noreferrer"
                                                                 className={classes.bodyLink}>QAnon</a> content that
                exists today. With over 14,000,000 posts from the Q boards on 4chan, 8chan, and 8kun (Reddit data coming
                soon), this archive provides much-needed data to extremism experts, researchers, and scholars of this
                underrepresented field.
              </Typography>
              <Typography variant="body1" className={classes.projectBody}>
                Utilizing specialized Scrapy spiders, the project automatically scrapes relevant content from 8kun in
                realtime, providing vital insights on online extremism. Posts are saved in a Postgres database and
                processed into an Elasticsearch index for rapid search and <a
                href="https://dchan.qorigins.org/timeseries/" target="_blank" rel="noreferrer"
                className={classes.bodyLink}>time series analysis</a>.
              </Typography>
              <ul className={classes.technologyItem}>
              </ul>
              <Grid item className={classes.technology}>
                <Typography className={classes.technologyHeader} variant="h5">
                  Technologies used:
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Python / Django
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Scrapy
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Pandas
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  React + d3
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <img src="timeseries.png" className={classes.gif}/>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={4} className={classes.sectionPaper}>
          <Grid item container direction="row">
            <Grid item container sm={12} md={6} alignItems="stretch" className={classes.descriptionContainer}>
              <Grid item container>
                <Grid item>
                  <Typography className={classes.subHeader} variant="h4">
                    eFerret
                  </Typography>
                  <Typography className={classes.timeline}>
                    December 2017 - present
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title="eFerret.io">
                    <IconButton className={classes.button} target="_blank" rel="noreferrer" href="https://eferret.io">
                      <LinkIcon/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Check it out on Github">
                    <IconButton className={classes.button} target="_blank" rel="noreferrer"
                                href="https://github.com/KunstDerFuge/eFerret-web-frontend">
                      <GitHubIcon/>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <a target="_blank" href="https://play.google.com/store/apps/details?id=io.eferret.eferret"
                 rel="noopener noreferrer">
                <img className={classes.imageButton} alt="Get it on Google Play" src="google-play.png"/>
              </a>
              <Typography variant="body1" className={classes.projectBody}>
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
                <Typography className={classes.technologyHeader} variant="h5">
                  Frontend:
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  React + Typescript (web)
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Java (Android)
                </Typography>
                <Typography className={classes.technologyHeader} variant="h5">
                  Backend:
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Django + Postgres + Django Rest Framework
                </Typography>
                <Typography className={classes.technologyItem}>
                  Celery / Redis task scheduling for push notification processing
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <video autoPlay loop muted className={classes.gif}>
                <source src="eferret.webm" type="video/webm"/>
              </video>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={4} className={classes.sectionPaper}>
          <Grid item container direction="row">
            <Grid item container sm={12} md={6} alignItems="stretch" className={classes.descriptionContainer}>
              <Grid item container>
                <Grid item>
                  <Typography className={classes.subHeader} variant="h4">
                    Heatwave (Freelance)
                  </Typography>
                  <Typography className={classes.timeline}>
                    April 2018 - present
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title="More info">
                    <IconButton className={classes.button} target="_blank" rel="noreferrer"
                                href="https://www.chrisrentsch.com/home/GW/setup">
                      <LinkIcon/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Check it out on Github">
                    <IconButton className={classes.button} target="_blank" rel="noreferrer"
                                href="https://github.com/rentcp/Heatwave">
                      <GitHubIcon/>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Typography variant="body1" className={classes.projectBody}>
                "Project Heatwave" - A data-driven analysis of global warming using atmospheric radiation emission
                data from NASA's AIRS program. This project gathers and analyzes a large dataset from the NASA AIRS
                satellite using Pandas and Numpy. Heatwave is a fully open-source project by <a
                href="https://www.chrisrentsch.com" target="_blank" rel="noopener noreferrer"
                className={classes.bodyLink}>Chris Rentsch</a>.
              </Typography>
              <ul className={classes.technologyItem}>
                <li>Implemented major feature additions and bug fixes over the course of 14 months</li>
                <li>Resulted in several rehires by the client for additional features, fixes, and consultation.</li>
              </ul>
              <Grid item className={classes.technology}>
                <Typography className={classes.technologyHeader} variant="h5">
                  Technologies used:
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Python
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Pandas
                </Typography>
                <Typography className={classes.technologyItem} variant="subtitle1">
                  Numpy
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <video autoPlay loop muted className={classes.gif}>
                <source src="heatwave.webm" type="video/webm"/>
              </video>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Paper className={classes.footer} elevation={6}>
        <Grid container className={classes.headerGrid} alignItems="center">
          <Grid item container justify="center">
            <Link className={classes.link}
                  href="https://github.com/KunstDerFuge">Github</Link>
            <Link className={classes.link} href="https://www.linkedin.com/in/robert-amour-5716b3105/">LinkedIn</Link>
            <Link className={classes.link} href="Robert-Amour-resume.pdf">Resume</Link>
          </Grid>
          <Grid item container justify="center">
            <Link className={classes.link} href="#">Back to top</Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default App
