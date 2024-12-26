document.getElementById('search').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const resultDiv = document.getElementById('result');
  
    if (!username) {
      resultDiv.innerHTML = `<p class="error">Please enter a username.</p>`;
      return;
    }
  
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('User not found');
        }
      })
      .then((data) => {
        resultDiv.innerHTML = `
          <img src="${data.avatar_url}" alt="Avatar">
          <h2>${data.name || 'No Name'}</h2>
          <p>${data.bio || 'No bio available'}</p>
          <p>Public Repositories: ${data.public_repos}</p>
          <p>Followers: ${data.followers}</p>
          <p>Following: ${data.following}</p>
          <a href="${data.html_url}" target="_blank">View Profile</a>
        `;
      })
      .catch((error) => {
        resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
      });
  });
  