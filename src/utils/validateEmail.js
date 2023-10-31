const validateEmail = (email) => {
  const padraoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  return padraoEmail.test(email);
};

module.exports = validateEmail;