import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import Header from "./components/Header/index.js";
import Main from "./components/Main/index.js";
import Form from "./components/Form/index.js";
import Footer from "./components/Footer/index.js";
import EnteriesSection from "./components/EnteriesSection/index.js";
import { uid } from "uid";

function App() {
  const initialEntries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
      isFavorite: false,
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
      isFavorite: false,
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
      isFavorite: false,
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
      isFavorite: false,
    },
  ];

  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

  const favoriteEntries = entries.filter((entry) => entry.isFavorite === true);

  const [filter, setFilter] = useState("all");
  function handleAddEntry(newEntry) {
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
  }
  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }
  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }
  function handleShowAllEntries() {
    setFilter("all");
  }
  return (
    <>
      <Header></Header>
      <Main>
        <Form onAddEntry={handleAddEntry}></Form>
        <EnteriesSection
          filter={filter}
          entries={filter === "all" ? entries : favoriteEntries}
          onToggleFavorite={handleToggleFavorite}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
          allEntriesCount={entries.length}
          favoriteEntriesCount={favoriteEntries.length}
        ></EnteriesSection>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
