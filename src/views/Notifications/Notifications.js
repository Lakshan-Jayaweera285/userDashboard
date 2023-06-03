import React, { useEffect, useState} from 'react';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
//redux
import { useSelector, useDispatch } from "react-redux";
import {getAllLimits,addNewLimits} from "./action";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EcoIcon from '@material-ui/icons/Eco';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Loader from "components/Loader/Loader.js";
//Semantic Ui icons
import { Icon } from "semantic-ui-react";
import { Favorite } from '@material-ui/icons';
import SpeedIcon from '@material-ui/icons/Speed';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Notifications = ()=> {
  const classes = useStyles();
  const dispatch =useDispatch();
  const data =useSelector((state)=>state.settingsReducer);

  useEffect(() => {
    dispatch(getAllLimits()); 
  },[dispatch]);
  const limits = data.limits[0];
 // console.log(limits,"limits")

  const [speedValue, setspeedValue] = useState([0,45]);
  const [heartRateValue, setheartRateValue] = useState([50, 160]);
  
 
  
  
  

  const speedHandleChange = (event, newValue) => {
    setspeedValue(newValue);
    const temp = {
      speedLowerLimit : newValue[0],
      speedUpperLimit : newValue[1]
    }
    dispatch(addNewLimits(temp))  
  };
  const heartRateHandleChange = (event, newValue) => {
    setheartRateValue(newValue);
    const hum = {
      heartRateLowerLimit : newValue[0],
      heartRateUpperLimit : newValue[1]
    }
    dispatch(addNewLimits(hum))  
  };
  const waterHandleChange = (event, newValue) => {
    setWaterValue(newValue);
    const water = {
      waterLowerLimit : newValue[0],
      waterUpperLimit : newValue[1]
    }
    dispatch(addNewLimits(water))  
  };
  // console.log(speedValue,"temp");
  // console.log(heartRateValue,"hum");
  // console.log(waterValue,"water")
  
  return (
    <div>
      {data.loading && <div>
          <Loader/>
        </div>
      }
      {limits ?(!data.loading && 
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <SpeedIcon/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Speed Limit User 1</p>
                  <h3 className={classes.cardTitle}>
                    Recommended Values
                    <Slider
                      value={speedValue}
                      onChange={speedHandleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      valueLabelDisplay="on"
                    />
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated your limits  {limits.speedLowerLimit}<small>km/h</small> - {limits.speedUpperLimit}<small>km/h</small>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardHeader color="rose" stats icon>
                  <CardIcon color="rose">
                    <Favorite/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Heart Rate Limit User 1</p>
                  <h3 className={classes.cardTitle}>
                    Recommended Values
                    <Slider
                        value={heartRateValue}
                        onChange={heartRateHandleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        valueLabelDisplay="on"
                      />
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated your limits  {limits.heartRateLowerLimit} <small>bpm</small>  -  {limits.heartRateUpperLimit} <small>bpm</small>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <SpeedIcon/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Speed Limit User 2</p>
                  <h3 className={classes.cardTitle}>
                    Recommended Values
                    <Slider
                      value={speedValue}
                      onChange={speedHandleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      valueLabelDisplay="on"
                    />
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated your limits  {limits.speedLowerLimit}<small>km/h</small> - {limits.speedUpperLimit}<small>km/h</small>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardHeader color="rose" stats icon>
                  <CardIcon color="rose">
                    <Favorite/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Heart Rate Limit User 2</p>
                  <h3 className={classes.cardTitle}>
                    Recommended Values
                    <Slider
                        value={heartRateValue}
                        onChange={heartRateHandleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        valueLabelDisplay="on"
                      />
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated your limits  {limits.heartRateLowerLimit} <small>bpm</small>  -  {limits.heartRateUpperLimit} <small>bpm</small>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      ):null }
  </div>

  );
}
export default Notifications;