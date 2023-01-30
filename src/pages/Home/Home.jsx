import { HeroTitle, HeroTitleWord } from './Home.styled';
import { Container } from '../../components/App/App.styled';

export default function Home() {
  return (
    // <HeroImg>
      <Container>
        <HeroTitle>
          Create your personal <HeroTitleWord>phonebook</HeroTitleWord>
        </HeroTitle>
      </Container>
    // </HeroImg>
  );
}