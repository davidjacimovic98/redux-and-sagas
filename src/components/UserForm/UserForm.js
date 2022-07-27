import React from "react";
import styles from "./UserForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";
import { useTempUnitContext } from "../../context/temp_unit_context";

const UserForm = () => {
  const cities = useSelector((state) => state.weather);
  const { setCelsius } = useTempUnitContext();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be at least 2 characters long")
        .required("First name required!"),
      lastName: Yup.string()
        .min(2, "Must be at least 2 characters long")
        .required("Last name required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email required!"),
      city: Yup.string().required("City required!"),
    }),
    onSubmit: (values) => {
      dispatch(
        actions.addUser(
          values.firstName,
          values.lastName,
          values.email,
          values.city
        )
      );
      if (!(values.city in cities)) {
        dispatch(actions.getCity(values.city));
      }
      values.firstName = "";
      values.lastName = "";
      values.email = "";
      values.city = "";
    },
  });

  const tempInCelsius = () => {
    setCelsius(true);
    formik.handleSubmit();
  };
  const tempInFarenheit = () => {
    setCelsius(false);
    formik.handleSubmit();
  };

  return (
    <div>
      <div className={styles.temp_btns}>
        Show current temperature in degree:
        <div>
          <button className={styles.btn_toggle_unit} onClick={tempInCelsius}>
            Celsius
          </button>
          <button className={styles.btn_toggle_unit} onClick={tempInFarenheit}>
            Farenheit
          </button>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <p>Add user</p>
        <div className={styles.input_container}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p>{formik.errors.firstName}</p>
          )}
        </div>
        <div className={styles.input_container}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p>{formik.errors.lastName}</p>
          )}
        </div>
        <div className={styles.input_container}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div className={styles.input_container}>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city && (
            <p>{formik.errors.city}</p>
          )}
        </div>
        <button
          type="submit"
          className={styles.btn_submit}
          disabled={
            !formik.values.firstName ||
            !formik.values.lastName ||
            !formik.values.email ||
            !formik.values.city
              ? true
              : false
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
