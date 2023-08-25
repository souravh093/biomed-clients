// save user with role in database
export const saveUser = (user, updateData) => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: user?.photoURL,
    updateData,
  };

  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const saveClient = (user, updateData) => {
  return new Promise((resolve, reject) => {
    const currentUser = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
      updateData,
    };

    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const becomeClient = (email) => {
  const currentUser = {
    client: true,
  };

  return fetch(`http://localhost:5000/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  });
};

// get admin role
export const getAdminRole = async (email) => {
  const res = await fetch(`http://localhost:5000/users/${email}`);
  const user = await res.json();
  return user?.admin;
};

// get moderator role
export const getModeratorRole = async (email) => {
  const res = await fetch(`http://localhost:5000/users/${email}`);
  const user = await res.json();
  return user?.moderator;
};

// get client role
export const getClientRole = async (email) => {
  const res = await fetch(`http://localhost:5000/users/${email}`);
  const user = await res.json();
  return user?.client;
};

