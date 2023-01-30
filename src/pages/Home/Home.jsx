import { HeroTitle, HeroTitleWord } from './Home.styled';
import { Container } from '../../components/App/App.styled';

export default function Home() {
  return (
          // {/* // <HeroImg> */}
      <Container>
        <HeroTitle>
         Now, managing your contacts is much easier, than you could even imagine! <HeroTitleWord>Please, sign in to continue :)</HeroTitleWord>
        </HeroTitle>
      </Container>
    // {/* // </HeroImg> */}
  );
}