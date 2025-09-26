import Form from "./components/Form";
import Entries from "./components/Entries";
import NavBar from "./components/NavBar";
// import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <Form />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Entries" element={<Entries />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

//SET UP THE ROUTES

//ALL COMPONENTS REDNERED IN HERE
