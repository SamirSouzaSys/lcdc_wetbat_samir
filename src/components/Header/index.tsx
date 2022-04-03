import logoSquareImg from '../../assets/icon_squares.png';
import logoWetBatImg from '../../assets/Bat.png';

import iconSearchImg from '../../assets/icon_search.png';

import iconNotificationImg  from '../../assets/icon_notification.png';
import iconMessageImg       from '../../assets/icon_message.png';
import iconSettingsImg      from '../../assets/icon_settings.png';
import profileImg           from '../../assets/profile_img.jpg';

import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div className="header-items-left">
          <img src={logoSquareImg} alt="Logo Square"/>
          <img src={logoWetBatImg} alt="Logo WetBat"/>
          <div>
            <span>Wet Bat</span>
            <span>TRAVEL</span>
          </div>
        </div>


        <div className="header-items-right">
          <div className="search-area">
            <button type="button">
              <img src={iconSearchImg} alt="serch"/>
            </button>
            <input type="text" ></input>
          </div>
          <div className="icons-area">
            <img src={iconNotificationImg} alt="Notifications"/>
            <img src={iconMessageImg} alt="Messages"/>
            <img src={iconSettingsImg} alt="Settings"/>
            <img src={profileImg} alt="Profile" className="profile-img"/>
          </div>
        </div>

      </Content>
    </Container>
  )
}