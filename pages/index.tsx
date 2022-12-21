import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {DoubleHeader} from './components/Header'
import { HeroBullets } from './components/Hero';

export default function HomePage() {
  return (
    <>
      {/*<Welcome />
      <ColorSchemeToggle />*/}
      <DoubleHeader />
      <HeroBullets />

    </>
  );
}
