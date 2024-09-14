import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Client from "./pages/Client";
import Companies from "./pages/Companies";
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
import InvoicePaymentProvider from "./contexts/InvoicePaymentContext";
import SubscriptionProvider from "./contexts/Subscription";
import SubscriptionRoutes from "./components/SubscriptionRoutes";
// import SubscriptionPage from "./pages/Subscription";
// import PaymentPage from "./pages/Payment";

function App() {
  // maxWidth={"1536px"}
  document.title = "SwyftInvoice";
  return (
    <Box as="section" margin={"0 auto"}>
      <Router>
        <AuthProvider>
          <SubscriptionProvider>
            <ClientProvider>
              <InvoiceProvider>
                <InvoicePaymentProvider>
                  <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                    {/* Protected Routes */}
                    <Route element={<ProtectedRoutes />}>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/invoice" element={<Invoice />} />
                      <Route path="/client" element={<Client />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route
                        path="/create-invoice"
                        element={<CreateInvoice />}
                      />
                      <Route path="/create-client" element={<CreateClient />} />
                      <Route path="/invoice/:id" element={<InvoiceDetails />} />
                      <Route
                        path="/invoice/edit/:id"
                        element={<EditInvoice />}
                      />

                      {/* Premium Subscription plan routes */}
                      <Route element={<SubscriptionRoutes />}>
                        <Route path="/companies" element={<Companies />} />
                      </Route>
                    </Route>
                  </Routes>
                </InvoicePaymentProvider>
              </InvoiceProvider>
            </ClientProvider>
          </SubscriptionProvider>
        </AuthProvider>
      </Router>
    </Box>
  );
}

export default App;
