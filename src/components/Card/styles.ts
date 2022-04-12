import internal from 'stream'
import styled from 'styled-components'

type PropCss = {
  widthSize: number;
  backgroundColor: string;
};

export const Container = styled.div.attrs((props: PropCss) => ({
  widthSize: props.widthSize,
  backgroundColor: props.backgroundColor,
})) <PropCss>`

  width:${(props) => props.widthSize}%;
  background-color:${(props) => props.backgroundColor};
  margin: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-radius: 12px;
`

export const Header = styled.div`
  display:flex;
  /* border-bottom: solid 1px; */

  div {
    /* justify-content: space-between; */
    /* padding-left: .5rem; */
    margin: auto ;
  }
  
  .header-text{
    font-size:1.9rem;
    color: var(--azul);
    font-weight: 600;
    /* text-align: left; */
    width:100%;
    padding-left: 1rem;
  }

  img {
    height: 3rem;
  }
  /* background-color: blue; */

  .extra-icons{
    display: flex;
    /* float: right; */
    /* &:img { */
    /* } */
  }
`

export const Content = styled.div`
  padding: 0.5rem;
  /*
  color: blue;
  width: 100%; */
  /* height: 2rem; */
  /* background: rgba(255,0,0,.5); */
`