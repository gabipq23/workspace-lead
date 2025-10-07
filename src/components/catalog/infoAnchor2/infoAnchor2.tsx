import { useState, useEffect } from "react";

export default function InfoAnchor2() {
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  console.log(isTransitioning);

  const sections = [
    {
      key: "ia-google",
      title: "Dê vida às suas melhores ideias com a IA do Google",
      description:
        "Turbine sua produtividade usando os recursos do Google Workspace com Gemini e aumente a eficiência das suas equipes na criação de e-mails, documentos, apresentações ou vídeos.",
      image: "/imagesAnchorInfo/4.png",
    },
    {
      key: "ferramentas-integradas",
      title: "Ferramentas úteis e integradas",
      description:
        "Seja em planilhas, chats, e-mails ou videochamadas, o trabalho flui perfeitamente entre os apps. Além disso, com recursos úteis como tela inteligente e correções gramaticais, as equipes trabalham de forma muito mais eficiente.",
      image: "/imagesAnchorInfo/3.png",
    },
    {
      key: "email-personalizado",
      title: "E-mail personalizado com o seu domínio",
      description:
        "Com o Google Workspace, você chega de um jeito muito mais profissional na caixa de entrada do seu cliente. Crie uma conta no Gmail com o seu domínio e tenha e-mails personalizados com o nome da empresa para toda a sua equipe.",
      image: "/imagesAnchorInfo/2.png",
    },
    {
      key: "armazenamento",
      title: "Mais espaço para armazenar seus arquivos",
      description:
        "Pesquise e encontre facilmente todos os seus arquivos no Google Drive. Você pode armazenar centenas de tipos de arquivos e compartilhar com toda a sua equipe de um jeito simples, seguro e eficiente.",
      image: "/imagesAnchorInfo/1.png",
    },
  ];

  // Auto-play: troca automática a cada 15 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [sections.length]);

  const handleSectionClick = (index: number) => {
    if (index !== activeSection) {
      setIsTransitioning(true);
      setActiveSection(index);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col gap-4 text-gray-600 bg-[#f7f7f7] items-center justify-center w-full py-16 px-4">
      <div className="text-center mb-12 max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-normal text-gray-900 leading-tight mb-4">
          Principais recursos para otimizar o seu negócio
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Layout Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna direita - Imagem (Desktop apenas) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full overflow-hidden">
              {/* Imagem com transição */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                {sections.map((section, index) => (
                  <img
                    key={section.key}
                    src={section.image}
                    alt={section.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      activeSection === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Coluna esquerda - Accordion */}
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div
                key={section.key}
                className="cursor-pointer group"
                onClick={() => handleSectionClick(index)}
              >
                <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white">
                  {/* Barra indicadora lateral com progresso */}
                  <div className="flex-shrink-0 w-1 relative self-stretch">
                    {/* Barra de fundo */}
                    <div
                      className={`w-1 h-full rounded-full transition-all duration-500 ${
                        activeSection === index
                          ? "bg-gray-200"
                          : "bg-gray-300 group-hover:bg-gray-400"
                      }`}
                    />

                    {/* Barra de progresso que preenche de cima para baixo */}
                    {activeSection === index && (
                      <div
                        className="absolute top-0 left-0 w-1 bg-blue-600 rounded-full"
                        style={{
                          animation: "fillDown 15s linear",
                          height: "0%",
                        }}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Título */}
                    <h3
                      className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                        activeSection === index
                          ? "text-gray-900"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {section.title}
                    </h3>

                    {/* Descrição expansível */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        activeSection === index
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layout Mobile - Cada seção com sua imagem */}
        <div className="lg:hidden space-y-6">
          {sections.map((section, index) => (
            <div
              key={section.key}
              className="cursor-pointer group"
              onClick={() => handleSectionClick(index)}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-4">
                  {/* Barra indicadora lateral com progresso */}
                  <div className="flex-shrink-0 w-1 relative self-stretch min-h-[60px]">
                    {/* Barra de fundo */}
                    <div
                      className={`w-1 h-full rounded-full transition-all duration-500 ${
                        activeSection === index
                          ? "bg-gray-200"
                          : "bg-gray-300 group-hover:bg-gray-400"
                      }`}
                    />

                    {/* Barra de progresso que preenche de cima para baixo */}
                    {activeSection === index && (
                      <div
                        className="absolute top-0 left-0 w-1 bg-blue-600 rounded-full"
                        style={{
                          animation: "fillDown 15s linear",
                          height: "0%",
                        }}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Título */}
                    <h3
                      className={`text-base font-medium transition-colors duration-300 ${
                        activeSection === index
                          ? "text-gray-900"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {section.title}
                    </h3>

                    {/* Descrição expansível */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        activeSection === index
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Imagem da seção (Mobile) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeSection === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
          
          @keyframes fillDown {
            from {
              height: 0%;
            }
            to {
              height: 100%;
            }
          }
        `,
        }}
      />
    </div>
  );
}
