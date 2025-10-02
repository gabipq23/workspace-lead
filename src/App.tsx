import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import BannerInfo from "./components/bannerInfo/bannerInfo";
import Cards from "./components/cards/cards";
import Privacy from "./components/privacy/privacy";
// import Companys from "./components/companys/companys";
import Footer from "./components/footer/footer";
import FooterBanner from "./components/footerBanner/footerBanner";
import FAQ from "./components/faq/faq";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Banner />
        <BannerInfo />
        <Cards />
        <Privacy />
        {/* <Companys /> */}
        <FAQ />
        <FooterBanner />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
