import { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { ChevronLeft, CircleQuestionMark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CompanyInfo() {
  const [dominio, setDominio] = useState("");
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({
      dominio,
      nomeEmpresa,
      cnpj,
    });
  };

  return (
    <div className="bg-[#f7f7f7] min-h-[calc(100vh-157px)] relative">
      <Button
        shape="circle"
        type="default"
        variant="outlined"
        className="absolute left-8 top-30 md:top-70 "
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className=" text-gray-600" />
      </Button>

      <div className="flex items-center justify-center px-4 min-h-[calc(100vh-191px)]">
        <div className="flex flex-col max-w-lg w-full">
          <h2 className="text-2xl  text-gray-800 text-start">
            Qual é o nome de domínio da sua empresa?
          </h2>

          <p className="text-sm text-[#5f6368] text-start mb-6">
            Informe o nome de domínio da sua empresa. Você usará para configurar
            endereços de e-mail, como info@example.com. Ajudaremos você a
            confirmar que o domínio pertence à empresa mais tarde.{" "}
            <Tooltip
              placement="bottomLeft"
              title="  Um domínio é o que aparece depois de 'www' em endereços da Web
                  (por exemplo,example.com) e depois do caractere '@' em
                  endereços de e-mail (por exemplo, nomedeusuário@example.com)."
            >
              <CircleQuestionMark className="w-4 h-4 cursor-pointer inline" />
            </Tooltip>
          </p>

          <div className="mb-6">
            <Input
              placeholder="Nome do seu domínio"
              value={dominio}
              onChange={(e) => setDominio(e.target.value)}
              className="h-12 text-base border-gray-300 rounded-sm"
              style={{
                fontSize: "16px",
                padding: "12px 16px",
              }}
            />
          </div>

          <div className="mb-6">
            <Input
              placeholder="Nome da Empresa"
              value={nomeEmpresa}
              onChange={(e) => setNomeEmpresa(e.target.value)}
              className="h-12 text-base border-gray-300 rounded-sm"
              style={{
                fontSize: "16px",
                padding: "12px 16px",
              }}
            />
          </div>

          <div className="mb-8">
            <Input
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              className="h-12 text-base border-gray-300 rounded-sm"
              style={{
                fontSize: "16px",
                padding: "12px 16px",
              }}
            />
          </div>

          <Button
            className="self-start"
            type="primary"
            size="large"
            disabled={!dominio || !nomeEmpresa || !cnpj}
            onClick={() => (navigate("/order-finish"), handleSubmit())}
          >
            Avançar
          </Button>
        </div>
      </div>
    </div>
  );
}
