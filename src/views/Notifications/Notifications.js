import React, { useEffect, useState } from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllLimits, addNewLimits, addNotifications } from './action';

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
// @material-ui/icons
import AccessTime from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EcoIcon from '@material-ui/icons/Eco';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardIcon from 'components/Card/CardIcon.js';
import CardFooter from 'components/Card/CardFooter.js';
import Loader from 'components/Loader/Loader.js';
//Semantic Ui icons
import { Button, Icon } from 'semantic-ui-react';
import { Favorite } from '@material-ui/icons';
import SpeedIcon from '@material-ui/icons/Speed';
import { getAllCards } from '../Graphs/action';

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';
import warningSound from './Pacman-death-sound.mp3'; // Import your sound file

const useStyles = makeStyles(styles);

const Notifications = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.settingsReducer);
  const sensorInformation = useSelector((state) => state.dashboardReducer);
  const usersList = useSelector((state) => state.devicesListReducer);

  const cycle1User = usersList.currentCycle1User?.userName ?? 'User 1';
  const cycle2User = usersList.currentCycle2User?.userName ?? 'User 2';

  const [speedValue, setspeedValue] = useState([0, 45]);
  const [heartRate1Value, setheartRate1Value] = useState([50, 160]);
  const [heartRateValue, setheartRateValue] = useState([50, 160]);
  const [warningMessage, setWarningMessage] = useState([]);

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);

  const userOneSpeed = sensorInformation.cards.data1;
  const userOneHeart = sensorInformation.cards.data3;
  const userOneOxygen = sensorInformation.cards.data7;
  const userOneDistance = sensorInformation.cards.data5;

  const userTwoSpeed = sensorInformation.cards.data2;
  const userTwoHeart = sensorInformation.cards.data4;
  const userTwoDistance = sensorInformation.cards.data6;
  const userTwoOxygen = sensorInformation.cards.data8;

  const playWarningSound = (type) => {
    const audioHeartRate = new Audio(warningSound);

    if (type === "heart") {
      audioHeartRate.play();
    }
  }

  useEffect(() => {
    if (warningMessage.includes('User 1 High Heart Rate') || (warningMessage.includes('User 1 Low Heart Rate')) {
      playWarningSound('heart');
    }
  }, [warningMessage])

  useEffect(() => {
    dispatch(getAllLimits());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getAllCards());
      console.log("userOneHeart", userOneHeart);
      
      userOneHeart.map(item => {
        if(item.bpm > heartRate1Value[1]) {
          console.log("current", item.bpm , heartRate1Value[1]);
          setWarningMessage(prevMessages => {
            const updatedMessages = new Set([...prevMessages, 'User 1 High Heart Rate']);
          
            return Array.from(updatedMessages);
          });
        } else if (item.bpm < heartRate1Value[0]) {
          setWarningMessage(prevMessages => {
            const updatedMessages = new Set([...prevMessages, 'User 1 Low Heart Rate']);
          
            return Array.from(updatedMessages);
          });
        }
      })
  
    }, 8000);

    
    return () => clearInterval(interval);
  }, [dispatch, userOneHeart]);

  const limits = data.limits[0];

  const speedHandleChange = (event, newValue) => {
    setspeedValue(newValue);
    const temp = {
      speedLowerLimit: newValue[0],
      speedUpperLimit: newValue[1],
    };
    dispatch(addNewLimits(temp));
  };

  const heartRate1HandleChange = (event, newValue) => {
    setheartRate1Value(newValue);
  };

  const heartRateHandleChange = (event, newValue) => {
    setheartRateValue(newValue);
    const hum = {
      heartRateLowerLimit: newValue[0],
      heartRateUpperLimit: newValue[1],
    };
    dispatch(addNewLimits(hum));
  };

  const handleCloseWarning = () => {
    setWarningMessage([]);
  }

  const waterHandleChange = (event, newValue) => {
    setWaterValue(newValue);
    const water = {
      waterLowerLimit: newValue[0],
      waterUpperLimit: newValue[1],
    };
    dispatch(addNewLimits(water));
  };
  // console.log(speedValue,"temp");
  // console.log(heartRateValue,"hum");
  // console.log(waterValue,"water")

  if (data.loading) {
    return <Loader />
  }

  return (
    <div>
      {limits
        ? !data.loading && (
            <div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <Card key={'user1speedLimit'}>
                    <CardHeader color="info" stats icon>
                      <CardIcon color="info">
                        <SpeedIcon />
                      </CardIcon>
                      <p className={classes.cardCategory}>Speed Limit {cycle1User}</p>
                      <h3 className={classes.cardTitle}>
                        Recommended Values
                        <Slider
                          value={speedValue}
                          onChange={speedHandleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                        />
                      </h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <AccessTime />
                        updated your limits {limits.speedLowerLimit}
                        <small>km/h</small> - {limits.speedUpperLimit}
                        <small>km/h</small>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                    <CardHeader color="rose" stats icon>
                      <CardIcon color="rose">
                        <Favorite />
                      </CardIcon>
                      <p className={classes.cardCategory}>Heart Rate Limit User 1</p>
                      <h3 className={classes.cardTitle}>
                        Recommended Values
                        <Slider
                          min={40}
                          max={240}
                          value={heartRate1Value}
                          onChange={heartRate1HandleChange}
                          valueLabelDisplay="on"
                          aria-labelledby="range-slider"
                        />
                      </h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <AccessTime />
                        updated your limits {limits.heartRateLowerLimit} <small>bpm</small> -{' '}
                        {limits.heartRateUpperLimit} <small>bpm</small>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                    <CardHeader color="info" stats icon>
                      <CardIcon color="info">
                        <SpeedIcon />
                      </CardIcon>
                      <p className={classes.cardCategory}>Speed Limit User 2</p>
                      <h3 className={classes.cardTitle}>
                        Recommended Values
                        <Slider
                          value={speedValue}
                          onChange={speedHandleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                        />
                      </h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <AccessTime />
                        updated your limits {limits.speedLowerLimit}
                        <small>km/h</small> - {limits.speedUpperLimit}
                        <small>km/h</small>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                    <CardHeader color="rose" stats icon>
                      <CardIcon color="rose">
                        <Favorite />
                      </CardIcon>
                      <p className={classes.cardCategory}>Heart Rate Limit User 2</p>
                      <h3 className={classes.cardTitle}>
                        Recommended Values
                        <Slider
                          value={heartRateValue}
                          onChange={heartRateHandleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                        />
                      </h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <AccessTime />
                        updated your limits {limits.heartRateLowerLimit} <small>bpm</small> -{' '}
                        {limits.heartRateUpperLimit} <small>bpm</small>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          )
        : null}
      {warningMessage.length > 0 &&
        <div>
        {warningMessage.map(item => 
          <Button>{item}</Button>
        )}
        <Button onClick={handleCloseWarning}>Close</Button>
      </div>
      }
    </div>
  );
};
export default Notifications;
