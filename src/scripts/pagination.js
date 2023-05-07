import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { CatalogApiService } from './movies-api';

const TUI_VISIBLE_PAGES = 5;
const moviePage = new CatalogApiService();

export function createPagination(totalItems, visiblePages) {
  const options = {
    totalItems: 200,
    itemsPerPage: 20,
    visiblePages: visiblePages < 5 ? visiblePages : TUI_VISIBLE_PAGES,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);

  if (visiblePages > 1) {
    pagination.style.display = 'block';
  } else {
    pagination.style.display = 'none';
  }

  return pagination;
}
