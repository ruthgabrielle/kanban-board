import { Button, Container, Input, InputPaper } from "./styles";
import { MdClear } from "react-icons/md";
import { useState } from "react";
export default function InputCard({ setShowCard }) {
  return (
    <div>
      <Container>
        <InputPaper>
          <Input
            type="text"
            placeholder="Digite o conteúdo da tarefa"
            onBlur={() => setShowCard(false)}
          />
        </InputPaper>
      </Container>
      <div>
        <Button> Adicionar cartão </Button>
        <MdClear onClick={() => setShowCard(false)} />
      </div>
    </div>
  );
}
