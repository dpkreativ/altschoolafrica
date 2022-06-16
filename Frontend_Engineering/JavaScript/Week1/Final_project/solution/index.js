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

function getUsername() {
  let x = prompt('Enter your username:');

  if (x === '') {
    alert('Invalid username. Please try again');
    getUsername();
  } else if (x.length > 10) {
    alert('Must be less than 10. Please try again');
    getUsername();
  }

  return x;
}

const user = getUsername();

let users = {};
users[`${user}`] = {
  username: user,
};

console.log(users);
