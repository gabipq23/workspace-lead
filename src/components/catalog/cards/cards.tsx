import { Button, Carousel, Tooltip } from "antd";
import { CircleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  const StarterCard = () => (
    <div className="flex flex-col">
      <div className="  text-[#1659b1] px-4 py-1 rounded-t-sm text-[11px] font-medium h-6"></div>
      <div className="flex w-[320px] items-center flex-col border-1 border-[#bebebe] rounded-sm p-8 gap-4 bg-[#f7f7f7] h-[1200px]">
        <p style={{ margin: 0 }} className="text-[28px] text-[#202124]">
          Starter
        </p>
        <div className="flex flex-col  ">
          <p
            style={{ margin: 0 }}
            className="text-[36px] text-[#202124] flex items-center gap-1  "
          >
            R$32,72
            <span className="text-[16px] text-[#5f6368]">BRL</span>
          </p>
          <p
            className="text-[16px] text-[#5f6368] "
            style={{ textDecoration: "line-through", margin: 0 }}
          >
            R$40,90**
          </p>

          <div className="flex w-40">
            <p
              style={{ margin: 0 }}
              className="text-[14px] text-[#5f6368] flex items-center justify-center text-center"
            >
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
            onClick={() => navigate("/order")}
          >
            Iniciar agora
          </Button>
        </div>
        <hr className="border-[#bebebe] my-2 w-full" />
        <div className="flex flex-col gap-4 text-left">
          <p
            style={{ margin: 0 }}
            className="text-[18px] font-medium text-[#202124] mb-2"
          >
            O plano Starter inclui:
          </p>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 ">
              <img className="w-6" src="/icone-google (13).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                30 GB
              </p>
              <p style={{ margin: 0 }} className="text-[14px] text-[#5f6368]">
                de armazenamento em pool por usuário*
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (14).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                E-mail comercial personalizado
              </p>
              <p style={{ margin: 0 }} className="text-[14px] text-[#5f6368]">
                voce@suaempresa.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (15).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Assistente de IA Gemini no Gmail
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (1).png" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Converse com a IA no app Gemini
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (12).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Videochamadas, limite de 100 participantes
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (16).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Controles de segurança e gerenciamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const StandardCard = () => (
    <div className="flex flex-col">
      <div className="  bg-[#a8c7fa] text-[#1659b1] px-4 py-1 rounded-t-sm text-[11px] font-medium">
        MAIS POPULAR
      </div>
      <div className="flex w-[320px] items-center flex-col border-1 border-[#5e8ed4]  p-8 gap-4 bg-[#f7f7f7] h-[1200px] relative">
        <p style={{ margin: 0 }} className="text-[28px] text-[#202124]">
          Standard
        </p>
        <div className="flex flex-col ">
          <p
            style={{ margin: 0 }}
            className="text-[36px] text-[#202124] flex items-center gap-1"
          >
            R$81,80
            <span className="text-[16px] text-[#5f6368]">BRL</span>
          </p>
          <div className="h-6"></div>
          <div className="flex w-40">
            <p
              style={{ margin: 0 }}
              className="text-[14px] text-[#5f6368] flex items-center justify-center text-center"
            >
              mensais por usuário (contrato de um ano)
            </p>
          </div>
        </div>

        <div>
          <Button
            type="default"
            color="blue"
            variant="solid"
            size="large"
            onClick={() => navigate("/order")}
          >
            Iniciar agora
          </Button>
        </div>
        <hr className="border-[#bebebe] my-2 w-full" />
        <div className="flex flex-col gap-4 text-left">
          <p
            style={{ margin: 0 }}
            className="text-[18px] font-medium text-[#202124] mb-2"
          >
            Todos os recursos do Starter, e também:
          </p>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (13).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                2 TB
              </p>
              <p style={{ margin: 0 }} className="text-[14px] text-[#5f6368]">
                65x mais do que o plano Starter*
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (14).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                E-mail comercial personalizado
              </p>
              <p style={{ margin: 0 }} className="text-[14px] text-[#5f6368]">
                você@suaempresa.com + layouts personalizados e mala direta
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (15).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Assistente de IA Gemini no Gmail, Documentos, Meet e outros apps
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (2).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Assistente de pesquisa com tecnologia de IA (NotebookLM)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (1).png" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Converse com a IA no app Gemini e crie sua própria equipe de
                especialistas
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (12).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Videochamadas com gravação, cancelamento de ruído e limite de
                150 participantes
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (11).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Páginas de agendamento de horário
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (9).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Assinatura eletrônica em documentos Google e PDFs
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1">
              <img className="w-6" src="/icone-google (16).svg" />
            </div>
            <div>
              <p
                style={{ margin: 0 }}
                className="text-[16px] font-medium text-[#202124]"
              >
                Ferramenta Google Workspace Migrate para migração de dados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col gap-8 text-[#5f6368] bg-[#f7f7f7] items-start justify-around text-center px-20 md:justify-center w-full py-20">
        <div className="flex flex-col md:flex-row lg:flex-row ">
          {/* MOBILE: Carousel com dots selecionáveis */}
          <div className="flex md:hidden w-full justify-center py-8 pb-16 min-h-[1250px]">
            <Carousel
              className="w-full max-w-[320px] custom-carousel"
              dotPosition="bottom"
              dots={{
                className: "custom-carousel-dots",
              }}
              autoplay={false}
              infinite={false}
              swipeToSlide={true}
            >
              <div className="flex justify-center my-6">
                <StarterCard />
              </div>
              <div className="flex justify-center my-6">
                <StandardCard />
              </div>
            </Carousel>
          </div>

          {/* DESKTOP: Cards lado a lado como estava antes */}
          <div className="hidden md:flex flex-row gap-4 justify-center w-full">
            <StarterCard />
            <StandardCard />
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start justify-start text-start">
          <p style={{ margin: 0 }} className="text-[14px] text-[#5f6368] ">
            Os planos Business Starter, Business Standard e Business Plus podem
            ser comprados para 300 usuários no máximo. Não há um mínimo ou
            máximo de usuários nos planos Enterprise. Os clientes do Google
            Workspace podem ter acesso a recursos extras por um período
            promocional limitado.
          </p>

          <p style={{ margin: 0 }} className="text-[14px] text-[#5f6368] ">
            *O Workspace oferece armazenamento em pool flexível por usuário, que
            é compartilhado na organização. O Business Starter inclui 30 GB de
            armazenamento em pool por usuário, o Business Standard inclui 2 TB,
            e o Business Plus e o Enterprise Plus incluem 5 TB. Saiba como
            comprar mais armazenamento para sua organização na Central de Ajuda.
          </p>

          <p style={{ margin: 0 }} className="text-[14px] text-[#5f6368] ">
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
