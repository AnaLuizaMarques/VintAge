import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";

function Vinhos() {
  return (
    <>
      <div>
        <Header />
        <Banner imagem="nossosVinhos" logo="logo-hidden" />
      </div>
      <div>
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default Vinhos;
