import Form from "react-bootstrap/Form";
import { useFormik } from "formik"; // data mangement
import { object, string, number, date } from "yup"; // data validation

function StudentFrom() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    grade: "",
  };

  const studentSchema = object({
    name: string().required("Name field must be filled"),
    email: string()
      .email("Invalid email format")
      .required("Email field must be filled"),
    password: string()
      .min(6, "Password must be at least 6 characters")

      .required("Password field must be filled"),

    gender: string()
      .oneOf(["male", "female", "other"], "Select a valid gender")
      .required("Please selet the Gender"),

    grade: string()
      .oneOf(
        ["Freshman", "Sophomore", "Junior", "Senior"],
        "Select a valid grade"
      )
      .required("Please selet the Grade"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: studentSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <Form className="studentFrom" onSubmit={formik.handleSubmit}>
        <h1>📋Student Form📝</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Full Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
            {formik.errors.name && formik.touched.name && (
              <p
                style={{
                  color: "red",
                }}
              >
                {formik.errors.name}
              </p>
            )}
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
            {formik.errors.email && formik.touched.email && (
              <p
                style={{
                  color: "red",
                }}
              >
                {formik.errors.email}
              </p>
            )}
            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
            {formik.errors.password && formik.touched.password && (
              <p
                style={{
                  color: "red",
                }}
              >
                {formik.errors.password}
              </p>
            )}
            <tr>
              <td>
                <label htmlFor="grade">Grade</label>
              </td>
              <td>
                <select
                  name="grade"
                  value={formik.values.grade}
                  onChange={formik.handleChange}
                >
                  <option value="">Select The Grade</option>
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </select>
              </td>
            </tr>
            {formik.errors.grade && formik.touched.grade && (
              <p
                style={{
                  color: "red",
                }}
              >
                {formik.errors.grade}
              </p>
            )}
            <tr className="genderDiv">
              <td>
                <label htmlFor="gender">Gender</label>
              </td>
              <td className="genderinput">
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  checked={formik.values.gender === "male"}
                  onChange={formik.handleChange}
                />{" "}
                <span>Male</span>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                />{" "}
                <span>Female</span>
                <input
                  type="radio"
                  value="other"
                  name="gender"
                  checked={formik.values.gender === "other"}
                  onChange={formik.handleChange}
                />{" "}
                <span>Others</span>
              </td>
            </tr>
            {formik.errors.gender && formik.touched.gender && (
              <p
                style={{
                  color: "red",
                }}
              >
                {formik.errors.gender}
              </p>
            )}
          </tbody>
        </table>
        <input className="btn" type="submit" />
      </Form>
    </div>
  );
}

export default StudentFrom;
