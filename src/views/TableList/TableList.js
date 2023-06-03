import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDevices } from './action';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Table from 'components/Table/Table.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import Loader from 'components/Loader/Loader.js';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.devicesListReducer);

  useEffect(() => {
    dispatch(getAllDevices());
  }, [dispatch]);
  //console.log(data,"data")
  const devices = data.devices;
  const devicesList = data.devices[0];
  const tableData = devices.map((item, index) => {
    return [index + 1, item.deviceName, item.status, item.created.toDate().toDateString()];
  });
  // console.log(tableData)

  return (
    <div>
      {data.loading && (
        <div>
          <Loader />
        </div>
      )}
      {devicesList
        ? !data.loading && (
            <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>Users List</h4>
                      <p className={classes.cardCategoryWhite}>Here is the all virtual cycling platform users list</p>
                    </CardHeader>
                    <CardBody>
                      <Table
                        tableHeaderColor="primary"
                        tableHead={['No', 'User Name', 'Email', 'Status', 'Registered']}
                        tableData={tableData.map((item) => {
                          return item;
                        })}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          )
        : null}
    </div>
  );
}
