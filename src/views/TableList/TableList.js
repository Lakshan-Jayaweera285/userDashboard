import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDevices, addUserToCycle } from './action';
import { getUser, addNewUser } from '../UserProfile/action'
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
import { Button } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';

// core components
import CardFooter from 'components/Card/CardFooter.js';

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
  const userProfileData = useSelector((state) => state.userProfileReducer);
  const [isAddUserFormVisible, setIsAddUserFormVisible] = useState(false);

  // Form Values
  const [company, setCompany] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postal, setPostal] = useState('');

  useEffect(() => {
    dispatch(getAllDevices());
  }, [dispatch]);

  console.log(data, 'data');

  const handleAddUserFormClick = () => {
    setIsAddUserFormVisible(true);
  };

  const handleCloseAddUserForm = () => {
    setIsAddUserFormVisible(false);
  };

  const handleAddUserForm = (e) => {
    e.preventDefault();

    const user = {
      company: company,
      city: city,
      country: country,
      email: email,
      firstName: firstName,
      lastName: lastName,
      postalCode: postal,
      userName: userName,
    };
    console.log(user);
    if (!(company === '')) {
      dispatch(addNewUser(user));
    }
    setCompany('');
    setCountry('');
    setUserName('');
    setCity('');
    setEmail('');
    setPostal('');
    setFirstName('');
    setLastName('');
    //dispatch(getUser());
    setIsAddUserFormVisible(false);
  };

  const devices = data.devices;
  const devicesList = data.devices[0];
  const tableData = devices.map((item, index) => {
    return [
      index + 1,
      item.userName,
      item.email,
      <Button
        onClick={() => {
          dispatch(addUserToCycle({ item }, '1'));
        }}
      >
        currentBicycle:{' '}
        {item.userName === data.currentCycle1User?.item?.userName
          ? '1'
          : item.userName === data.currentCycle2User?.item?.userName
          ? '2'
          : 'No cycle Assigned'}
      </Button>,
    ];
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
                        tableHead={['No', 'User Name', 'Email', 'Status',]}
                        tableData={tableData.map((item) => {
                          return item;
                        })}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  {!isAddUserFormVisible && <Button
                    onClick={(e) => {
                      setIsAddUserFormVisible(!isAddUserFormVisible);
                    }}
                  >
                    Add User
                  </Button>}
                </GridItem>
              </GridContainer>
            </div>
          )
        : null}
      {isAddUserFormVisible && (
        <div>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Update your Profile</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    placeholder="Company"
                    variant="outlined"
                    fullWidth
                    multiline
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    placeholder="UserName"
                    variant="outlined"
                    fullWidth
                    multiline
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    placeholder="email"
                    variant="outlined"
                    fullWidth
                    multiline
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    placeholder="First Name"
                    variant="outlined"
                    fullWidth
                    multiline
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    placeholder="Last Name"
                    variant="outlined"
                    fullWidth
                    multiline
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    placeholder="City"
                    variant="outlined"
                    fullWidth
                    multiline
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    placeholder="Country"
                    variant="outlined"
                    fullWidth
                    multiline
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    placeholder="Postal Code"
                    variant="outlined"
                    fullWidth
                    multiline
                    type="text"
                    required
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="green" onClick={handleAddUserForm}>
                Add User
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
