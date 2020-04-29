import React from "react";
import Select from "react-select";

function SelectBox(props) {
  const handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    props.onChange(props.name, value);
    if (props.onChange2) {
      props.onChange2(value);
    }
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    props.onBlur(props.name, true);
  };

  return (
    <div>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder={props.placeholder}
        options={props.options}
        multi={false}
        onChange={handleChange}
        onBlur={handleBlur}
        value={props.value}
        isClearable={true}
        isDisabled={props.isDisabled}
      />
      {!!props.error && props.touched && (
        <div className={props.styleMsgError}>{props.error}</div>
      )}
    </div>
  );
}

export default SelectBox;
