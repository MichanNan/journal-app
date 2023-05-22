import Header from "./components/Header/index.js";
import Main from "./components/Main/index.js";
import Form from "./components/Form/index.js";
import Footer from "./components/Footer/index.js";
import EnteriesSection from "./components/EnteriesSection/index.js";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Form></Form>
        <EnteriesSection></EnteriesSection>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
