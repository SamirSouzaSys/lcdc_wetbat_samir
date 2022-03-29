import styled from 'styled-components';

export const Container = styled.header`
  background: var(--azul);
`

export const Content = styled.div`
  width: 100%;

  padding: 0.5rem 1rem;
  display:flex;

  justify-content: space-between;
  
  .header-items-left {
    img {
      &:first-child {
        margin-right: 1rem;
        height: 3.1rem;
      }
    }
    align-items: center;
    width: 50%;
    display:flex;

    div {
      color: #fff;
      
      span{
        display: flex;
        &:first-child {
          font-weight: 900;
          font-size: 1.3rem;
          line-height: 1.1rem;
          font-family: cursive;
        }
        
        &:last-child {
          font-weight: 700;
          font-size: 0.7rem;
        }
      }
    }
  }
  
  .header-items-right {
    display:flex;
    
    .search-area {
      display:flex;
      align-items: center;

      button {
        outline: none;
        padding: 0.3rem;
        border-radius: 12px 0 0 12px;
        border: none;
        /* border-color:transparent; */
        background-color: var(--background);
        /* margin-right: -1px; */
        
        img{
          padding: 0.4rem;
          height: 2rem;
        }
      }
      
      input {
        outline: none;
        background-color: var(--background);
        width: 30rem;
        padding: 0.6rem 1rem;
        
        border-radius: 0 12px 12px 0;
        /* border-style: outset; */
        border: none;
        
        color: var(--cinza);
        font-weight: 600;
        font-size: 1.3rem;
      }
    }

    .icons-area{
      display:flex;
    
      .profile-img {
        border-radius: 50%;
        height: 3rem;
      }
      img {
        margin: auto 1.7rem;
        height: 1.5rem;
      }
    }
  }
`