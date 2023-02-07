import { StyledBackBtn } from './BackButton.styled';
import { BsArrowLeftSquare } from 'react-icons/bs';
export const BackButton = ({ onClick, children }) => {
  return (
    <StyledBackBtn type="button" onClick={onClick}>
      <BsArrowLeftSquare size="24" />
      {children}
    </StyledBackBtn>
  );
};
