import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Client from "./pages/Client";
import Receipt from "./pages/Receipt";
import Payment from "./pages/Payment";
import CreateInvoice from "./pages/CreateInvoice";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/client" element={<Client />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
