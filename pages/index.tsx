import { Welcome } from '../components/modules/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/elements/ColorSchemeToggle/ColorSchemeToggle';

import { useStores } from "@/models";
import TermsAndCondition from './terms-and-condition';
import PrivacyPolicy from './privacy-policy';
import CookiePolicy from './cookie-policy';
import { Login } from './login';

export default function HomePage() {
  const { userStore } = useStores()
  userStore.loginUser(
    "kaushalv568@gmail.com", "admin@123"
  ).then(({ ok }) => {
    userStore.getLoginUserData().then((res) => {
      // console.log(userStore.toJSON())

    })
  })

  return (
    <>
      <TermsAndCondition />
      {/* <PrivacyPolicy /> */}
      {/* <CookiePolicy /> */}
      {/* <Login /> */}
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
