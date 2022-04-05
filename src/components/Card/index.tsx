import { CardHeader } from "../CardHeader";
import { Container, Content } from "./styles";

export function Card(props:any) {

  return (
    <>
      <Container>
        <CardHeader
          ContentHeader = { props.header } >
        </CardHeader>        
        <Content>
          e esse possimus ab repellat, reiciendis quasi dicta doloribus obcaecati.
        </Content>
      </Container>
    </>
  )
}