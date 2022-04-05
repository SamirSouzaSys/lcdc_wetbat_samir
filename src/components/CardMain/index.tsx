import { CardHeader } from "../CardHeader";
import { Container, Content } from "./styles";

export function CardMain(props:any) {

  return (
    <>
      <Container>
        <Content>
          <div className="main-left">
            <h1>
              Welcome to<br/>your dashboard
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quibusdam aliquam animi. Tempora quae ex voluptatem vero, iusto in natus praesentium corporis temporibus commodi itaque possimus accusantium quaerat officia quisquam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quibusdam aliquam animi. Tempora quae ex voluptatem vero, iusto in natus praesentium corporis temporibus commodi itaque possimus accusantium quaerat officia quisquam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quibusdam aliquam animi. Tempora quae ex voluptatem vero, iusto in natus praesentium corporis temporibus commodi itaque possimus accusantium quaerat officia quisquam?
            </p>
          </div>
        </Content>
      </Container>
    </>
  )
}