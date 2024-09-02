import { useContext } from "react";
import { UniversalContext } from '../context/UniversalContext';
const PageTitle = () => {
  const { getValue } = useContext(UniversalContext);
  const userType = getValue("userType");
  return (
    <div className="row" style={{  color: '#fff', padding: '.8rem 1rem' }}>
      <div className="col-12">
        <div className="page-title-box">
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <a href="#" style={{  color: '#000'}}>ABC</a>
              </li>
              {userType !== undefined && (
                <li className="breadcrumb-item">
                  <a href="#" style={{  color: '#000'}}>Dashboards</a>
                </li>
              )}
              <li className="breadcrumb-item active">{getValue('PageName')?getValue('PageName'):"Welcome!"}</li>
            </ol>
          </div>
          <h4 className="page-title">{getValue('PageName')?getValue('PageName'):"Welcome!"}</h4>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;