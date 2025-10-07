import { Collapse, Button } from "antd";

import { useState } from "react";

const { Panel } = Collapse;

export default function FAQ() {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const handleExpandAll = () => {
    if (activeKeys.length === faqItems.length) {
      setActiveKeys([]);
    } else {
      setActiveKeys(faqItems.map((item) => item.key));
    }
  };
  const faqItems = [
    {
      key: "1",
      question: "O que está incluído no Google Workspace (antigo G Suite)?",
      answer: (
        <div className="text-[14px] text-[#5f6368] leading-6">
          <p>
            Assim como no G Suite, os planos do Google Workspace incluem um
            e-mail personalizado para sua empresa, ferramentas de colaboração
            como Gmail, Agenda, Meet, Chat, Drive, Docs, Planilhas,
            Apresentações, Formulários, Sites e muitas outras.
          </p>
        </div>
      ),
    },
    {
      key: "2",
      question:
        "O que é o Google Workspace com Gemini e onde posso saber mais a respeito?",
      answer: (
        <div className="text-[14px] text-[#5f6368] leading-6">
          <p>
            O Google Workspace com Gemini é uma suíte ainda mais intuitiva e
            fácil de navegação, além de turbinar sua produtividade. Tudo isso
            garantimos que os usuários e as organizações tenham controle sobre
            os próprios dados.
          </p>
        </div>
      ),
    },
    {
      key: "3",
      question:
        "Qual é a diferença entre o Google Workspace e os apps gratuitos do Google?",
      answer: (
        <div className="text-[14px] text-[#5f6368] leading-6">
          <p>
            Com o Google Workspace, você tem acesso a serviços avançados não
            incluídos nos apps gratuitos do Google, como e-mail comercial
            personalizado (br.suaempresa), mais armazenamento em nuvem no Gmail
            e no Drive, videoconferências mais longas com recursos interativos,
            opções de controles administrativos e de segurança em toda Intranet
            e SEO, suporte por telefone e muito mais.
          </p>
        </div>
      ),
    },
    {
      key: "4",
      question: "Posso adquirir apps individualmente do Google Workspace?",
      answer: (
        <div className="text-[14px] text-[#5f6368] leading-6">
          <p>
            Os produtos Google fazem parte do Google Workspace foram criados
            para trabalhar de forma integrada. Quando você recebe um convite
            para uma reunião no Gmail, por exemplo, ele já vira um evento no
            Google Agenda. Quando você abre um comentário nos Documentos Google
            ou Planilhas Google a partir do Gmail, você pode responder na hora
            na hora. Com um só clique, você acessa uma chamada no Meet direta de
            sua caixa de entrada no gmilsho. As suas delas dessas funções no
            Gmail fazem o que precisa seja feito sem sair do app trabalha. Mas,
            se preferir o Google Workspace, você pode adicionar vários serviços
            que mais se adequem ao seu negócio.
          </p>
        </div>
      ),
    },
    {
      key: "5",
      question:
        "Posso usar o Google Workspace quando estiver sem conexão de internet?",
      answer: (
        <div className="text-[14px] text-[#5f6368] leading-6">
          <p>
            Sim. Com o Gmail Off-line, você é capaz respondi, arquivi e
            pesquisar suas mensagens no Gmail mesmo sem uma conexão com a
            internet. Você também pode acessar e editar seus documentos
            armazenados no Drive quando estiver off-line e assim, trabalhar de
            qualquer lugar.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex text-[#5f6368] bg-[#f7f7f7] px-10 md:px-32 w-full py-16 justify-center">
      <div className="w-full max-w-4xl">
        <div className="w-full">
          <h2 className="text-[32px] font-normal text-[#3c4043] mb-8">
            Nós temos as respostas que você precisa
          </h2>

          <div className="mb-2 justify-end flex">
            <Button
              type="default"
              className="border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white"
              onClick={handleExpandAll}
            >
              {activeKeys.length === faqItems.length
                ? "Fechar tudo"
                : "Abrir tudo"}
            </Button>
          </div>

          <Collapse
            ghost
            className="bg-white border-none w-full max-w-4xl"
            activeKey={activeKeys}
            onChange={(keys) =>
              setActiveKeys(Array.isArray(keys) ? keys : [keys].filter(Boolean))
            }
            expandIconPosition="end"
          >
            {faqItems.map((item, index) => (
              <>
                {index === 0 && <hr className="mb-4 mt-4 border-[#dadce0]" />}

                <Panel
                  header={
                    <span className="text-[16px] font-medium text-[#3c4043]">
                      {item.question}
                    </span>
                  }
                  key={item.key}
                  className="border-b border-[#dadce0] last:border-b-0"
                >
                  {item.answer}
                </Panel>
                <hr className="mb-4 mt-4 border-[#dadce0]" />
              </>
            ))}
          </Collapse>

          {/* <div className="mt-8">
              <a
                href="#"
                className="text-[#1a73e8] text-[14px] underline hover:no-underline"
              >
                Veja perguntas mais frequentes
              </a>
            </div> */}
        </div>
      </div>
    </div>
  );
}
