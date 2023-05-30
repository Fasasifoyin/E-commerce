export const registerOptions = {
  name: {
    required: "Username is required",
    maxLength: {
      value: 20,
      message: "Username cannot exceed 20 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  },
  password: {
    required: "Password is required",
    // pattern: /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,15}$/,
    minLength: {
      value: 6,
      message:
        "Password must have at least 6 characters and contain special characters",
    },
  },
  firstName: {
    required: "Firstname is required",
    maxLength: {
      value: 20,
      message: "Firstname must be less than 20 characters",
    },
  },
  lastName: {
    required: "Lastname is required",
    maxLength: {
      value: 20,
      message: "Lastname must be less than 20 characters",
    },
  },
  address: {
    required: "Please fill out your address",
  },
  state: {
    required: "State is required",
  },
  phone: {
    required: "Please fill out your phone detail",
  },
  postalCode: {
    required: "Please fill out zip code",
  },
  country: {
    required: "Your country of residence is required",
  },
};
