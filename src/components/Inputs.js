function Input(props) {
  return (
    <div>
      <label className={props.lcname}>Label</label>
      <br></br>
      <input
        type="text"
        className={props.cname}
        placeholder={props.placeholder}
      ></input><br></br>
            <label className={props.lcname}>{props.itext}</label>

    </div>
  );
}
export default Input;
