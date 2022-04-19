import styled from 'styled-components';

export const Content = styled.div`
  table {
    /* justify-content: space-around; */
    width: 100%;
    text-align: left;
    border-spacing: 0;

    th, td{
      padding-bottom: 1rem;
    }

    tr:hover {
      background-color: var(--cinza-claro);
      /* border-color: 10px solid red; */
      /* border-left: 1px ; */
      /* border-right: 1px; */
      /* border:solid .1px red; */

    }
  }
`