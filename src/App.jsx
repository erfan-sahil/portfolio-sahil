import { Skills } from "./components/Skills";
import { SocialMediaFooter } from "./components/SocialMediaFooter";
import { UserEmail } from "./components/UserEmail";
import { Projects } from "./components/Projects";
import { Header } from "./components/ui/Header";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <UserEmail></UserEmail>
      <SocialMediaFooter></SocialMediaFooter>
    </>
  );
}

export default App;
