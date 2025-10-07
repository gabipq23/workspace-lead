import { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { ChevronLeft, CircleQuestionMark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactInfo() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({
      nome,
      sobrenome,
      email,
    });
  };

  return (
    <div className="bg-[#f7f7f7] min-h-[calc(100vh-157px)] relative">
      <Button
        shape="circle"
        type="default"
        variant="outlined"
        className="absolute left-8 top-40 md:top-70 "
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className=" text-gray-600" />
      </Button>

      <div className="flex items-center justify-center px-4 min-h-[calc(100vh-191px)]">
        <div className="flex flex-col max-w-lg w-full pt-16 md:pt-0">
          <h2 className="text-2xl text-gray-800 text-start mb-4">
            Informações de contato
          </h2>

          <p className="text-sm text-[#5f6368] text-start mb-6">
            Criar a conta do Google Workspace fará de você o administrador dela.{" "}
            <Tooltip
              placement="bottomLeft"
              title={
                <div className="text-sm">
                  <div className="font-semibold mb-2">
                    O que é um administrador?
                  </div>
                  <div className="mb-3">
                    Admins são as pessoas que gerenciam a conta do Google
                    Workspace da empresa. Eles podem adicionar e remover
                    usuários, redefinir senhas, pagar contas etc.
                  </div>
                  <div>
                    Você pode atribuir a função de admin a outra pessoa mais
                    tarde.
                  </div>
                </div>
              }
            >
              <CircleQuestionMark className="w-4 h-4 cursor-pointer inline" />
            </Tooltip>
          </p>

          <div className="mb-6">
            <Input
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="h-12 text-base border-gray-300 rounded-sm"
              style={{
                fontSize: "16px",
                padding: "12px 16px",
              }}
            />
          </div>

          <div className="mb-6">
            <Input
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              className="h-12 text-base border-gray-300 rounded-sm"
              style={{
                fontSize: "16px",
                padding: "12px 16px",
              }}
            />
          </div>

          <div className="mb-8">
            <Input
              type="email"
              placeholder="Endereço de e-mail atual"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base border-gray-300 rounded-sm"
              style={{
                fontSize: "16px",
                padding: "12px 16px",
              }}
            />
          </div>

          <div className="">
            <Button
              type="primary"
              size="large"
              disabled={!nome || !sobrenome || !email}
              onClick={() => (navigate("/order-company"), handleSubmit())}
              className="px-8 self-start"
            >
              Avançar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
