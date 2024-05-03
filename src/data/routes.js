import dashboard from "./../assets/icons/dashboard.png";
import dashboard_active from "./../assets/icons/dashboard-active.png";
import invoice from "./../assets/icons/invoice.png";
import invoice_active from "./../assets/icons/invoice-active.png";
import client from "./../assets/icons/client.png";
import client_active from "./../assets/icons/client-active.png";
import receipt from "./../assets/icons/receipt.png";
import receipt_active from "./../assets/icons/receipt-active.png";
import payment from "./../assets/icons/payment.png";
import payment_active from "./../assets/icons/payment-active.png";
import profile from "./../assets/icons/profile.png";
import profile_active from "./../assets/icons/profile-active.png";
import settings from "./../assets/icons/settings.png";
import settings_active from "./../assets/icons/settings-active.png";

const routes = [
  {
    name: "Dashboard",
    path: "/",
    icon: dashboard,
    activeIcon: dashboard_active,
    position: "top",
  },
  {
    name: "Invoice",
    path: "/invoice",
    icon: invoice,
    activeIcon: invoice_active,
    position: "top",
  },
  {
    name: "Client",
    path: "/client",
    icon: client,
    activeIcon: client_active,
    position: "top",
  },
  {
    name: "Receipt",
    path: "/receipt",
    icon: receipt,
    activeIcon: receipt_active,
    position: "top",
  },
  {
    name: "Payment",
    path: "/payment",
    icon: payment,
    activeIcon: payment_active,
    position: "top",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: profile,
    activeIcon: profile_active,
    position: "bottom",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: settings,
    activeIcon: settings_active,
    position: "bottom",
  },
];

export default routes;
