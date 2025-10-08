import { useState } from "react";
import { Button, Form, Input, Tooltip } from "antd";
import { ChevronLeft, CircleQuestionMark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactInfo() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleFormChange = () => {
    const fieldsValue = form.getFieldsValue();
    const hasAllFields =
      fieldsValue.nome && fieldsValue.sobrenome && fieldsValue.email;

    const fieldsError = form.getFieldsError();
    const hasErrors = fieldsError.some(({ errors }) => errors.length > 0);

    setIsFormValid(hasAllFields && !hasErrors);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        navigate("/order-company");
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
        type="default"
        variant="outlined"
        className="absolute left-8 top-40 md:top-70 "
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className=" text-gray-600" />
      </Button>

      <div className="flex items-center justify-center px-4 min-h-[calc(100vh-191px)]">
        <div className="flex flex-col max-w-lg w-full pt-16 md:pt-0">
          <h2 className="text-2xl text-gray-800 text-start mb-4">
            Informações de contato
          </h2>

          <p className="text-sm text-[#5f6368] text-start mb-6">
            Criar a conta do Google Workspace fará de você o administrador dela.{" "}
            <Tooltip
              placement="bottomLeft"
              title={
                <div className="text-sm">
                  <div className="font-semibold mb-2">
                    O que é um administrador?
                  </div>
                  <div className="mb-3">
                    Admins são as pessoas que gerenciam a conta do Google
                    Workspace da empresa. Eles podem adicionar e remover
                    usuários, redefinir senhas, pagar contas etc.
                  </div>
                  <div>
                    Você pode atribuir a função de admin a outra pessoa mais
                    tarde.
                  </div>
                </div>
              }
            >
              <CircleQuestionMark className="w-4 h-4 cursor-pointer inline" />
            </Tooltip>
          </p>
          <Form
            form={form}
            onFinish={handleSubmit}
            onFieldsChange={handleFormChange}
          >
            <Form.Item
              className="mb-6"
              name="nome"
              rules={[
                {
                  max: 16,
                  required: true,
                  message: "Adicione um nome",
                },
                {
                  pattern: /^[A-Za-zÀ-ÿ\s]+$/,
                  message: "Apenas letras são permitidas",
                },
              ]}
            >
              <Input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{
                  fontSize: "16px",

                  height: "48px",
                }}
              />
            </Form.Item>

            <Form.Item
              className="mb-6"
              name="sobrenome"
              rules={[
                {
                  max: 16,
                  required: true,
                  message: "Adicione um sobrenome",
                },
                {
                  pattern: /^[A-Za-zÀ-ÿ\s]+$/,
                  message: "Apenas letras são permitidas",
                },
              ]}
            >
              <Input
                placeholder="Sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                style={{
                  fontSize: "16px",

                  height: "48px",
                }}
              />
            </Form.Item>

            <Form.Item
              className="mb-6"
              name="email"
              rules={[
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email inválido",
                },
              ]}
            >
              <Input
                placeholder="Endereço de e-mail atual"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  fontSize: "16px",

                  height: "48px",
                }}
              />
            </Form.Item>
          </Form>

          <div className="">
            <Button
              type="primary"
              size="large"
              disabled={!isFormValid}
              onClick={handleSubmit}
              className="px-8 self-start"
            >
              Avançar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
