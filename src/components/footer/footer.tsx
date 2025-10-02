function Footer() {
  return (
    <footer className="text-[#5f6368] bg-[#f7f7f7] px-20 w-full py-4">
      <hr className="border-[#dadce0] border-t-1 mb-4" />
      <div className="flex gap-130 items-center">
        <img src="/logo-google-gray.svg" className="h-6" alt="Logo Footer" />
        <div className="flex gap-6">
          <p>Privacidade</p>
          <p>Termos</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
