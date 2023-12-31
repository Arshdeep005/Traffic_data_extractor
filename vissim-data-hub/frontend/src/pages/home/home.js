import React from "react";
import {Grid, Button, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import image from "../../icons/progress.jpeg";
import CircleIcon from '@mui/icons-material/Circle';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Login from "../../wrapperLogin/login";

import styles from "./home.module.css";



const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
}));
const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid rgba(207, 117, 0, 0.5)`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(240, 165, 0, 0.5)'
        : 'rgba(207, 117, 0, 0.5)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '2px solid rgba(240, 165, 0, 0.5)',
}));

export default class Home extends React.Component {
    target = 'Know your employees better.';
    counter = 0;
    wrapLoginOpen = () => {
        const element = document.getElementsByClassName(styles.loginWrapper);
        element[0].style.zIndex = '100';
    }
    wrapLoginClose = () => {
        const element = document.getElementsByClassName(styles.loginWrapper);
        element[0].style.zIndex = '-100';
    }
    type = () => {
        if(this.startType && this.counter <= this.target.length) {
            this.setState({quote: this.target.substring(0, this.counter)});
            this.counter += 1;
        } else {
            clearInterval(this.timerId);
        }
    }
    timerId = setInterval(this.type, 100);
    startType = false;
    constructor(props) {
        super(props);
        this.state = {
            quote:  '',
            expanded: 'panel1'
        };
    }
    render() {
        const handleChange = (panel) => (event, newExpanded) => {
            this.setState({
                expanded: newExpanded ? panel : false
            });
        };
        const qna = {
            'Q. Why can’t I register?' : 'Ans. Only admins can register new users. Kindly contact an admin.',
            'Q. Why do I get 404 for some pages?' : 'Ans. Pages have role-based access. If you try to access to page visible to admin then you get 404.',
            'Q. Why am I not a valid user?' : 'Ans. Tokens are valid only for one day. After its expiry, you need to log in again. This protects the security of the website.',
            'Q. How do date filters work?' : 'Ans. After specifying the start and end date, one can access and plot the data of that particular time frame. The graphs get dynamically updated.',
            'Q. What are the graphs showing?' : <>{'Of the two pie charts, one is shows the data for the "current day" or the selected filter range. While the second one shows data for the previous day and on selecting filtering fives null value.'}<br />{'The stack chart shows the data for the whole week in a stack bar graph. Each bar will represent one day.  Users can see the data of old weeks also through the filter. ONLY END DATE IS REQUIRED in this case.'}</>,
        };
        const listData = {
            'Employee :' : ['Better time management', 'Improves work-life balance', 'Never miss a deadline', 'Grow to greater heights in career'],
            'Employer :' : ['Get to know their employee better', 'Conserves resources', 'Make team more productive']
        };
        const userinfo = JSON.parse(sessionStorage.getItem("userInfo"));
        return (
            <>
                <div className={styles.loginWrapper}>
                    <Login onClose={this.wrapLoginClose}/>
                </div>
                <div>
                    <div className={styles.body}>
                        <Grid className={styles.container} container style={{ display: 'flex' }} alignContent={"center"} alignItems={"center"}>
                            <Grid item xs={12}>
                                <Grid container className={styles.messageContainer} padding={5}>
                                    <Grid item xs={1} sm={2} md={3}>
                                        {/* blank space */}
                                    </Grid>
                                    <Grid padding={3} item xs={10} sm={8} md={6} textAlign={'center'}>
                                        <ImageButton
                                        focusRipple
                                        key={"PicoPerformance"}
                                        style={{
                                            width: "100%",
                                        }}
                                        href="/"
                                        >
                                            <ImageSrc style={{ backgroundImage: `url(${image})` }} />
                                            <ImageBackdrop className="MuiImageBackdrop-root" />
                                            <Image>
                                                <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="#F4F4F4"
                                                sx={{
                                                    position: 'relative',
                                                    p: 4,
                                                    pt: 2,
                                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                                }}
                                                >
                                                {"Pico Performance"}
                                                <ImageMarked className="MuiImageMarked-root" />
                                                </Typography>
                                            </Image>
                                        </ImageButton>
                                    </Grid>
                                    <Grid item xs={0} sm={1} md={3}>
                                        {/* blank space */}
                                    </Grid>
                                    <Grid padding={3} item xs={12} textAlign={'center'} sx={{fontWeight: '600'}}>
                                        <i>{this.state.quote}</i>
                                    </Grid>
                                    <Grid padding={3} item xs={12} textAlign={'center'}>
                                        <Grid container>
                                            <Grid item xs={0} sm={3} md={4}>
                                                {/* empty space */}
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                {(userinfo === null || userinfo.authorized === undefined || userinfo.authorized === false) ? (
                                                    <Button className={styles.loginButton} variant="outlined" color="error" onClick={this.wrapLoginOpen}>
                                                        Login
                                                    </Button>
                                                ) : (
                                                    <Button className={styles.loginButton} variant="outlined" color="error" href="/dashboard">
                                                        Dashboard
                                                    </Button>
                                                )}
                                            </Grid>
                                            <Grid item xs={0} sm={3} md={4}>
                                                {/* empty space */}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid padding={3} item xs={12} textAlign={'center'}>
                                        <p style={{fontWeight: '600'}}>
                                            <i>
                                                What does it offer ?
                                            </i>
                                        </p>
                                    </Grid>
                                    <Grid padding={3} item xs={12} textAlign={'center'}>
                                        <Grid container padding={5} spacing={3}>
                                            <Grid className={styles.login} item xs={12} md={6}>
                                                {/* content part 1 */}
                                                The deadlines approach but the work progress stands still… Tired of seeing employees struggle at work? People are unable to manage time and resources while companies stand helpless. Millions are wasted on organizing workshops and hiring “motivators”. But what if there is a FREE and elegant solution to it?
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                {/* content part 2 */}
                                                Introducing PicoPerformance, a free task management and time analyzer tool. We provide you indepth information about the time break of the employee.
Fed up of numbers? We provide interactive and dynamic graphs for better visualization and comparison. Now the employee as well as the employer can improve on how they spend their time.
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid padding={3} item xs={0} md={2} lg={4} textAlign={'center'}>
                                            {/* white space */}
                                    </Grid>
                                    <Grid padding={3} sx={{width: '100%'}} item xs={12} md={8} lg={4} textAlign={'center'}>
                                        <p style={{fontWeight: '600'}}>
                                            <i>
                                                This serves both as
                                            </i>
                                        </p>
                                        <List>
                                            {
                                                Object.keys(listData).map((item, index) => {
                                                    return (
                                                        <ListItem key={`Title#${index}`}>
                                                            <List>
                                                                <ListItem sx={{width: '100%'}}>
                                                                    <ListItemIcon>
                                                                        <CircleIcon sx={{fontSize: 'small'}} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={item} />
                                                                </ListItem>
                                                                <ListItem>
                                                                    <List>
                                                                    {
                                                                        listData[item].map((lItem, index) => {
                                                                            return (
                                                                                <ListItem key={`listItem#${index}`} disablePadding style={{width: '100%', textAlign: 'right'}}>
                                                                                    <ListItemIcon>
                                                                                        <CropSquareIcon sx={{fontSize: 'x-small'}} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary={lItem} />
                                                                                </ListItem>
                                                                            );
                                                                        })
                                                                    }
                                                                    </List>
                                                                </ListItem>
                                                            </List>
                                                        </ListItem>
                                                    );
                                                })
                                            }
                                        </List>
                                    </Grid>
                                    <Grid padding={3} item xs={0} md={2} lg={4} textAlign={'center'}>
                                            {/* white space */}
                                    </Grid>
                                    <Grid padding={3} item xs={0} md={2} lg={4} textAlign={'center'}>
                                            {/* white space */}
                                    </Grid>
                                    <Grid padding={3} sx={{width: '100%'}} item xs={12} md={8} lg={4} textAlign={'center'}>
                                        <Grid container maxWidth={true} sx={{textAlign: 'center'}} alignContent={'center'} alignItems={'center'}>
                                            <Grid item xs={12} sx={{textAlign: 'center', fontWeight: '600'}} padding={2}>
                                                <i>QNA</i>
                                            </Grid>
                                            <Grid item xs={12} padding={3}>
                                                {
                                                    Object.keys(qna).map((item, index) => {
                                                        return (
                                                            <Accordion expanded={this.state.expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                                                                <AccordionSummary aria-controls={`panel${index + 1}d$-content`} id={`panel${index + 1}d-header`}>
                                                                <Typography>{item}</Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                <Typography>
                                                                    {qna[item]}
                                                                </Typography>
                                                                </AccordionDetails>
                                                            </Accordion>
                                                        );
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid padding={3} item xs={0} md={2} lg={4} textAlign={'center'}>
                                            {/* white space */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </>
        );
    }
    componentDidMount() {
        this.startType = true;
    }
}
