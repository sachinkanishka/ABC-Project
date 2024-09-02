import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";
import { useFormik } from "formik";
import { login } from "../api/userApi";
import Alert from "../components/Alert";
import { UniversalContext } from '../context/UniversalContext';
import { barrier } from "../middleware/securityMiddleware";

const Login = () => {
  const { setValue } = useContext(UniversalContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await login(values.email, values.password);
        if (response.ok) {
          setValue("AlertType", "primary");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
          barrier(setValue, navigate);
        } else {
          setValue("AlertType", "danger");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
        }
      } catch (error) {
        setValue("AlertType", "danger");
        setValue("AlertMessage", error.data.message);
        setValue("AlertVisibility", true);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="authentication-bg" style={{ backgroundColor: '#462e05', padding: '3rem 1rem'  }}>
      <Alert />
      <div className="account-pages pt-4 pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-lg p-4" style={{ backgroundColor: '#462e05', color: 'black' }}>
                <div className="text-center mb-4">
                  <Link to="/">
                    <img src={logo} alt="logo" height="50" className="mb-3" />
                  </Link>
                  <h4 className="fw-bold" style={{ color: 'black' }}>Sign In</h4>
                  <p className="text-muted" style={{ color: 'black' }}>Enter your email and password to sign in.</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="emailaddress" className="form-label" style={{ color: 'black' }}>Email address</label>
                    <input
                      type="email"
                      id="emailaddress"
                      className="form-control"
                      required
                      {...formik.getFieldProps('email')}
                      placeholder="Enter your email"
                    />
                    {formik.errors.email && (
                      <div className="text-danger">{formik.errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{ color: 'black' }}>Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      required
                      {...formik.getFieldProps('password')}
                      placeholder="Enter your password"
                    />
                    {formik.errors.password && (
                      <div className="text-danger">{formik.errors.password}</div>
                    )}
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <Link to="/forgot-password" className="text-muted">Forgot your password?</Link>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="mt-4 text-center">
                  <p className="text-muted" style={{ color: 'black' }}>
                    Don&apos;t have an account? <Link to="/register" className="fw-bold">Sign up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
