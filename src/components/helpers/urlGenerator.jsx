export const urlGenerator = path => {
 
  if (!path) {
    return 'https://placeholder.pics/svg/300x200/29FF16-261E2A/FFC8C8-B674FF/%D0%9D%D0%B5%20%D0%B7%D0%BD%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%D0%BE';
  }

  return path.startsWith('/https')
    ? path.slice(1)
    : `https://image.tmdb.org/t/p/w500/${path}`;
};
