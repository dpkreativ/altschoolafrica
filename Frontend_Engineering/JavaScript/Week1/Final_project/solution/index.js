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

// Object for storing user details
const user = {
    username: '',
    password: '',
  },
  cancelledMessage = 'You cancelled this process';

// Get username
let username = prompt('Input username');

if (username === null) {
  alert(cancelledMessage);
} else {
  // Validate username
  while (username === '' || username.length > 10) {
    if (username === '') {
      username = prompt('Invalid username. Try again');
    } else {
      username = prompt('Too long. Shorten it');
    }
  }

  // Store username in user object
  user.username = username;

  // Get user password
  let password = prompt('Input password');

  if (password === null) {
    alert(cancelledMessage);
  } else {
    // Validate user password
    while (password.length < 6 || password.length > 15) {
      password = prompt('Password length must be between 6 - 15 characters');
    }

    // Confirm user password
    let confirmPassword = prompt('Confirm password');

    if (confirmPassword === null) {
      alert(cancelledMessage);
    } else {
      while (confirmPassword !== password) {
        confirmPassword = prompt(
          'Passwords do not match. Pls put the correct password'
        );
      }

      // Store confirmed password in user object
      user.password = password;
    }
  }
}

// Print user details to console
console.log(user);
