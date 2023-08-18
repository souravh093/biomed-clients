// save user with role
export const saveUser = (user, updateData) => {
  console.log(user);
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: user?.photoURL,
    updateData,
    candidate: true,
  };

  fetch(`https://biomed-server.vercel.app/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const saveClient = (user) => {
  console.log(user);
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: user?.photoURL,
    client: true,
  };

  fetch(`https://biomed-server.vercel.app/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// get client role
export const getClientRole = async (email) => {
  const res = await fetch(`https://biomed-server.vercel.app/users/${email}`);
  const user = await res.json();
  return user?.client;
};

// get candidate
export const getCandidateRole = async (email) => {
  const res = await fetch(`https://biomed-server.vercel.app/users/${email}`);
  const user = await res.json();
  return user?.candidate;
};
