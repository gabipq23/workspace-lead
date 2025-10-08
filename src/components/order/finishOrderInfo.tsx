import { Button, Form, Input } from "antd";
import {
  Building2,
  ChevronLeft,
  CircleUserRound,
  CreditCard,
  Edit,
  FileUser,
  IdCard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { PatternFormat, type NumberFormatValues } from "react-number-format";
import { useState } from "react";

const CNPJInput = (
  props: Omit<React.ComponentProps<typeof PatternFormat>, "format">
) => (
  <PatternFormat
    {...props}
    format="##.###.###/####-##"
    customInput={Input}
    placeholder="CNPJ"
    size="large"
    style={{ fontSize: "16px", height: "48px", width: "50%" }}
  />
);

export default function FinishOrderInfo() {
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [cnpj, setCnpj] = useState("13.245.678/0001-95");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [, forceUpdate] = useState({});

  const handleFormChange = () => {
    const fieldsValue = form.getFieldsValue();
    const hasAllFields = fieldsValue.cnpj;
    const fieldsError = form.getFieldsError();
    const hasErrors = fieldsError.some(({ errors }) => errors.length > 0);

    setIsFormValid(hasAllFields && !hasErrors);
  };

  const handleSaveAddress = () => {
    setIsEditingAddress(false);
    forceUpdate({});
  };

  const handleCancelAddress = () => {
    form.resetFields(["nome", "endereco", "complemento", "cep", "cidade"]);
    setIsEditingAddress(false);
    forceUpdate({});
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        navigate("/order-finish");
        window.scrollTo(0, 0);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <div className="bg-[#f7f7f7] min-h-[calc(100vh-157px)] relative">
      <Button
        shape="circle"
        type="text"
        className="absolute left-8 top-40 md:top-70 "
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="text-gray-600" size={20} />
      </Button>

      <div className="flex flex-col items-center justify-center px-4 min-h-[calc(100vh-191px)]">
        <Form
          form={form}
          onFinish={handleSubmit}
          onFieldsChange={handleFormChange}
          initialValues={{
            nome: "Antonio da Silva",
            endereco: "Rua das Flores, 123",
            complemento: "Sala 1020",
            cep: "01000-000",
            cidade: "São Paulo, SP",
          }}
        >
          <div className="max-w-[800px] w-full pt-16 md:pt-0 ">
            <h1 className="text-[32px] text-gray-800 ">
              Analisar e finalizar compra
            </h1>
            <hr className="my-6 border-gray-300" />

            <div className="text-[#5f6368]">
              <p className="text-[16px] text-gray-800">Business Standard</p>

              <div className="flex">
                <div className="w-4/5 flex flex-col gap-1 text-gray-500">
                  <p className="text-[14px]" style={{ margin: 0 }}>
                    Limitado a 10 usuários. Você pode cancelar a assinatura a
                    qualquer momento.
                  </p>
                  <p className="text-[14px]" style={{ margin: 0 }}>
                    {" "}
                    Ocorre no fim de todo mês.
                  </p>
                </div>

                <div className="w-2/5 text-right flex flex-col gap-1">
                  <p
                    className="text-[14px] text-gray-800"
                    style={{ margin: 0 }}
                  >
                    R$ 98,00 mensalmente
                  </p>{" "}
                  <p
                    className="text-[14px] text-gray-500"
                    style={{ margin: 0 }}
                  >
                    + imposto aplicável
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div className="p-6 pl-0 pt-4">
              <h2 className="text-[18px] text-gray-800">
                Informações do cliente
              </h2>
              <p className="text-gray-500 text-[14px] mb-6">
                Suas informações são salvas em um perfil para pagamentos
                associados à sua Conta do Google que é compartilhado em todos os
                Serviços do Google.
              </p>

              <div className="mb-8 mt-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <div>
                      <CircleUserRound size={20} />
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">
                    Tipo de conta
                  </span>
                </div>
                <div className="ml-9">
                  <span className="text-gray-500 text-[14px]">Organização</span>
                </div>
              </div>

              <div className="mb-8 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <div>
                      <IdCard size={20} />
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">
                    Informações fiscais
                  </span>
                </div>

                <div className="ml-9 space-y-3">
                  <div>
                    <span className="text-[13px] text-gray-500 block mb-2">
                      Status das informações fiscais
                    </span>
                    <div className="flex items-center gap-2 text-gray-800">
                      Pessoa jurídica
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 block mb-1">
                      CNPJ
                    </span>

                    <Form.Item
                      name="cnpj"
                      initialValue={cnpj}
                      rules={[
                        { required: true, message: "Por favor, insira o CNPJ" },
                      ]}
                    >
                      <CNPJInput
                        value={cnpj}
                        onValueChange={(values: NumberFormatValues) =>
                          setCnpj(values.value)
                        }
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <div>
                      <Building2 size={20} />
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">
                    Nome e endereço
                  </span>
                  <Button
                    type="text"
                    size="small"
                    onClick={() => setIsEditingAddress(!isEditingAddress)}
                  >
                    <Edit size={16} className="text-gray-400" />
                  </Button>
                </div>
                <div className="ml-9 flex flex-col">
                  {isEditingAddress ? (
                    <>
                      <Form.Item
                        name="nome"
                        className="mb-0"
                        style={{ marginBottom: 8, marginTop: 0 }}
                      >
                        <Input
                          placeholder="Nome completo"
                          style={{
                            fontSize: "16px",
                            width: "50%",
                            height: "48px",
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="endereco"
                        className="mb-0"
                        style={{ marginBottom: 8, marginTop: 0 }}
                      >
                        <Input
                          placeholder="Endereço"
                          style={{
                            fontSize: "16px",
                            width: "50%",
                            height: "48px",
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="complemento"
                        className="mb-0"
                        style={{ marginBottom: 8, marginTop: 0 }}
                      >
                        <Input
                          placeholder="Complemento"
                          style={{
                            fontSize: "16px",
                            width: "50%",
                            height: "48px",
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="cep"
                        className="mb-0"
                        style={{ marginBottom: 8, marginTop: 0 }}
                      >
                        <Input
                          placeholder="CEP"
                          style={{
                            fontSize: "16px",
                            width: "50%",
                            height: "48px",
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="cidade"
                        className="mb-0"
                        style={{ marginBottom: 8, marginTop: 0 }}
                      >
                        <Input
                          placeholder="Cidade, Estado"
                          style={{
                            fontSize: "16px",
                            width: "50%",
                            height: "48px",
                          }}
                        />
                      </Form.Item>
                      <div className="flex gap-2 mt-2">
                        <Button
                          type="primary"
                          size="middle"
                          onClick={handleSaveAddress}
                        >
                          Salvar
                        </Button>
                        <Button size="middle" onClick={handleCancelAddress}>
                          Cancelar
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-[14px] text-gray-500 block">
                        {form.getFieldValue("nome")}
                      </span>
                      <span className="text-[14px] text-gray-500">
                        {form.getFieldValue("endereco")}
                      </span>
                      <span className="text-[14px] text-gray-500">
                        {form.getFieldValue("complemento")}
                      </span>
                      <span className="text-[14px] text-gray-500">
                        {form.getFieldValue("cep")}
                      </span>
                      <span className="text-[14px] text-gray-500">
                        {form.getFieldValue("cidade")}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <div>
                      <FileUser size={20} />
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">
                    Contato principal
                  </span>
                </div>
                <div className="ml-9 flex flex-col gap-1">
                  <span className="text-[14px] text-gray-500 block">
                    Teste teste
                  </span>
                  <span className="text-[14px] text-gray-500">
                    teste@goldempresas.com.br
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 pl-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <div>
                    <CreditCard size={20} />
                  </div>
                </div>
                <span className="font-medium text-gray-900">
                  Forma de pagamento
                </span>
              </div>

              <div className="ml-9">
                <div className="flex items-center gap-3 p-3 ">
                  <span className="text-[18px] text-gray-900">Fatura Vivo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[800px] w-full pt-16 pb-6">
            <p className="text-sm text-gray-500 mb-4">
              Suas informações são salvas em um perfil para pagamentos
              associados à sua Conta do Google que é compartilhado em todos os
              Serviços do Google.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              As informações pessoais que você fornecer aqui são eletrônicas as
              au perfil para pagamentos. Elas serão armazenadas com segurança e
              tratadas de acordo com a Política de Privacidade do Google.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Ao clicar em <strong>Concordar e finalizar</strong>, você concorda
              com os{" "}
              <a href="#" className="text-blue-600 underline">
                Termos do Google Workspace Agreements
              </a>{" "}
              e{" "}
              <a href="#" className="text-blue-600 underline">
                Termos e Condições complementares do período de teste gratuito
                do Google Workspace Agreements
              </a>
              .
            </p>

            <Button
              type="primary"
              size="large"
              className="self-start "
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              Concordar e finalizar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
