import { Content } from "./styles";
// import { GlobalStyle } from "../../../styles/global";

export function QuickQuote() {
  return (
    <Content>
      <div className="form-group">
        <div className="form-label-input">
          <label>FROM</label>
          <input type="text" value="1" />
        </div>
        <div className="form-label-input">
          <label>DESTINATION</label>
          <input type="text" value="2" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-label-input">
          <label>DEPART DATE</label>
          <input type="date" value="3" />
        </div>
        <div className="form-label-input">
          <label>RETURN DATE</label>
          <input type="date" value="3" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-label-input">
          <label>People</label>
          <select id="quick-quote-people" name="people">
            <option value="1 - one">1</option>
            <option value="2 - two">2</option>
            <option value="3 - three">3</option>
            <option value="4 - four">4</option>
          </select>
        </div>
        <div className="form-label-input">
          <label>TRASPORTATION</label>
          <select id="quick-quote-people" name="people">
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="taxi">Taxi</option>
            <option value="airplane">Airplane</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="form-label-input">
          <label>NAME</label>
          <input type="text" value="" />
        </div>
        <div className="form-label-input">
          <label>E-MAIL</label>
          <input type="text" value="" />
        </div>
      </div>
      <div className="form-group">
        <input type="button" value="Create a quote" className="button-green"></input>
      </div>
    </Content>
  );
}