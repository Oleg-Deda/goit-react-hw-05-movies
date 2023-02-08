import styled from 'styled-components';

export const SearchForm = styled.form`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: linear-gradient(145deg, #0d013e, #05983d);
  width: 100%;
  outline: 2px #0eddd5;
  max-width: 600px;
  background-color: transparent;
  border-radius: 3px;
  overflow: hidden;
      cursor: pointer;
  &:hover,
  &:focus {
    
    box-shadow: 2px 6px 8px #0eddd5, -2px -2px 6px #0eddd5;
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
    cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  background-color: transparent;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color: #fff;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: #fff;
  }
`;
