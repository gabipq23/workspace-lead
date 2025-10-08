import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row bg-[#f7f7f7] items-center justify-around px-10 md:px-48 md:justify-center md:gap-16 w-full py-12">
      <div className="flex flex-col items-center md:items-start md:w-2/4 gap-4 ">
        <img src="/Workspace-Icons.svg" className=" w-64 md:w-54" />
        <div className="text-center md:text-start  flex flex-col">
          <p
            style={{ fontWeight: "bold", lineHeight: "1.3", margin: 0 }}
            className="text-[32px] md:text-[54px] text-[#202124] "
          >
            Contrate Google Workspace e pague direto na sua fatura
          </p>
          <p
            style={{ fontWeight: "bold", lineHeight: "1.3", margin: 0 }}
            className="text-[32px] md:text-[54px] text-[#202124] "
          >
            Vivo Empresas
          </p>
        </div>

        <p className="text-[16px] md:text-[18px] text-[#5f6368] md:w-[520px] text-center md:text-start">
          Com os planos do Google Workspace, você tem conta no Gmail com o seu
          próprio domínio e ferramentas de colaboração, como Agenda, Drive, Docs
          e muito mais. E ainda pode turbinar a sua produtividade com a IA do
          Google.
        </p>
        <div>
          <Button
            type="default"
            color="blue"
            variant="solid"
            size="large"
            onClick={() => (
              navigate("/order-choose-plan"), window.scrollTo(0, 0)
            )}
          >
            Iniciar agora
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:w-1/2">
        <img src="/imagem1.png" className=" " />
      </div>
    </div>
  );
}

export default Banner;
