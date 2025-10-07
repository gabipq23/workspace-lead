function BannerInfo() {
  return (
    <div className="flex flex-col gap-4 bg-[#f7f7f7] items-center justify-around text-center px-10 md:px-46 md:justify-center w-full py-4 md:py-12 md:pb-0">
      <p
        style={{ fontWeight: "bold", lineHeight: "1.3", margin: 0 }}
        className="text-[26px] md:text-[44px] text-[#202124]"
      >
        Encontre o seu plano ideal.
      </p>
      <p className="text-[16px] md:text-[18px] text-[#5f6368]">
        O Google Workspace tem o plano ideal para o seu negócio. A IA do Google
        ajuda sua equipe a ter ideias, escrever, revisar e organizar de forma
        fácil e colaborativa.
      </p>
      <p
        style={{ fontWeight: "normal", margin: 0 }}
        className="text-[20px] text-[#202124]"
      >
        O Google Workspace inclui:
      </p>
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-8 pt-6 ">
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (14).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Gmail</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (13).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Drive</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (12).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Meet</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (11).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Calendar</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (10).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Chat</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (1).png"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Gemini</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (9).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Docs</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (8).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Sheets</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (7).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Slides</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (6).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Vids</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (5).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Keep</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (4).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Sites</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (3).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">Forms</p>
        </span>
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (2).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">NotebookLM</p>
        </span>{" "}
        <span className="flex flex-col gap-1 items-center justify-center">
          <img
            src="/icone-google (1).svg"
            className="h-[44px] "
            alt="Ícone 1"
          />
          <p className="text-[12px]">AppSheet</p>
        </span>
      </div>
    </div>
  );
}

export default BannerInfo;
