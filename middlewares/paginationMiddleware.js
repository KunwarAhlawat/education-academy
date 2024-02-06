const paginate = (data, page) => {
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  let prevPage = Math.max(page - 1, 1);
  let nextPage = Math.min(page + 1, totalPages);

  return {
    paginatedData,
    totalPages,
    prevPage,
    nextPage,
  };
};

module.exports = paginate;
