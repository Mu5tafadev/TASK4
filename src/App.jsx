import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Space from "./components/Space/Space";
import MainTable from "./components/MainTable/MainTable";

function App() {
  
  return (
    <>
      <Header />
      <Space height={30} />
      <Container>
        <MainTable />
      </Container>
    </>
  );
}

export default App;
