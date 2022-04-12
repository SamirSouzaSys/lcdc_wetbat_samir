// .w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}

import styled from 'styled-components';

// export const Container = styled.nav`
// `


export const Content = styled.div`
  width: 176px;
  color: var(--azul);
  font-weight: 700;
  font-size: 1.2rem;
  background-color: var(--cinza-sidebar);

  
  li{
    display: flex;
    padding: 2.5rem 4rem 2.4rem 1.9rem;
    
    &:hover{
      background-color: var(--cinza-claro);
    }
    
    img{
      margin-right: 0.6rem;
      height: 1.4rem;
    }
  }
  
  hr{
    border: .1rem solid var(--cinza-claro);
    background-color: var(--cinza-claro);
  }
  .copyright {
    color: var(--cinza);
    padding: 2.5rem 1rem 2.4rem 2.3rem;
    font-size: .8rem;
  }
`