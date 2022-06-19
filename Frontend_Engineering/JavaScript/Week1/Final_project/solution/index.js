/*
In this last section, we'll consolidate all you have learnt this week, with some mini projects
=== PROJECT DESCRIPTION ===
* Create a webpage that validates a user and returns user details
    * Accept details using prompts
    * Use an object to store user details
    * Validate user details
      * Username must be less than ten
      * Password must be greater than six
      * User must confirm password
      * If username and password do not match, alert the user
    * Display user details

*/

// // Object for storing user details
// const user = {
//     username: '',
//     password: '',
//   },
//   cancelledMessage = 'You cancelled this process';

// // Get username
// let username = prompt('Input username');

// if (username === null) {
//   alert(cancelledMessage);
// } else {
//   // Validate username
//   while (username === '' || username.length > 10) {
//     if (username === '') {
//       username = prompt('Invalid username. Try again');
//     } else {
//       username = prompt('Too long. Shorten it');
//     }
//   }

//   // Store username in user object
//   user.username = username;

//   // Get user password
//   let password = prompt('Input password');

//   if (password === null) {
//     alert(cancelledMessage);
//   } else {
//     // Validate user password
//     while (password.length < 6 || password.length > 15) {
//       password = prompt('Password length must be between 6 - 15 characters');
//     }

//     // Confirm user password
//     let confirmPassword = prompt('Confirm password');

//     if (confirmPassword === null) {
//       alert(cancelledMessage);
//     } else {
//       while (confirmPassword !== password) {
//         confirmPassword = prompt(
//           'Passwords do not match. Pls put the correct password'
//         );
//       }

//       // Store confirmed password in user object
//       user.password = password;
//     }
//   }
// }

// // Print user details to console
// console.log(user);

function getUserDetails() {
  let username = prompt('Input username');

  while (!validateUsername(username)) {
    username.length > 10
      ? (username = prompt('Too long. Make your username shorter'))
      : (username = prompt('Invalid. Please pick a username'));
  }

  let password = getPassword();

  while (!validatePassword(password)) {
    password.length < 6
      ? (password = getPassword(
          'Too short. Make it longer (6 - 15 characters)'
        ))
      : (password = getPassword(
          'Too long. Make it shorter (6 - 15 characters)'
        ));
  }

  let confirmPassword = prompt('Confirm password');

  while (!validatePassword(confirmPassword) && confirmPassword !== password) {
    password = getPassword(
      `Passwords don't match. Start over with a new password`
    );
    confirmPassword = prompt('Confirm password');
  }

  const user = {
    username: username,
    password: password,
  };

  console.log(user);

  function validateUsername(x) {
    if (x === null) alert('You have ended this session');
    return x !== '' && x.length < 10;
  }

  function getPassword(content = 'Input password') {
    let pwd = prompt(content);
    return pwd;
  }

  function validatePassword(y) {
    if (y === null) alert('You have ended this session');
    return y.length >= 6 && y.length <= 15;
  }
}

getUserDetails();
