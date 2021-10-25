import { Button, Container, Input, InputPaper, Select } from "./styles";
import { MdClear } from "react-icons/md";
import { useContext, useState } from "react";
import cardsApi from "../../services/cardsApi";

export default function InputCard({ setShowCard, columnId }) {
  const [content, setContent] = useState("");

  const { addMoreCard } = useContext(cardsApi);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleConfirm = () => {
    addMoreCard(content, columnId);
    console.log(columnId);
    setShowCard(false);
  };

  return (
    <div>
      <Container>
        <InputPaper>
          <Input
            type="text"
            placeholder="Digite o conteúdo da tarefa"
            onBlur={() => setShowCard(false)}
            onChange={handleChange}
            value={content}
          />
          <Select placeholder="Selecione a prioridade">
            <option value="#5CC4FF"> ALTA</option>
            <option value="#945AD1" selected>
              NORMAL
            </option>
            <option value="#59D090">BAIXA</option>
          </Select>
        </InputPaper>
      </Container>
      <div>
        <Button onClick={handleConfirm}> Adicionar cartão </Button>
        <MdClear onClick={() => setShowCard(false)} />
      </div>
    </div>
  );
}
