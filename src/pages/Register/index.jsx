import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CustomForm from "../../components/Form";

const RegisterFields = [
  {
    id: "name",
    name: "name",
    type: "name",
    autoComplete: "name",
    className:
      "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    placeholder: "Full name",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    className:
      "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    placeholder: "Email",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "password",
    className:
      "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    placeholder: "Password",
  },
];

const RegisterInitValues = RegisterFields.reduce(
  (p, c) => ({ ...p, [c.name]: c["data-value"] }),
  {}
);

const Register = ({ register }) => {
  return (
    <CustomForm
      fields={RegisterFields}
      initialValues={RegisterInitValues}
      btnText="Register Now"
      onSubmit={register}
    >
      <p className="mt-2 text-center text-sm text-gray-600">
        <Link
          to="/auth"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Already have an account? Login
        </Link>
      </p>
      <div>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm"></div>
      </div>
    </CustomForm>
  );
};
const mapDispatchToProps = (dispatch) => ({
  register: (values) =>
    dispatch({
      type: "REGISTER_REQUEST",
      payload: values,
    }),
});
export default connect(null, mapDispatchToProps)(Register);
