import Description from "./Description";
import Input from "./Inputs";
function InputGroup(props) {
  return (
    <div className="input-group">
      <Description ds={props.ds}></Description>
      <Input cname={props.cname} placeholder={props.placeholder} lcname={props.lcname} itext={props.itext}></Input>
    </div>
  );
}
export default InputGroup
