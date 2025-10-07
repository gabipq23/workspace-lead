export default function Privacy() {
  return (
    <div className="flex flex-col gap-4 text-[#5f6368] bg-[#f7f7f7] items-center justify-around text-center px-10 md:px-20 md:justify-center w-full py-16">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img src="/security.svg" className="h-30 md:h-24" />
        </div>

        <p
          style={{ lineHeight: "1.3" }}
          className="text-[22px] md:text-[32px]  text-[#202124] "
        >
          O Google Workspace segue padrões rigorosos de privacidade
          <br />e segurança, baseados em práticas recomendadas do setor
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  md:mx-24">
        <div className="text-start">
          <div className="flex justify-start mb-2">
            <img src="/security2.svg" />
          </div>
          <h3 className="text-[18px] font-medium text-[#3c4043] mb-2">
            Sistema baseado no navegador e com priorização da nuvem
          </h3>
          <p className="text-[14px] text-[#5f6368] leading-5">
            sempre atualizado: você não precisa usar dispositivos locais, apps
            nativos ou anexos de e-mail
          </p>
        </div>

        <div className="text-start">
          <div className="flex justify-start mb-2">
            <img src="/security3.svg" />
          </div>
          <h3 className="text-[18px] font-medium text-[#3c4043] mb-2">
            Verificação, criptografia e controles integrados
          </h3>
          <p className="text-[16px] text-[#5f6368] leading-5">
            com um modelo de zero trust para que as pessoas trabalhem em
            qualquer lugar sem precisar de VPNs
          </p>
        </div>

        <div className="text-start">
          <div className="flex justify-start mb-2">
            <img src="/security4.svg" />
          </div>
          <h3 className="text-[18px] font-medium text-[#3c4043] mb-2">
            Operação em escala global
          </h3>
          <p className="text-[14px] text-[#5f6368] leading-5">
            para proteger as informações da sua empresa contra ataques de
            phishing, malware, ransomware e à cadeia de suprimentos sem precisar
            de complementos
          </p>
        </div>

        <div className="text-start">
          <div className="flex justify-start mb-2">
            <img src="/security5.svg" />
          </div>
          <h3 className="text-[18px] font-medium text-[#3c4043] mb-2">
            Equipes protegidas
          </h3>
          <p className="text-[14px] text-[#5f6368] leading-5">
            com endpoints seguros (fornecidos pela empresa ou BYOD) que não
            exigem patch, além de proteções fortes contra invasões de contas.
          </p>
        </div>
      </div>

      {/* Link de saiba mais */}
      {/* <div className="text-center mt-12">
          <a
            href="#"
            className="text-[#1a73e8] text-[16px] underline hover:no-underline"
          >
            Saiba mais sobre como o Google Workspace pode proteger sua empresa
          </a>
        </div> */}
    </div>
  );
}
