export const confirmPassword = (password, confirmation) => {
  return password === confirmation;
};

export const validateEmail = (email) => {
  return email.length > 0;
};

export const validatePassword = (password) => {
  return password.length > 0;
};
