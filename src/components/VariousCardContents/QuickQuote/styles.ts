import styled from 'styled-components';

export const Content = styled.div`
  /* background: red; */

  .form-group {
    display: flex;
    justify-content: space-around;

    
  }

  .form-label-input{
    /* background-color: var(--cinza-claro); */
    background-color: var(--cinza-input);
    margin: 0.9rem 0.5rem;
    color: var(--cinza);
    padding: 0.5rem;
    font-weight: bolder;
    display:grid;
    width: 100%;

    label {
      /* margin-bottom: 0.8rem; */
    }

    input,select {
      padding: 0.5rem;
      border:none;
      background-color: transparent;

      color: var(--verde-forte);

      &:focus {
        outline: none;;
      }
    }
  }

  .button-green {
      border-radius: 75px;
      outline: none;
      border: none;

      color: white;
      font-weight: bolder;
      font-size: 1.3rem;
      
      padding: 0.7rem;
      
      width: 97%;
      
      background-color: var(--verde-forte);

      &:hover {
        background-color: #3e8e41
      }

      &:active {
        transform: translateY(4px);
        box-shadow: 0 -5px #666;
      }
    }
`