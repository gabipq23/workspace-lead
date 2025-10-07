import { useState } from "react";
import { Button, Input, Radio, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

export default function Order() {
  const [companyName, setCompanyName] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [region, setRegion] = useState("Brasil");
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({
      companyName,
      employeeCount,
      region,
    });
  };

  return (
    <div className="bg-[#f7f7f7] flex items-center justify-center px-4 h-[calc(100vh-157px)]">
      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className=" p-7 max-w-md w-full mx-auto lg:mx-0">
            <h2 className="text-2xl font-normal text-gray-800 mb-6">
              Vamos começar
            </h2>

            <div className="mb-6">
              <Input
                placeholder="Nome da empresa"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="h-12 text-base border-gray-300 rounded-sm"
                style={{
                  fontSize: "16px",
                  padding: "12px 16px",
                }}
              />
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                Número de funcionários, incluindo você
              </p>
              <Radio.Group
                value={employeeCount}
                onChange={(e) => setEmployeeCount(e.target.value)}
                className="w-full"
              >
                <div className="flex flex-col gap-4">
                  <Radio value="so-voce" className="flex items-center">
                    <span className="ml-2 text-base">Só você</span>
                  </Radio>
                  <Radio value="2-9" className="flex items-center">
                    <span className="ml-2 text-base">2 a 9</span>
                  </Radio>
                  <Radio value="10-99" className="flex items-center">
                    <span className="ml-2 text-base">10 a 99</span>
                  </Radio>
                  <Radio value="100-299" className="flex items-center">
                    <span className="ml-2 text-base">100 a 299</span>
                  </Radio>
                  <Radio value="300-mais" className="flex items-center">
                    <span className="ml-2 text-base">300 ou mais</span>
                  </Radio>
                </div>
              </Radio.Group>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2">Região*</p>
              <Select
                value={region}
                onChange={(value) => setRegion(value)}
                className="w-full"
                style={{ height: "48px" }}
              >
                <Option value="Brasil">Brasil</Option>
                <Option value="Argentina">Argentina</Option>
                <Option value="Chile">Chile</Option>
                <Option value="Colombia">Colômbia</Option>
                <Option value="Mexico">México</Option>
              </Select>
            </div>

            <Button
              type="primary"
              size="large"
              disabled={!companyName || !employeeCount || !region}
              onClick={() => (navigate("/order-contact"), handleSubmit())}
            >
              Avançar
            </Button>
          </div>

          <div className="text-center items-center flex flex-col lg:text-left">
            <div className="mb-8">
              <img
                src="/signup1.svg"
                alt="Ilustração de pessoas em reunião"
                className="w-full max-w-sm mx-auto lg:mx-0"
              />
            </div>

            <div className="border-1 border-green-600 rounded-sm p-1 inline-block mb-6">
              <span className="text-green-600 text-sm font-medium">
                Recursos inclusos
              </span>
            </div>

            <h3 className="text-2xl font-normal text-gray-800 mb-4">
              Impressione os clientes em reuniões
            </h3>

            <p className="text-gray-600 text-center leading-relaxed max-w-md mx-auto lg:mx-0">
              Aproveite novos recursos profissionais, como transcrições e
              gravações de reuniões, cancelamento de ruído, enquetes, levantar a
              mão e muito mais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
