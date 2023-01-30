import { HeroTitle, HeroTitleWord } from './Home.styled';
import { Container } from '../../components/App/App.styled';

export default function Home() {
  return (
          // {/* // <HeroImg> */}
      <Container>
        <HeroTitle>
         Now, manage your contacts is easier, than you can imagine! <HeroTitleWord>Please, sign in to continue :)</HeroTitleWord>
        </HeroTitle>
      </Container>
    // {/* // </HeroImg> */}
  );
}