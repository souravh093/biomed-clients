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
  console.log(user);
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: user?.photoURL,
    updateData,
    client: true,
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

// get client role
export const getClientRole = async (email) => {
  const res = await fetch(`http://localhost:5000/users/${email}`);
  const user = await res.json();
  return user?.client;
};

// get candidate
export const getCandidateRole = async (email) => {
  const res = await fetch(`http://localhost:5000/users/${email}`);
  const user = await res.json();
  return user?.candidate;
};
