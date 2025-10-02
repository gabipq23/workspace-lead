import { Button } from "antd";

function Banner() {
  return (
    <div className="flex bg-[#f7f7f7] items-center justify-around px-24 md:justify-center md:gap-16 w-full h-[200px] md:h-[360px] lg:h-[610px]">
      <div className="flex flex-col w-2/4 gap-2 ">
        <img src="/Workspace-Icons.svg" className=" w-36 md:w-54" />
        <div>
          <p
            style={{ fontWeight: "bold", lineHeight: "1.3" }}
            className="text-[54px] text-[#202124]"
          >
            Contrate Google Workspace e pague direto na sua fatura
          </p>
          <p
            style={{ fontWeight: "bold", lineHeight: "1.3" }}
            className="text-[54px] text-[#202124]"
          >
            Vivo Empresas
          </p>
        </div>

        <p className="text-[18px] text-[#5f6368] w-[520px]">
          Com os planos do Google Workspace, você tem conta no Gmail com o seu
          próprio domínio e ferramentas de colaboração, como Agenda, Drive, Docs
          e muito mais. E ainda pode turbinar a sua produtividade com a IA do
          Google.
        </p>
        <div>
          <Button type="default" color="blue" variant="solid" size="large">
            Iniciar agora
          </Button>
        </div>
      </div>

      <div className="flex flex-col w-1/2">
        <img src="/imagem1.png" className=" " />
      </div>
    </div>
  );
}

export default Banner;
