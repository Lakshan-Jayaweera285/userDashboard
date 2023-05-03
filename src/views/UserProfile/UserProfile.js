import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getUser,addNewUser} from "./action";
import { primaryColor} from "../../assets/jss/material-dashboard-react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Loader from "components/Loader/Loader.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const dispatch =useDispatch();
  const data =useSelector((state)=>state.userProfileReducer);

  const [company,setCompany] = useState('');
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] =useState('');
  const [city,setCity] = useState('');
  const [country,setCountry] = useState('');
  const [postal,setPostal] = useState('');
   
  useEffect(() => {
    dispatch(getUser()); 
  },[dispatch]);
  const userData = data.user[0]
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const user = {
      company:company,
      city: city,
      country: country,
      email: email,
      firstName: firstName,
      lastName: lastName,
      postalCode : postal,
      userName: userName
    }
    if (!(company === "") ){
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
    dispatch(getUser());
   
}

  return (
    <div>
      {data.loading && <div>
          <Loader/>
        </div>
      }
      {userData ?(!data.loading && 
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
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
                  <Button color="info" submit={handleSubmit} >Update Profile</Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody profile>
                  <h6 className={classes.cardCategory}>{userData.company}</h6>
                  <h4 className={classes.cardTitle}>{userData.firstName}{" "}{userData.lastName}</h4>
                  <p className={classes.description}>
                    User Name :{ " "}{userData.userName}
                  </p>
                  <p className={classes.description}>
                    Email :{" "} {userData.email}
                  </p>
                  <p className={classes.description}>
                    City :{" "} {userData.city}
                  </p>
                  <p className={classes.description}>
                    Postal Code :{" "} {userData.postalCode}
                  </p>
                  <p className={classes.description}>
                    Country :{" "} {userData.country}
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      ):null }
    </div>
  );
}
