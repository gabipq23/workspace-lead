import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import "./index.css";
import Header from "./components/header/header";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import GetStartInfo from "./components/order/getStartInfo";
import ContactInfo from "./components/order/contactInfo";
import CompanyInfo from "./components/order/companyInfo";
import ChoosePlan from "./components/order/choosePlan";
import FinishOrderInfo from "./components/order/finishOrderInfo";
import WorkspaceAgreement from "./components/order/workspaceAgreement";
import TermsAndConditions from "./components/order/termsAndConditions";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="text-[#5f6368] bg-[#f7f7f7]">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/order" element={<GetStartInfo />} />
          <Route path="/order-choose-plan" element={<ChoosePlan />} />
          <Route path="/order-contact" element={<ContactInfo />} />
          <Route path="/order-company" element={<CompanyInfo />} />
          <Route path="/order-company" element={<CompanyInfo />} />
          <Route path="/order-finish" element={<FinishOrderInfo />} />
          <Route path="/agreement" element={<WorkspaceAgreement />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>

        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
