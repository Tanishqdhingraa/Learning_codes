// models/userModel.js

let users = [
  { id: 1, name: "Tanishq", email: "tanishq@mail.com" }
];

export const getAllUsers = () => users;

export const getUserById = (id) =>
  users.find(user => user.id === id);

export const createUser = (userData) => {
  const newUser = { id: Date.now(), ...userData };
  users.push(newUser);
  return newUser;
};
