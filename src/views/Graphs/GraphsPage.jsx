import React, { useEffect } from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllCards } from './action';
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Loader from 'components/Loader/Loader.js';

import { speedChart, heartRateChart, oxygenRateChart } from 'variables/charts.js';

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';

const useStyles = makeStyles(styles);

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboardReducer);
  const usersList = useSelector((state) => state.devicesListReducer);

  const cycle1User = usersList.currentCycle1User?.userName ?? 'User 1';
  const cycle2User = usersList.currentCycle2User?.userName ?? 'User 2';

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getAllCards());
    }, 30000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const userOneSpeed = data.cards.data1;
  const userOneHeart = data.cards.data3;
  const userOneOxygen = data.cards.data7;
  const userOneDistance = data.cards.data5;

  const userTwoSpeed = data.cards.data2;
  const userTwoHeart = data.cards.data4;
  const userTwoDistance = data.cards.data6;
  const userTwoOxygen = data.cards.data8;

  console.log(new Date(userOneSpeed[0]?.time.seconds));

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
                <GridItem xs={12} sm={6} md={4}>
                  <Card chart key={'user1speed'}>
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
                      <h4 className={classes.cardTitle}>Speed Chart {cycle1User}</h4>
                      {
                        <p className={classes.cardCategory}>
                          <span className={classes.successText}>
                            <ArrowUpward className={classes.upArrowCardCategory} />{' '}
                            {((userOneSpeed[userOneSpeed.length - 1]?.speed - userOneSpeed[0]?.speed) /
                              userOneSpeed[0]?.speed) *
                              100}{' '}
                            %
                          </span>{' '}
                          increase in last{' '}
                          {userOneSpeed[userOneSpeed.length - 1]?.time.seconds - userOneSpeed[0]?.time.seconds} seconds.
                        </p>
                      }
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> updated at{' '}
                        {new Date(userOneSpeed[userOneSpeed.length - 1]?.time.seconds * 1000).toUTCString()}
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <Card chart key={'user1heart'}>
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
                      <h4 className={classes.cardTitle}>Heart Rate Chart {cycle1User}</h4>
                      {
                        <p className={classes.cardCategory}>
                          <span className={classes.successText}>
                            <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                          </span>{' '}
                          increase in last 3 hours.
                        </p>
                      }
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> updated at
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <Card chart key={'user1oxygen'}>
                    <CardHeader color="success">
                      <ChartistGraph
                        className="ct-chart"
                        data={{
                          labels: Array.from({ length: Object.keys(userOneOxygen).length }, (_, i) => (i + 1) * 5),
                          series: [userOneOxygen.map((item) => item.spo2)],
                        }}
                        type="Line"
                        options={oxygenRateChart.options}
                        listener={oxygenRateChart.animation}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Oxygen Rate Chart {cycle1User}</h4>
                      {
                        <p className={classes.cardCategory}>
                          <span className={classes.successText}>
                            <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                          </span>{' '}
                          increase in last 3 hours.
                        </p>
                      }
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> updated 30 seconds ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={10} sm={6} md={4}>
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
                      <h4 className={classes.cardTitle}>Speed Chart {cycle2User}</h4>
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
                <GridItem xs={10} sm={6} md={4}>
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
                      <h4 className={classes.cardTitle}>Heart Rate {cycle2User}</h4>
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
                <GridItem xs={10} sm={6} md={4}>
                  <Card chart>
                    <CardHeader color="success">
                      <ChartistGraph
                        className="ct-chart"
                        data={{
                          labels: Array.from({ length: Object.keys(userTwoOxygen).length }, (_, i) => (i + 1) * 5),
                          series: [userTwoOxygen.map((item) => item.spo2)],
                        }}
                        type="Line"
                        options={oxygenRateChart.options}
                        listener={oxygenRateChart.animation}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Oxygen Rate Chart {cycle2User}</h4>
                      {
                        <p className={classes.cardCategory}>
                          <span className={classes.successText}>
                            <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                          </span>{' '}
                          increase in last 3 hours.
                        </p>
                      }
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
export default Dashboard;
