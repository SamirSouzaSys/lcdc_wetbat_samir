// import { CardHeader } from "../CardHeader";
import { Container, Content, Header } from "./styles";
// import iconsupportImg    from '../../../assets/icon_support.png';

export function Card(props: any) {

  {/* <img src={require(`../assets/imgs/people/${this.props.name.toLowerCase()}.png`)}/> */ }
  // const imgIcon = getImageUrl(props.headerIcon);

  return (
    <>
      <Container
        widthSize={props.widthSize}
        backgroundColor={props.backgroundColor}
      >

        <Header>
          <div>
            <img
              src={props.headerIcon}
              alt={"Icon " + props.headerIcon} />
          </div>
          <div className="header-text">
            {props.headerText}
          </div>
          <div className="extra-icons">
            {
              props.headerExtraIcon1 != null &&
              <img
                src={props.headerExtraIcon1}
                alt={"Icon " + props.headerIcon} />
            }
            {
              props.headerExtraIcon2 != null &&
              <img
                src={props.headerExtraIcon2}
                alt={"Icon " + props.headerIcon} />
            }
          </div>
        </Header>
        <hr/>
        <Content>
          e esse possimus ab repellat, reiciendis quasi dicta doloribus obcaecati.
        </Content>
      </Container>
    </>
  )
}

function getImageUrl(headerIcon: string) {
  const defaultAssetsPath = "../../assets/";
  return defaultAssetsPath + headerIcon;
}