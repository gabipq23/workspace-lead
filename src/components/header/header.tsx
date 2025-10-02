function Header() {
  return (
    // bg-[#f7f7f7]
    <div className=" z-2 sticky top-0">
      <header className="flex justify-between gap-4 items-center p-4 bg-[#f7f7f7] px-6 md:px-16 lg:px-24 shadow-sm">
        <div>
          <img src="\Google_Workspace_Logo.svg" className="h-8" alt="Home" />
        </div>
        <div className="flex gap-4 items-center ">
          <a
            href="https://www.goldempresas.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="\Gold-Logo.png" className="h-10" alt="Home" />
          </a>
          <p className="text-neutral-300 text-[30px]">|</p>
          <div>
            <img
              src="\Vivo-Empresas.png"
              className="h-8 hover:cursor-pointer"
            ></img>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
