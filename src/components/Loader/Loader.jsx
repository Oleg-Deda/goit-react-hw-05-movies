import { createPortal } from 'react-dom';
import { Dna } from 'react-loader-spinner';
import { LoadingWpr } from './Loader.styled';

const LoaderSpiner = document.querySelector('#loader');

export const Loader = () => {
  return createPortal(
    <LoadingWpr>
      <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
      />
    </LoadingWpr>,
    LoaderSpiner
  );
};
