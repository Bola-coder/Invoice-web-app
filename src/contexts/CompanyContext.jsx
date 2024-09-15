/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
const CompanyContext = createContext();

export const useCompanyContext = () => {
  return useContext(CompanyContext);
};

const CompanyProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [companyDetails, setCompanyDetails] = useState({});

  useEffect(() => {
    fetchCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCompanies = async () => {
    setLoading(true);
    axios
      .get(`${apiUrl}/company`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setCompanies(res.data.data.companies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCompanyDetails = async (id) => {
    setLoading(true);
    setCompanyDetails({});
    axios
      .get(`${apiUrl}/company/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data.company);
        setCompanyDetails(res.data.data.company);
      })
      .catch((err) => {
        console.log("Error", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const values = {
    loading,
    companies,
    companyDetails,
    fetchCompanies,
    getCompanyDetails,
  };
  return (
    <CompanyContext.Provider value={values}>{children}</CompanyContext.Provider>
  );
};

export default CompanyProvider;
