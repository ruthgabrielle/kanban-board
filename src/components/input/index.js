import { Button, Container, Input, InputPaper } from "./styles";
import { MdClear } from "react-icons/md";
import { useContext, useState } from "react";
import cardsApi from "../../services/cardsApi";

export default function InputCard({ setShowCard, columnId }) {
  const [content, setContent] = useState('');

  const { addMoreCard } = useContext(cardsApi);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleConfirm = () => {
    console.log(content)
    console.log(columnId)
    addMoreCard(content, columnId)
    setShowCard(false)
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
        </InputPaper>
      </Container>
      <div>
        <Button onClick={handleConfirm}> Adicionar cartão </Button>
        <MdClear onClick={() => setShowCard(false)} />
      </div>
    </div>
  );
}
