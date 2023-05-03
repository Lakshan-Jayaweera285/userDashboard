import React, { useEffect, useState} from 'react';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
//redux
import { useSelector, useDispatch } from "react-redux";
import {getAllCards } from "./action";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EcoIcon from '@material-ui/icons/Eco';
import { Favorite } from '@material-ui/icons';
import SpeedIcon from '@material-ui/icons/Speed';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Loader from "components/Loader/Loader.js";
//Semantic Ui icons
import { Icon } from "semantic-ui-react";



import {
  waterLevelChart,
  humidityChart,
  temparetureChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Dashboard = ()=> {
  const classes = useStyles();
  const dispatch =useDispatch();
  const data =useSelector((state)=>state.dashboardReducer);
  
  useEffect(() => {
    dispatch(getAllCards()); 
  },[dispatch]);

  const devicesData = data.cards.data1[0];
  const user1BicycleData = data.cards.data2;
 
  
  return (
    <div>
      {data.loading && 
        <div>
          <Loader/>
        </div>
      }
      {devicesData ?(!data.loading && 
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                  <SpeedIcon/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Bicycle Speed User 1</p>
                  <h3 className={classes.cardTitle}>
                    {devicesData.temperature}<small>km/h</small>
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated 5 seconds ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="rose" stats icon>
                  <CardIcon color="rose">
                    <Favorite/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Heart Rate User 1</p>
                  <h3 className={classes.cardTitle}>{devicesData.humidity}bpm</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated 10 seconds ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                  <SpeedIcon/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Bicycle Speed User 2</p>
                  <h3 className={classes.cardTitle}>
                    {devicesData.temperature}<small>km/h</small>
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated 5 seconds ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="rose" stats icon>
                  <CardIcon color="rose">
                    <Favorite/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Heart Rate User 2</p>
                  <h3 className={classes.cardTitle}>{devicesData.humidity}bpm</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated 10 seconds ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card chart>
                <CardHeader color="info">
                  <ChartistGraph
                    className="ct-chart"
                    data={{
                      labels: Array.from({length: Object.keys(user1BicycleData).length}, (_, i) => (i + 1)*5),
                      series: [user1BicycleData.map((item)=>item.speed)],
                    }}
                    type="Line"
                    options={waterLevelChart.options}
                    listener={waterLevelChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Speed Chart User 1</h4>
                  {/* <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                    </span>{" "}
                    increase in last 3 hours.
                  </p> */}
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> updated 90 seconds ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card chart>
                <CardHeader color="rose">
                  <ChartistGraph
                    className="ct-chart"
                    data={{
                      labels: devicesData.historyTimeInterval,
                      series: [devicesData.waterLevelHistory.split(',')],
                    }}
                    type="Line"
                    options={waterLevelChart.options}
                    listener={waterLevelChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Heart Rate Chart User 1</h4>
                  {/* <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                    </span>{" "}
                    increase in last 3 hours.
                  </p> */}
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> updated 90 seconds ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card chart>
                <CardHeader color="info">
                  <ChartistGraph
                    className="ct-chart"
                    data={{
                      labels: devicesData.historyTimeInterval,
                      series: [devicesData.waterLevelHistory.split(',')],
                    }}
                    type="Line"
                    options={waterLevelChart.options}
                    listener={waterLevelChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Speed Chart User 2</h4>
                  {/* <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                    </span>{" "}
                    increase in last 3 hours.
                  </p> */}
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> updated 90 seconds ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card chart>
                <CardHeader color="rose">
                  <ChartistGraph
                    className="ct-chart"
                    data={{
                      labels: devicesData.historyTimeInterval,
                      series: [devicesData.humidityHistory.split(',')],
                    }}
                    type="Line"
                    options={humidityChart.options}
                    responsiveOptions={humidityChart.responsiveOptions}
                    listener={humidityChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Heart Rate User 2</h4>
                  {/* <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 50%
                    </span>{" "}
                    increase in last 3 hours.
                  </p> */}
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> updated 90 seconds ago
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
export default Dashboard;