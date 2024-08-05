import React from "react";
import dogsignup from "../../assets/dogsignup.jpeg";
import "./DogSignUp.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const DogSignUp = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is Required")
      .min(2, "Username should be at least 2 characters")
      .max(15, "Username should not be more than 15 characters"),
    password: Yup.string()
      .required("Password is Required")
      .min(4, "Password should be at least 4 characters"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/dog");
    },
  });

  const navigate = useNavigate();

  return (
    <section className="Dogsignup-page">
      <div className="dogsignup-upperlayer">
        <div className="Dogsignup-image">
          <img
            src={dogsignup}
            alt="picture of dog pack"
            className="dogSignup-img"
          />
        </div>
        <form className="Dogsignup-formpart" onSubmit={formik.handleSubmit}>
          <h1>Sign up to See Doggies</h1>

          <label htmlFor="username">Input Username:</label>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error">{formik.errors.username}</div>
          ) : null}

          <label htmlFor="password">Input Password:</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}

          <button type="submit">Enter</button>
        </form>
      </div>
    </section>
  );
};

export default DogSignUp;
