export const handleError = async (err) => {
  let errors = { email: "", password: "" };
//   console.log("@@@", err);
  if (err.code === 11000) {
    errors.email = "This mail Id is already registered";
    return errors;
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
