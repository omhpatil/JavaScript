fetch('https://api.github.com/users/omhpatil')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Extract the username and followers
    const username = data.login;
    const followers = data.followers;

    console.log(`Username: ${username}`);
    console.log(`Followers: ${followers}`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
