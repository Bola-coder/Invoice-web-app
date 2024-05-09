import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Client from "./pages/Client";
import Receipt from "./pages/Receipt";
import Payment from "./pages/Payment";
import CreateInvoice from "./pages/CreateInvoice";
import CreateClient from "./pages/CreateClient";
import AuthProvider from "./contexts/AuthContext";
import Signup from "./pages/Signup";
import { Box } from "@chakra-ui/react";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ClientProvider from "./contexts/ClientContext";
import InvoiceProvider from "./contexts/InvoiceContext";
import InvoiceDetails from "./pages/InvoiceDetails";
import EditInvoice from "./pages/EditInvoice";

function App() {
  return (
    <Box as="section" maxWidth={"1536px"} margin={"0 auto"}>
      <Router>
        <AuthProvider>
          <ClientProvider>
            <InvoiceProvider>
              <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Routes */}
                <Route element={<ProtectedRoutes />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/invoice" element={<Invoice />} />
                  <Route path="/client" element={<Client />} />
                  <Route path="/receipt" element={<Receipt />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/create-invoice" element={<CreateInvoice />} />
                  <Route path="/create-client" element={<CreateClient />} />
                  <Route path="/invoice/:id" element={<InvoiceDetails />} />
                  <Route path="/invoice/edit/:id" element={<EditInvoice />} />
                </Route>
              </Routes>
            </InvoiceProvider>
          </ClientProvider>
        </AuthProvider>
      </Router>
    </Box>
  );
}

export default App;
