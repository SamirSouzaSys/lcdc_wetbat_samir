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
  display: flex;
  padding: 1.5rem 0;

  .main-left {
    width:37%;
    padding: 1rem;
    color:white;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 2.4rem;
    }
    
    p{
      font-size: 1.2rem;
      font-weight: 500;
      text-align: justify;
    }
  }
  .main-right {
    width: 63%;
    
    .img{
      text-align:center;
      margin: 1rem 0;
    }
  }
  .number-texts{
      text-align:center;
      display: flex;

      div {
        display: flex;
        margin: auto;
      }

      .number {
        font-weight: 900;
        font-family: sans-serif;
        font-size: 5rem;
        margin-right: 0.7rem;
        color: #F0CE84;
        text-shadow: 1px 1px 8px rgba(0,0,0,0.35);
      }
      
      .texts {
        font-size: 1.7rem;
        color: white;
        font-weight: 700;
        text-align: left;
        text-shadow: 1px 1px 8px rgba(0,0,0,0.2);
      }
  }
`