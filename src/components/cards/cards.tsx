import { Button, Tooltip } from "antd";
import { CircleAlert } from "lucide-react";

export default function Cards() {
  return (
    <>
      <div className="flex flex-col gap-4 text-[#5f6368] bg-[#f7f7f7] items-start justify-around text-center px-20 md:justify-center w-full py-16">
        <div className="flex">
          <div className="flex w-[320px] items-center flex-col border-1 border-[#bebebe] rounded-sm p-8 gap-4 bg-[#f7f7f7]w-72 h-[1136px]">
            <p
              style={{ fontWeight: "normal" }}
              className="text-[28px] text-[#202124]"
            >
              Starter
            </p>
            <div className="flex flex-col ">
              <p
                style={{ fontWeight: "normal" }}
                className="text-[36px] text-[#202124] "
              >
                R$32.72
                <span className="text-[16px] ">BRL</span>
              </p>
              <p
                className="text-[16px] text-[#5f6368] "
                style={{ textDecoration: "line-through" }}
              >
                R$40.90**
              </p>
              <div className="flex w-40">
                <p className="text-[14px] text-[#5f6368] flex items-center justify-center text-center">
                  mensais por usuário (contrato de um ano)
                  <Tooltip
                    className="self-end"
                    title="Ou R$39.20 mensais por usuário (cobrança mensal)"
                  >
                    <CircleAlert />
                  </Tooltip>
                </p>
              </div>
            </div>

            <div>
              <Button
                type="default"
                color="blue"
                variant="outlined"
                size="large"
              >
                Iniciar agora
              </Button>
            </div>
            <hr className="border-[#bebebe] my-4" />
            <div className="flex flex-col gap-4 text-left">
              <p className="text-[18px] font-medium text-[#202124] mb-2">
                O plano Starter inclui:
              </p>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone para 30 GB */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    30 GB
                  </p>
                  <p className="text-[14px] text-[#5f6368]">
                    de armazenamento em pool por usuário*
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone para E-mail comercial */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    E-mail comercial personalizado
                  </p>
                  <p className="text-[14px] text-[#5f6368]">
                    voce@suaempresa.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone para Assistente de IA Gemini no Gmail */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Assistente de IA Gemini no Gmail
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone para Converse com a IA no app Gemini */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Converse com a IA no app Gemini
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone para Videochamadas */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Videochamadas, limite de 100 participantes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone para Controles de segurança */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Controles de segurança e gerenciamento
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[320px] items-center flex-col border-1 border-[#5e8ed4] rounded-sm p-8 gap-4 bg-[#f7f7f7]w-72 h-[1136px] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#a8c7fa] text-[#1659b1] px-4 py-1 rounded text-[11px] font-medium">
              MAIS POPULAR
            </div>
            <p
              style={{ fontWeight: "normal" }}
              className="text-[28px] text-[#202124]"
            >
              Standard
            </p>
            <div className="flex flex-col ">
              <p
                style={{ fontWeight: "normal" }}
                className="text-[36px] text-[#202124] "
              >
                R$81.80
                <span className="text-[16px] ">BRL</span>
              </p>
              <div className="flex w-40">
                <p className="text-[14px] text-[#5f6368] flex items-center justify-center text-center">
                  mensais por usuário (contrato de um ano)
                </p>
              </div>
            </div>

            <div>
              <Button type="default" color="blue" variant="solid" size="large">
                Iniciar agora
              </Button>
            </div>
            <hr className="border-[#bebebe] my-4" />
            <div className="flex flex-col gap-4 text-left">
              <p className="text-[18px] font-medium text-[#202124] mb-2">
                Todos os recursos do Starter, e também:
              </p>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Logotipo do produto Google Drive */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">2 TB</p>
                  <p className="text-[14px] text-[#5f6368]">
                    65x mais do que o plano Starter*
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone do Gmail */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    E-mail comercial personalizado
                  </p>
                  <p className="text-[14px] text-[#5f6368]">
                    você@suaempresa.com + layouts personalizados e mala direta
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone de brilho do Gemini */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Assistente de IA Gemini no Gmail, Documentos, Meet e outros
                    apps
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone do NotebookLM */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Assistente de pesquisa com tecnologia de IA (NotebookLM)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone de brilho do Gemini */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Converse com a IA no app Gemini e crie sua própria equipe de
                    especialistas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Logo do produto Google Meet */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Videochamadas com gravação, cancelamento de ruído e limite
                    de 150 participantes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Logotipo do produto Google Agenda */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Páginas de agendamento de horário
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Logo do produto Documentos Google */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Assinatura eletrônica em documentos Google e PDFs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  {/* Ícone de verificação */}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-[#202124]">
                    Ferramenta Google Workspace Migrate para migração de dados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start justify-start text-start">
          <p className="text-[14px] text-[#5f6368] ">
            Os planos Business Starter, Business Standard e Business Plus podem
            ser comprados para 300 usuários no máximo. Não há um mínimo ou
            máximo de usuários nos planos Enterprise. Os clientes do Google
            Workspace podem ter acesso a recursos extras por um período
            promocional limitado.
          </p>

          <p className="text-[14px] text-[#5f6368] ">
            *O Workspace oferece armazenamento em pool flexível por usuário, que
            é compartilhado na organização. O Business Starter inclui 30 GB de
            armazenamento em pool por usuário, o Business Standard inclui 2 TB,
            e o Business Plus e o Enterprise Plus incluem 5 TB. Saiba como
            comprar mais armazenamento para sua organização na Central de Ajuda.
          </p>

          <p className="text-[14px] text-[#5f6368] ">
            **Oferta disponível apenas para novos clientes do Google Workspace.
            Este preço inicial está disponível somente para os primeiros 20
            usuários adicionados, por 12 meses. O preço padrão vai ser aplicado
            a todos os usuários após esse período. O preço real por usuário pode
            variar em cerca de 0,01% devido a arredondamentos. O valor final
            será mostrado antes da conclusão da assinatura.
          </p>
        </div>
      </div>
    </>
  );
}
