import React from "react";
import "./styles/pagination.css";

const Pagination = ({ page, pagesLength, setPage }) => {
  //pokemos x pag
  const pagesPerBlock = 8;
  //  1 / 8   0.125
  //  2       0.250
  //  3       0.375
  //  8         1    ---
  //  9        1.125
  // pagina actual donde estoy
  const currentBlock = Math.ceil(page / pagesPerBlock);
  const blockLength = Math.ceil(pagesLength / pagesPerBlock);

  const arrPages = [];
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  //   const limitPage=initialPage + pagesPerBlock -1
  // 1 *8 8
  // 2    16
  //block ==curretn para saber si estamos en la pagian ultima
  const limitPage =
    blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock;
  for (let i = initialPage; i < limitPage; i++) {
    arrPages.push(i);
  }

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePage = (currentPage) => {
    setPage(currentPage);
  };
  return (
    <div className="pagination">
      {page > 1 && (
        <div
          onClick={handlePrev}
          className="pagination__prev pagination__active"
        >
          &#60;
        </div>
      )}
      <ul className="pagination__container">
        {arrPages?.map((e) => (
          <li
            onClick={() => handlePage(e)}
            className={`pagination__page ${page === e && `pagination__active`}`}
            key={e}
          >
            {e}
          </li>
        ))}
      </ul>
      <div>...</div>
      {page < pagesLength && (
        <div
          onClick={handleNext}
          className="pagination__next pagination__active"
        >
          &#62;
        </div>
      )}
    </div>
  );
};

export default Pagination;
