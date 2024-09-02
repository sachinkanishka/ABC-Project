/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import { UniversalContext } from '../context/UniversalContext';

const Alert = () => {
  const { getValue, setValue } = useContext(UniversalContext);
  const [visibility, setVisibility] = useState(getValue("AlertVisibility"));
  const type = getValue("AlertType");
  const message = getValue("AlertMessage");

  useEffect(() => {
    setVisibility(getValue("AlertVisibility"));
  }, [getValue("AlertVisibility")]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisibility(false);
      setValue("AlertVisibility", false);
    }, 5000); // 5000ms = 5 seconds
    return () => clearTimeout(timeoutId);
  }, [visibility]);

  const handleClose = () => {
    setValue("AlertVisibility", false);
  };

  if (!visibility) return null;

  const alertStyles = {
    primary: {
      backgroundColor: '#d1ecf1',
      borderColor: '#bee5eb',
      color: '#0c5460'
    },
    danger: {
      backgroundColor: '#f8d7da',
      borderColor: '#f5c6cb',
      color: '#721c24'
    }
  };

  return (
    <div
      className="position-fixed start-50 translate-middle-x z-index-10"
      style={{ zIndex: 100000, top: "0.5rem" }}
    >
      {type === 'primary' ? (
        <div className="alert alert-dismissible fade show" role="alert" style={alertStyles.primary}>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          <strong>Success! - </strong> {message}
        </div>
      ) : (
        <div className="alert alert-dismissible fade show" role="alert" style={alertStyles.danger}>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          <strong>Error! - </strong> {message}
        </div>
      )}
    </div>
  );
};

export default Alert;
