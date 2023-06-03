import React, { useEffect, useState } from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {getAllCards } from "./action";
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EcoIcon from '@material-ui/icons/Eco';
import { Favorite } from '@material-ui/icons';
import SpeedIcon from '@material-ui/icons/Speed';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardIcon from 'components/Card/CardIcon.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Loader from 'components/Loader/Loader.js';
//Semantic Ui icons
import { Icon } from 'semantic-ui-react';

import { speedChart, heartRateChart, waterLevelChart, humidityChart, temparetureChart } from 'variables/charts.js';

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';

const useStyles = makeStyles(styles);

const GraphsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboardReducer);

  console.log(data.cards);

  useEffect(() => {
    dispatch(getAllCards());
  },[dispatch]);

  // const devicesData = data.cards.data[0];
  const userOneSpeed = data.cards.data1;
  const userTwoSpeed = data.cards.data2;
  const userOneHeart = data.cards.data3;
  const userTwoHeart = data.cards.data4;
  const userOneDistance = data.cards.data5;
  const userTwoDistance = data.cards.data6;
  const userOneOxygen = data.cards.data7;
  const userTwoOxygen = data.cards.data8;
  // console.log(userOneBicycleData[0]);

  return (
    <div>
      {data.loading && (
        <div>
          <Loader />
        </div>
      )}
      {userOneSpeed.length
        ? !data.loading && (
            <div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="info" stats icon>
                      <CardIcon color="info">
                        <SpeedIcon />
                      </CardIcon>
                      <p className={classes.cardCategory}>Bicycle Speed User 1</p>
                      <h3 className={classes.cardTitle}>
                        {userOneSpeed[0].speed}
                        <small>km/h</small>
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
                        <Favorite />
                      </CardIcon>
                      <p className={classes.cardCategory}>Heart Rate User 1</p>
                      <h3 className={classes.cardTitle}>{userOneHeart[0].bpm}bpm</h3>
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
                        <SpeedIcon />
                      </CardIcon>
                      <p className={classes.cardCategory}>Bicycle Speed User 2</p>
                      <h3 className={classes.cardTitle}>
                        {userTwoSpeed[0].speed}
                        <small>km/h</small>
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
                        <Favorite />
                      </CardIcon>
                      <p className={classes.cardCategory}>Heart Rate User 2</p>
                      <h3 className={classes.cardTitle}>{userTwoHeart[0].bpm}bpm</h3>
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
                          labels: Array.from({ length: Object.keys(userOneSpeed).length }, (_, i) => (i + 1) * 5),
                          series: [userOneSpeed.map((item) => item.speed)],
                        }}
                        type="Line"
                        options={speedChart.options}
                        listener={speedChart.animation}
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
                        <AccessTime /> updated 30 seconds ago
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
                          labels: Array.from({ length: Object.keys(userOneHeart).length }, (_, i) => (i + 1) * 5),
                          series: [userOneHeart.map((item) => item.bpm)],
                        }}
                        type="Line"
                        options={heartRateChart.options}
                        listener={heartRateChart.animation}
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
                        <AccessTime /> updated 30 seconds ago
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
                          labels: Array.from({ length: Object.keys(userTwoSpeed).length }, (_, i) => (i + 1) * 5),
                          series: [userTwoSpeed.map((item) => item.speed)],
                        }}
                        type="Line"
                        options={speedChart.options}
                        listener={speedChart.animation}
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
                        <AccessTime /> updated 30 seconds ago
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
                          labels: Array.from({ length: Object.keys(userTwoHeart).length }, (_, i) => (i + 1) * 5),
                          series: [userTwoHeart.map((item) => item.bpm)],
                        }}
                        type="Line"
                        options={heartRateChart.options}
                        // responsiveOptions={humidityChart.responsiveOptions}
                        listener={heartRateChart.animation}
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
                        <AccessTime /> updated 30 seconds ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          )
        : null}
    </div>
  );
};

export default GraphsPage;
