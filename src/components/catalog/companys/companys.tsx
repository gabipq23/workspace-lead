export default function Companys() {
  return (
    <div className="flex flex-col gap-4 text-[#5f6368] bg-[#f7f7f7] items-center justify-around text-center px-10 md:px-20 md:justify-center w-full py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[24px] md:text-[32px] font-normal text-[#3c4043] leading-[40px] max-w-4xl mx-auto">
            É assim que algumas das empresas de maior sucesso fazem para se
            conectar, criar e colaborar.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/alpargatas.png"
              alt="Alpargatas"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/creditas.png"
              alt="Creditas"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/enjoei.png"
              alt="Enjoei"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/magno.png"
              alt="Magno"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/ifood.png"
              alt="iFood"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/loggi.png"
              alt="Loggi"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/magalu.png"
              alt="Magazine Luiza"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/porto.png"
              alt="Porto"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/recife.png"
              alt="Recife"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>

          <div className="flex items-center justify-center h-20">
            <img
              src="/imagens png/tembici.png"
              alt="Tembici"
              className="max-h-18 max-w-full object-contain  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
