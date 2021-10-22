import { useState } from "react";
import InputCard from ".";
import { Paper } from "./styles";
export default function InputContainer() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div>
      {!!showCard && <InputCard setShowCard={setShowCard} />}
      <Paper onClick={() => setShowCard(true)}>
        <p> + Adicionar novo cartão </p>
      </Paper>
    </div>
  );
}
