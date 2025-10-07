function Header() {
  return (
    // bg-[#f7f7f7]
    <div className=" z-2 sticky top-0 ">
      <header className="flex justify-between gap-4 items-center p-2 bg-[#f7f7f7] px-5 py-4 md:px-16 lg:px-24 shadow-sm">
        <div className="">
          <img
            src="\Google_Workspace_Logo.svg"
            className="h-5 md:h-7"
            alt="Home"
          />
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.goldempresas.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Gold-Logo.png"
              className="h-5 md:h-9"
              alt="Gold Empresas"
            />
          </a>
          <span className="text-neutral-400 text-[20px] md:text-[24px] font-light">
            |
          </span>
          <img
            src="/Vivo-Empresas.png"
            className="h-5 md:h-8 hover:cursor-pointer"
            alt="Vivo Empresas"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
