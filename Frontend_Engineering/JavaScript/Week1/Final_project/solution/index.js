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
  let username = prompt('Enter your username:');

  if (username.length > 10) {
    username = prompt(
      'Please ensure your username has less than 10 characters:'
    );
  }
  return username;
}

const users = {};
users[`${getUsername()}`] = {
  username: getUsername(),
};

console.log(users);
