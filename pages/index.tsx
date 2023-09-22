import { Welcome } from '../components/modules/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/elements/ColorSchemeToggle/ColorSchemeToggle';
import TermsAndCondition from './terms-and-condition';
import PrivacyPolicy from './privacy-policy';
import CookiePolicy from './cookie-policy';
import Login from './login';
import FavoriteItems from './favorite-items';

export default function HomePage() {

  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      {/* <Login /> */}
      <FavoriteItems />
    </>
  );
}