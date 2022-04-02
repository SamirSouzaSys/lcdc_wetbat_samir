// .w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}

import styled from 'styled-components';

// export const Container = styled.nav`
// `


export const Content = styled.div`
  width: 180px;
  color: var(--azul);
  font-weight: 700;
  font-size: 1.3rem;
  
  li{
    padding: 30px 50px;
    
    &:hover{
      background-color: var(--cinza-claro);
    }
  }
`