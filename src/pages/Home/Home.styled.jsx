import styled from '@emotion/styled';
// import cover from '../img/cover.jpg';

// export const HeroImg = styled.div`
//   width: 100%;
//   height: 800px;
//   padding-top: 80px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   animation: fadeInDown 1000ms forwards;
//   object-fit: scale-down;

//   @media screen and (max-width: 1400px) {
//     background-image: url(${cover});
//   }
// `;

// export const HeroSection = styled.section`
// background-color: black;
// `;

export const HeroTitle = styled.h1`
  width: 100%;
  font-size: 36px;
  color: black;
  text-shadow: 0 0 20px #7f00ff,
             0 0 30px #9831ff,
             0 0 40px #ac59ff;

  margin-right: auto;

  @media screen and (min-width: 1200px) {
    font-size: 56px;
  }
`;

export const HeroTitleWord = styled.span`
  display: block;
  font-size: 48px;
  color: black;
  text-shadow: 0 0 20px #7f00ff,
             0 0 30px #9831ff,
             0 0 40px #ac59ff;
  @media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 1200px) {
    margin-left: 600px;
    font-size: 68px;
  }
`;