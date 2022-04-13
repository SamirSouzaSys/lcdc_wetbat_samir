import { Content } from "./styles";
import { GlobalStyle } from "../../../styles/global";

export function QuickQuote() {
  return (
    <Content>
      <div>
        <div className="form-label-input">
          <label>FROM
            <input type="text" value="1" />
          </label>
        </div>
        <div className="form-label-input">
          <label>DESTINATION
            <input type="text" value="2" />
          </label>
        </div>
      </div>
      <div>
        <div className="form-label-input">
          <label>DEPART DATE
            <input type="date" value="3" />
          </label>
        </div>
        <div className="form-label-input">
          <label>RETURN DATE
            <input type="date" value="3" />
          </label>
        </div>
      </div>
      <div>
        <div className="form-label-input">
          <label>People
            <select id="quick-quote-people" name="people">
              <option value="1 - one">1</option>
              <option value="2 - two">2</option>
              <option value="3 - three">3</option>
              <option value="4 - four">4</option>
            </select>
          </label>
        </div>
        <div className="form-label-input">
          <label>TRASPORTATION

            <select id="quick-quote-people" name="people">
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="taxi">Taxi</option>
              <option value="airplane">Airplane</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <div className="form-label-input">
          <label>NAME
            <input type="text" value="" />
          </label>
        </div>
        <div className="form-label-input">
          <label>E-MAIL
            <input type="text" value="" />
          </label>
        </div>
      </div>
      <div>
        <input type="button" value="Create a quote"></input>
      </div>
    </Content>
  );
}