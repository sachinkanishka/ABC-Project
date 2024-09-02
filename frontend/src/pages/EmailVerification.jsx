import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";
import { useFormik } from "formik";
import { verifyUser } from "../api/userApi";
import Alert from "../components/Alert";
import { UniversalContext } from '../context/UniversalContext';
import { barrier } from "../middleware/securityMiddleware";

const EmailVerification = () => {
  const { setValue } = useContext(UniversalContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      verificationCode: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.verificationCode) {
        errors.verificationCode = "Required";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await verifyUser(values.verificationCode);
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
    <div className="authentication-bg" style={{ backgroundColor: '#462e05', minHeight: '100vh' }}>
      <Alert />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card shadow-sm" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#462e05', border: 'none' }}>
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <Link to="/" className="d-inline-block mb-3">
                <img src={logo} alt="logo" height="56" />
              </Link>
              <h4 className="fs-20">Email Verification</h4>
              <p className="text-muted mb-4">Enter your verification code to verify your email.</p>
            </div>

            {/* Form */}
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="verificationCode" className="form-label">
                  Verification Code
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="verificationCode"
                  required
                  {...formik.getFieldProps('verificationCode')}
                  placeholder="Enter verification code"
                  style={{ padding: '0.75rem', borderRadius: '0.375rem' }}
                />
                {formik.errors.verificationCode ? (
                  <div className="text-danger mt-1">{formik.errors.verificationCode}</div>
                ) : null}
              </div>

              <div className="d-grid mb-3">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={formik.isSubmitting}
                  style={{ fontSize: '1rem', padding: '0.75rem' }}
                >
                  <span className="fw-bold">Verify Email</span>
                </button>
              </div>
            </form>
            {/* End form */}

            <div className="text-center">
              <p className="text-dark-emphasis mb-0">
                Back To <Link to="/" className="text-dark fw-bold text-decoration-underline"><b>Log In</b></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmailVerification;
