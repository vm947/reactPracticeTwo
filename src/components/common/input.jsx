import React from "react";

const Input = ({/*type,*/ name, label, /*value,*/ error, /*onChange*/ ...rest}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        /*value={value}
        onChange={onChange}
        type={type} */
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
     {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

//when we pass props from inputRender(in form.jsx) to input componenent and we use the ...rest operator
//in the Input props we copy the entire pair of props, for example --from form.jsx/renderInput
//type={type}
// onChange={this.handleChange}
// value={data[name]}
//the spread ...rest operator copies these and puts them as props to <input/>

export default Input;
