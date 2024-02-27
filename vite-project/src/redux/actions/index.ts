// src/redux/actions/index.ts
export const login = (email: string, password: number) => {
  return {
    type: "LOGIN",
    payload: {
      email,
      password,
    },
  };
};
