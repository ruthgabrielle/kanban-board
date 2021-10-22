import KanbanBoard from "./pages/kanbanBoard";
import GlobalStyle from './styles/global';
import CardsApi from './services/cardsApi'
function App() {

  const addMoreCard = (content) => {
    console.log(content)
  }
  
  return (
    <CardsApi.Provider value={addMoreCard}>
      <KanbanBoard />
      <GlobalStyle />
    </CardsApi.Provider>
  );
}

export default App;
