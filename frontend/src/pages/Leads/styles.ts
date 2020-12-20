import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;

  .MuiDataGrid-root {
    font-size: 1em;
    color: #f4ede8;
    border: none;

    button {
      width: 3em;
      height: 3em;

      svg {
        transition: color 0.225s;

        width: 3em;
        height: 3em;
      }

      &:hover {
        svg {
          color: #ba382f;
        }
      }
    }
  }

  .MuiDataGrid-viewport {
    font-size: 0.7em;
  }

  .MuiDataGrid-columnsContainer {
    button {
      width: 1em;
      height: 1em;

      svg {
        width: 1em;
        height: 1em;
      }
    }
  }

  .MuiDataGrid-colCellWrapper {
    color: #ba382f;
  }

  .MuiTablePagination-caption {
    font-size: 2.4em;
  }

  .MuiDataGrid-colCellCheckbox, .MuiDataGrid-cellCheckbox {
    svg {
      color: #f4ede8;
    }
    color: #f4ede8;
  }
  }

  .MuiDataGrid-columnSeparator {
    svg {
      color: #000;
    }
    color: #000;
  }
`;
