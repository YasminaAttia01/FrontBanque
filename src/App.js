import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import CustomThemeProvider from "./utils/CustomThemeProvider";
//AGENT DASH PAGES ------------------------------------------------------------------------------------------
import AgentOverviewPage from "./pages/dashboard/agentDash/pages/agentOverview";
import ServicePage from "./pages/dashboard/agentDash/pages/financial-advi";

import AppointmentSchedulingPage from "./pages/dashboard/agentDash/pages/AppintmentScheduling";
import DocumentPage from "./pages/dashboard/agentDash/pages/management/DocumentManag";
import ClientCommunicationPage from "./pages/dashboard/agentDash/pages/ClientCommu";
import ClientManagementPage from "./pages/dashboard/agentDash/pages/ClientManagement";
import PerformanceChart from "./pages/dashboard/agentDash/pages/PerformanceChart";
//CLIENT DASH PAGES ------------------------------------------------------------------------
import ClientOverviewPage from "./pages/dashboard/clientDash/pages/clientOverview";
import BillPaymentPage from "./pages/dashboard/clientDash/pages/BillPayments";
import ContactSupportPage from "./pages/dashboard/clientDash/pages/ContactCustomerSupport";
import NotificationSettings from "./pages/dashboard/common/Notifications";
import TransferFunds from "./pages/dashboard/clientDash/pages/TransferFunds";
//COMMON -----------------------------------------------------------------------
import TransactionHistory from "./pages/dashboard/common/TransactionHistory";
import SecuritySettings from "./pages/dashboard/common/AccountSettings/PasswordManagement";
import ProfileUpdate from "./pages/dashboard/common/AccountSettings/ProfileManagement";
//--------------------------------------------------------------------------
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login/login";
import Signup from "./pages/Auth/SignUp/Signup";
import { generateAxiosInstance } from "./utils/AxiosInstance";
generateAxiosInstance();
const theme = createTheme();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
        </ThemeProvider>
        <Navbar />
        <div className="pages">
          <CustomThemeProvider>
            <Routes>
              +++++++++++++++++++++++++++++++++
              <Route path="user">
                <Route
                  path="transacHis"
                  element={<TransactionHistory />}
                ></Route>
                <Route path="notif" element={<NotificationSettings />}></Route>
                <Route path="pwdchange" element={<SecuritySettings />}></Route>
                <Route path="profilechange" element={<ProfileUpdate />}></Route>
              </Route>
              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              <Route path="agent" element={<AgentOverviewPage />}>
                
                <Route path="service" element={<ServicePage />}></Route>
                <Route
                  path="performance"
                  element={<PerformanceChart />}
                ></Route>
                <Route
                  path="clientmanagement"
                  element={<ClientManagementPage />}
                ></Route>
                <Route
                  path="commClient"
                  element={<ClientCommunicationPage />}
                ></Route>
                <Route path="doc" element={<DocumentPage />}></Route>
                <Route
                  path="appointmentSche"
                  element={<AppointmentSchedulingPage />}
                ></Route>
              </Route>
              --------------------------------------------------------------------------------------------
              <Route path="client" element={<ClientOverviewPage />}>
                <Route path="BillPay" element={<BillPaymentPage />}></Route>
                <Route path="contact" element={<ContactSupportPage />}></Route>
                <Route path="transf" element={<TransferFunds />}></Route>
              </Route>
              -----------------------------------------------------------------------------------------------------------
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
          </CustomThemeProvider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
