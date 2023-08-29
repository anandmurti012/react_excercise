import React, { useState } from "react";

const App = () => {
  //all states are in single event function
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //for every states have sepearte function for each event
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');

  //=====using different-different function for each event======
  // const updateFirstName = (event) => {
    //====individual functions for event====
    // setFirstName(event.target.value);
    //====single function for event=====
    // setUserDetails({
    //   firstName: event.target.value,
    //   lastName: userDetails.lastName,
    //   email: userDetails.email
    // });
    //====using spread operator for firstName====
    //   setUserDetails({
    //     ...userDetails,      //...userDetails is a spread operator that reduce two lines here 'lastName' and 'email'.
    //     firstName: event.target.value
    // });
  // };
  // const updateLastName = (event) => {
    //=====individual functions for event=====
    // setLastName(event.target.value);
    //===single function for event=====
    // setUserDetails({
    //   firstName: userDetails.firstName,
    //   lastName: event.target.value,
    //   email: userDetails.email
    // });
    //=====using spread operator for lastname=====
    //  setUserDetails({
    //   ...userDetails,       //...userDetails is a spread operator that reduce two lines here 'firstName' and 'email'.
    //   lastName: event.target.value,
    // });
  // };
  // const updateEmail = (event) => {
    //=====individual functions for event=====
    // setEmail(event.target.value);
    //===single function for event=====
    // setUserDetails({
    //   firstName: userDetails.firstName,
    //   lastName: userDetails.lastName,
    //   email: event.target.value
    // });
    //=====using spread operator for email=====
    //  setUserDetails({
    //   ...userDetails,       //...userDetails is a spread operator that reduce two lines here 'firstName' and 'lastName'.
    //   email: event.target.value
    // });
  // };
  //=====using single function for all event function==========
  const updateUserDetails = (event) => {
    // setUserDetails({
    //   firstName,
    //   lastName,
    //   email
    // });
    // console.log(event.target.className);
    if (event.target.className === "firstName") {
      setUserDetails({
        ...userDetails, //...userDetails is a spread operator that reduce two lines here 'lastName' and 'email'.
        firstName: event.target.value,
      });
    }
    if (event.target.className === "lastName") {
      setUserDetails({
        ...userDetails, //...userDetails is a spread operator that reduce two lines here 'firstName' and 'email'.
        lastName: event.target.value,
      });
    }
    if (event.target.className === "email") {
      setUserDetails({
        ...userDetails, //...userDetails is a spread operator that reduce two lines here 'firstName' and 'lastName'.
        email: event.target.value,
      });
    }
  };

  //=====just a single function and single state variable, one of he smallest and optimised code====
  /*
  const {value, className} = event.target;
  // setUserDetails({
  ...userDetails,
  [className] : value
   })
    */

  //======event for submitting the form=======
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userDetails.firstName,userDetails.lastName,userDetails.email);
  };
  //===========================================

  return (
    //Note:- 'controlled input' is a thing that will relate from input value & useState variable.
    <>
    <h2 className="heading" style={{textAlign:'center'}}>Form-Excercise</h2>
      <div className="container">
        <form onSubmit={formSubmitHandler}>
          <h1>
            Hello {userDetails.firstName} {userDetails.lastName}
          </h1>
          <div>{userDetails.email}</div>
          {/* Note:- as we can see that for every input onChange function is different */}
          {/* <input value={userDetails.firstName} placeholder="First name" onChange={updateFirstName} />
          <input value={userDetails.lastName} placeholder="Last name" onChange={updateLastName} />
          <input value={userDetails.email} placeholder="email" onChange={updateEmail} /> */}

          {/* Note:-for every input onchange funcion will be same */}
          <input
            className="firstName"
            value={userDetails.firstName}
            placeholder="First name"
            onChange={updateUserDetails}
          />
          <input
            className="lastName"
            value={userDetails.lastName}
            placeholder="Last name"
            onChange={updateUserDetails}
          />
          <input
            className="email"
            value={userDetails.email}
            placeholder="email"
            onChange={updateUserDetails}
          />
          <button>submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
