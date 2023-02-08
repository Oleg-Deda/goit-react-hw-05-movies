import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const MoviesGalleryItemWrp = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  border-radius: 4px;
  color: #ffffff;
  background: linear-gradient(145deg, #1fe509, #a8b849);
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  &:hover,
  &:focus {
    color: #80ff00;
    transform: scale(1.03);
    box-shadow: 2px 6px 8px #17bfb1, -2px -2px 6px #00ff4b;
    cursor: pointer;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  &.active {
    color: #75e596;
    background: linear-gradient(145deg, #b0aac9, #519fc3);
  }
`;

export const MoviesGalleryImageWrp = styled.div`
  display: block;
`;

export const MoviesGalleryImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 545px;
`;

export const MoviesGalleryContentWrp = styled.div`
  padding: 20px 10px;
`;

export const MoviesGalleryTitle = styled.h1`
  font-size: 22px;
  font-weight: 500;
  height: 80px;
`;

export const MoviesGalleryDate = styled.p`
  font-weight: 500;
`;

export const MoviesGalleryWrp = styled.span`
  font-weight: 400;
`;
