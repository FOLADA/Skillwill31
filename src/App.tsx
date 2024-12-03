import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ForDynamic from "./pages/ForDynamic";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<ForDynamic name={name} />} />
      </Routes>
    </>
  );
};

export default App;
