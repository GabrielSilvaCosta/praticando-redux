// src/redux/reducers/userReducer.ts
const initialState = {
  email: "",
  password: 0,
};

type Action = {
  type: "LOGIN";
  payload: {
    email: string;
    password: number;
  };
};

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
