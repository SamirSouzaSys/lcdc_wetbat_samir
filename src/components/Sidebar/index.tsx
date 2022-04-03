import { Content } from './styles'

import icon_homeImg    from '../../assets/icon_home.png';
import icon_quotesImg  from '../../assets/icon_quotes.png';
import icon_leadsImg   from '../../assets/icon_leads.png';
import icon_toursImg   from '../../assets/icon_tours.png';

import iconinvoicesImg   from '../../assets/icon_invoices.png';
import iconanalyticsImg  from '../../assets/icon_analytics.png';
import iconteamImg       from '../../assets/icon_team.png';
import iconadminImg      from '../../assets/icon_admin.png';
import iconsupportImg    from '../../assets/icon_support.png';

export function Sidebar() {
  return (
    
    <Content>
      <div>
        <ul>
          <li><img src={icon_homeImg} alt="Icon home"/> Home</li>
          <li><img src={icon_quotesImg} alt="Icon quotes"/> Quotes</li> 
          <li><img src={icon_leadsImg} alt="Icon leads"/> Leads</li>
          <li><img src={icon_toursImg} alt="Icon tours"/> Tours</li>
        </ul>
        <hr/>
        <ul>
          <li><img src={iconinvoicesImg} alt="Icon invoices"/> Invoices</li>
          <li><img src={iconanalyticsImg} alt="Icon analytics"/> Analytics</li>
          <li><img src={iconteamImg} alt="Icon team"/> team</li>
          <li><img src={iconadminImg} alt="Icon admin"/> Admin</li>
          <li><img src={iconsupportImg} alt="Icon support"/> Support</li>
        </ul>
        <hr/>
          <p className="copyright">Allright received<br/>by wetbat 2022 &copy;</p>
      </div>
    </Content>
  )
}