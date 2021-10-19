import { Button, Container, Input, InputPaper } from "./styles";
import { MdClear } from "react-icons/md"

export default function InputCard() {
    return (
        <>
            <Container>
                <InputPaper>
                    <Input type="text"
                        placeholder="Digite o conteúdo da tarefa" />
                </InputPaper>
            </Container>
            <div>
                <Button> Adicionar cartão </Button>
                <div>
                    <MdClear />
                </div>
            </div>
        </>
    )
}