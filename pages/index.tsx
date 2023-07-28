import { Welcome } from '../components/modules/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/elements/ColorSchemeToggle/ColorSchemeToggle';
import FaqQuestionsAnswers from './faq-questions-answers/index';
import { useStores } from "@/models";
import { SignUp } from './signup';
import Profile from './profile';
import Login from './login';

export default function HomePage() {
  
  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
    <SignUp />
    </>
  );
}
