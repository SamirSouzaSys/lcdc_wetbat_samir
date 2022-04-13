import { Container, Content } from "./styles";
import img_team from '../../assets/img_team.png';

// props: any
export function CardMain() {

  return (
    <>
      <Container>
        <Content>
          <div className="main-left">
            <h1>
              Welcome to<br />your dashboard
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quibusdam aliquam animi. Tempora quae ex voluptatem vero, iusto in natus praesentium corporis temporibus commodi itaque possimus accusantium quaerat officia quisquam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quibusdam aliquam animi. Tempora quae ex voluptatem vero, iusto in natus praesentium corporis temporibus commodi itaque possimus accusantium quaerat officia quisquam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quibusdam aliquam animi. Tempora quae ex voluptatem vero, iusto in natus praesentium corporis temporibus commodi itaque possimus accusantium quaerat officia quisquam?
            </p>
          </div>
          <div className="main-right">
            <div className="img">
              <img src={img_team} alt="Img Team" />
            </div>
            <div className="number-texts">
              <div>
                <div className="number">101</div>
                <div className="texts">NEW<br />LEADS</div>
              </div>
              <div>
                <div className="number">35</div>
                <div className="texts">QUOTES<br />CREATED</div>
              </div>
              <div>
                <div className="number">40</div>
                <div className="texts">PENDING<br />ORDERS</div>
              </div>
            </div>
          </div>
        </Content>
      </Container>
    </>
  )
}