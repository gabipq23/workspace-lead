export default function Companys() {
  return (
    <div className="flex flex-col gap-4 text-[#5f6368] bg-[#f7f7f7] items-center justify-around text-center px-20 md:justify-center w-full py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-normal text-[#3c4043] leading-[40px] max-w-4xl mx-auto">
            É assim que algumas das empresas de maior
            <br />
            sucesso fazem para se conectar, criar e colaborar.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          <div className="flex items-center justify-center h-20">
            <img
              src="/alpargatas-logo.png"
              alt="Alpargatas"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/creditas-logo.png"
              alt="Creditas"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/magno-logo.png"
              alt="Magno"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/enjoei-logo.png"
              alt="Enjoei"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/ifood-logo.png"
              alt="iFood"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/loggi-logo.png"
              alt="Loggi"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/magalu-logo.png"
              alt="Magazine Luiza"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/porto-logo.png"
              alt="Porto"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/recife-logo.png"
              alt="Recife"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/tembici-logo.png"
              alt="Tembici"
              className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
