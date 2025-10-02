import { Button } from "antd";

export default function FooterBanner() {
  return (
    <div className="flex text-[#5f6368] bg-[#f7f7f7] px-20 w-full py-4 h-[300px] items-center   ">
      <div className="flex  flex-col max-w-4xl mx-auto text-center gap-4">
        <div className="flex justify-center">
          <img
            src="/Workspace-Icons.svg"
            alt="Google Workspace Icons"
            className="h-8"
          />
        </div>

        <h2 className="text-[36px] font-normal text-[#3c4043] leading-[44px]  max-w-3xl mx-auto">
          É assim que equipes de todos os
          <br />
          tamanhos criam e colaboram
        </h2>
        <div>
          <Button
            type="primary"
            size="large"
            className="bg-[#1a73e8] hover:bg-[#1557b0] border-none px-8 py-2 h-12 text-[16px] font-medium rounded"
          >
            Iniciar agora
          </Button>
        </div>
      </div>
    </div>
  );
}
