import { Content } from './styles'

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/fontawesome-free';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/free-solid-svg-icons'
  // fontawesome-free
// import { faC offee } from '../../../node_modules/@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

export function Sidebar() {
  return (
    
    <Content>
      <div>
        <ul>
          <li><FontAwesomeIcon icon="fa-solid fa-house-chimney" />Home</li>
          <li><FontAwesomeIcon icon={solid('user-secret')} /> Quotes</li> 
          <li><FontAwesomeIcon icon={regular('coffee')} /> Leads</li>
          <li><FontAwesomeIcon icon={brands('twitter')} /> Tours</li>
        </ul>
        <hr/>
        <ul>
          <li>Invoices</li>
          <li>Analytics</li>
          <li>team</li>
          <li>Admin</li>
          <li>Support</li>
        </ul>
        <hr/>
        <ul>
          <li>Allright received<br/>by wetbat 2020 c</li>
        </ul>
      </div>
    </Content>
  )
}