import React from "react"
import { useFormik } from "formik"

export default () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = "Required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <h2>Sign up for the newsletter!</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address: </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
