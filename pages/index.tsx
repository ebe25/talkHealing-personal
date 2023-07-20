import { Welcome } from '../components/modules/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/elements/ColorSchemeToggle/ColorSchemeToggle';
import FaqQuestionsAnswers from './faq-questions-answers/index';

import { useStores } from "@/models";

export default function HomePage() {
  const {userStore}=useStores()
  userStore.loginUser(
    "kaushalv568@gmail.com","admin@123"
  ).then(({ok})=>{
    userStore.getLoginUserData().then((res)=>{
      // console.log(userStore.toJSON())

    })
  })
  
  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      <FaqQuestionsAnswers />
    </>
  );
}
