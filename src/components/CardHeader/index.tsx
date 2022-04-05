import { Container, Content } from "./styles";

export function CardHeader(props: any) {

  return (
    <>
      <header>
        {props.header}
      </header>
    </>
  )
}