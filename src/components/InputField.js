import React from 'react';


function InputField({ label, type, id, name, value, changeHandler}) { // Ik begrijp niet waarom id grijs blijft...?
    return (
      <>
        <label htmlFor={`${name}-field`}>{label}</label>
        <input
          type={type}
          id={`${name}-input`}
          name={name}
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </>
    );
}

export default InputField;