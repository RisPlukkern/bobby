import React, { useState } from "react";
import { Dropdown } from "@gjensidige/core-components/lib/forms/dropdown";

const Form = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true);
  };

  return (
    <div className="dropdown-container">
      <Dropdown
        disabled={toggle}
        id="default"
        labelText="Dropdown"
        name={`default`}
        onChange={(newValue) => setValue(newValue)}
        placeholder="Select an option"
        value={value}
        options={[
          { labelText: "Option A", value: "Choose something" },
          { labelText: "Option B", value: "chooseB" },
          { labelText: "Option C", value: "chooseC" },
          { labelText: "Optional D", value: "chooseD" },
          { labelText: "Optional E", value: "chooseE" },
          { labelText: "Optional F", value: "chooseF" },
          { labelText: "Option G", value: "chooseG" },
          { labelText: "Option H", value: "chooseH" },
          { labelText: "Option I", value: "chooseI" },
          { labelText: "Option J", value: "chooseJ" },
        ]}
      />
    </div>
  );
};

export default Form;
