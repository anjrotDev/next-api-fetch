export const cleanData = (data, notNull) => {
  return data
    .filter(x => x[notNull] !== null)
    .map(movie => {
      return movie;
    });
};
