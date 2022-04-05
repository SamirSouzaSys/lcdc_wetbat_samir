import styled from 'styled-components'

export const Container = styled.header`
   /* 100%; */
  margin: 1rem;
  background: rgb(66,100,198);
  background: -moz-linear-gradient(304deg, rgba(66,100,198,1) 0%, rgba(63,201,197,1) 100%);
  background: -webkit-linear-gradient(304deg, rgba(66,100,198,1) 0%, rgba(63,201,197,1) 100%);
  background: linear-gradient(304deg, rgba(66,100,198,1) 0%, rgba(63,201,197,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4264c6",endColorstr="#3fc9c5",GradientType=1);

  border-radius: 12px;
  padding: 1rem;
  width: 100%;

  `

export const Content = styled.div`
  .main-left {
    width:33%;
    padding: 1rem;
    color:white;

    h1 {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
    }
  }
  .main-right {
    width:33%;
  }
`