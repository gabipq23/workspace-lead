import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Banner from "./banner/banner";
import BannerInfo from "./bannerInfo/bannerInfo";
import Cards from "./cards/cards";
import InfoAnchor from "./infoAnchor/infoAnchor";
import InfoAnchor2 from "./infoAnchor2/infoAnchor2";
import Privacy from "./privacy/privacy";
import Companys from "./companys/companys";
import FAQ from "./faq/faq";
import FooterBanner from "./footerBanner/footerBanner";

export default function Catalog() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Banner />
        <BannerInfo />
        <Cards />
        <InfoAnchor />
        <InfoAnchor2 />
        <Privacy />
        <Companys />
        <FAQ />
        <FooterBanner />
      </QueryClientProvider>
    </>
  );
}
