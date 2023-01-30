import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './SpinningLoader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="75"
        visible={true}
      />
    </LoaderContainer>
  );
};

