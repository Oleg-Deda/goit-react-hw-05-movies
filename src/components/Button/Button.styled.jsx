import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  padding: 8px 16px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  background: linear-gradient(145deg, #0d013e, #05983d);
     cursor: pointer;
  &:hover,
  &:focus {
    color: #5dda21;
    transform: scale(1.1);
    box-shadow: 2px 6px 8px #5dda21, -2px -2px 6px #5dda21;
  }
`;
