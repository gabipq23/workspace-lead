import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import "./index.css";
import Header from "./components/header/header";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import Order from "./components/order/order";
import OrderContact from "./components/order/orderContact";
import OrderCompany from "./components/order/orderCompany";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="text-[#5f6368] bg-[#f7f7f7]">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-contact" element={<OrderContact />} />
          <Route path="/order-company" element={<OrderCompany />} />
        </Routes>

        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
