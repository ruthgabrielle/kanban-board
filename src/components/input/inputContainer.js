import { useState } from "react";
import InputCard from ".";
import { Paper } from "./styles";
export default function InputContainer({ columnId }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div>
      {!!showCard && (
        <InputCard setShowCard={setShowCard} columnId={columnId} />
      )}
      <Paper onClick={() => setShowCard(true)}>
        <p> + Adicionar novo cartão </p>
      </Paper>
    </div>
  );
}
