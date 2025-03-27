export const isEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@jnu\.ac\.kr$/.test(email);

export const isPassword = (password: string) =>
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).{9,}$/.test(password);
