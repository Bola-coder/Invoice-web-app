/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientContext = createContext();

export const useClientContext = () => {
  return useContext(ClientContext);
};

const ClientProvider = ({ children }) => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [clients, setClients] = useState([]);
  const [clientDetails, setClientDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllClients = async () => {
      await fetchClients();
    };
    fetchAllClients();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    axios
      .get(`${apiUrl}/clients`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data);
        setClients(res.data.data.clients);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createClient = async (client) => {
    setLoading(true);
    axios
      .post(`${apiUrl}/clients`, client, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        fetchClients();
        setLoading(false);
        navigate("/client");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getClientDetails = async (clientId) => {
    setLoading(true);
    setClientDetails({});
    axios
      .get(`${apiUrl}/clients/${clientId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data);
        setClientDetails(res.data.data.client);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const values = {
    clients,
    clientDetails,
    fetchClients,
    loading,
    createClient,
    getClientDetails,
  };
  return (
    <ClientContext.Provider value={values}>{children}</ClientContext.Provider>
  );
};

export default ClientProvider;
