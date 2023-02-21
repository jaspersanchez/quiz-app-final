import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CustomForm from "../../components/Form";

const LoginFields = [
  {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    className:
      "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
    placeholder: "Email address",
    validate: (value) => {
      if (!value) return "Please do not leave empty";
      return "";
    },
  },
  {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    className:
      "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
    placeholder: "Password",
    validate: (value) => {
      if (!value) return "Please do not leave empty";
      return "";
    },
  },
];

const LoginInitValues = LoginFields.reduce(
  (p, c) => ({ ...p, [c.name]: c["data-value"] }),
  {}
);

const Login = ({ login }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <CustomForm
            fields={LoginFields}
            initialValues={LoginInitValues}
            btnText="Sign in"
            onSubmit={login}
          >
            <div className="mt-6">
              <p className="mt-2 text-center text-sm text-gray-600">
                <Link
                  to="register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Don't have an account yet? Register now!
                </Link>
              </p>
            </div>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (values) =>
    dispatch({
      type: "LOGIN_REQUEST",
      payload: values,
    }),
});

export default connect(null, mapDispatchToProps)(Login);
