import React, { useEffect, useState } from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllCards } from './action';
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
      {userOneSpeed.length ?(!data.loading && 
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card style={{ width: '100%', height: '100%' }}>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                  <SpeedIcon/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Bicycle Speed {cycle1User}</p>
                  <h3 className={classes.cardTitle}>
                    {userOneSpeed[8].speed}<small>km/h</small>
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated every 5 seconds 
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
          <Card style={{ width: '100%', height: '100%' }}>
        <CardHeader color="success" stats icon>
          <CardIcon color="success">
            <LocationOnIcon />
          </CardIcon>
          <p className={classes.cardCategory}>Distance {cycle1User}</p>
          <h3 className={classes.cardTitle}>{userOneDistance[8].distance} m</h3>
          </CardHeader>
          <CardFooter stats>
          <div className={classes.stats}>
            <AccessTime />
            updated every 5 seconds 
            </div>
          </CardFooter>
          </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={3}>
              <Card style={{ width: '100%', height: '100%' }}>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                  <SpeedIcon/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Bicycle Speed {cycle2User}</p>
                  <h3 className={classes.cardTitle}>
                    {userTwoSpeed[8].speed}<small>km/h</small>
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated every 5 seconds
                  </div>
                </CardFooter>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={3}>
          <Card style={{ width: '100%', height: '100%' }}>
        <CardHeader color="success" stats icon>
          <CardIcon color="success">
            <LocationOnIcon />
          </CardIcon>
          <p className={classes.cardCategory}>Distance {cycle2User}</p>
          <h3 className={classes.cardTitle}>{userTwoDistance[8].distance} m</h3>
          </CardHeader>
          <CardFooter stats>
          <div className={classes.stats}>
            <AccessTime />
            updated every 5 seconds
            </div>
          </CardFooter>
          </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
          <Card style={{ width: '100%', height: '100%' }}>
        <CardHeader color="warning" stats icon>
          <CardIcon color="warning">
            <EcoIcon />
          </CardIcon>
          <p className={classes.cardCategory}>Oxygen Saturation {cycle1User}</p>
          <h3 className={classes.cardTitle}>{userOneOxygen[8].spo2}%</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <AccessTime />
            updated every 10 seconds
          </div>
        </CardFooter>
        </Card>
          </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card style={{ width: '100%', height: '100%' }}>
                <CardHeader color="rose" stats icon>
                  <CardIcon color="rose">
                    <Favorite/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Heart Rate {cycle1User}</p>
                  <h3 className={classes.cardTitle}>{userOneHeart[8].bpm}bpm</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated every 10 seconds
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
          <Card style={{ width: '100%', height: '100%' }}>
        <CardHeader color="warning" stats icon>
          <CardIcon color="warning">
            <EcoIcon />
          </CardIcon>
          <p className={classes.cardCategory}>Oxygen Saturation {cycle2User}</p>
          <h3 className={classes.cardTitle}>{userTwoOxygen[8].spo2}%</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <AccessTime />
            updated every 10 seconds
          </div>
        </CardFooter>
        </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
              <Card style={{ width: '100%', height: '100%' }}>
                <CardHeader color="rose" stats icon>
                  <CardIcon color="rose">
                    <Favorite/>
                  </CardIcon>
                  <p className={classes.cardCategory}>Heart Rate {cycle2User}</p>
                  <h3 className={classes.cardTitle}>{userTwoHeart[8].bpm}bpm</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <AccessTime />
                    updated every 10 seconds
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
