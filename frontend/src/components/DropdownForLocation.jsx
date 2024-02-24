// import React, { useState } from "react";
// import { AutoComplete, Space } from "antd";
// import { set } from "mongoose";

// const mockVal = (str, repeat = 1) => ({
//   value: str.repeat(repeat),
// });

// // Add your custom data here
// const customData = [
//   { value: "CustomValue1" },
//   { value: "CustomValue2" },
//   { value: "CustomValue3" },
// ];

// const DropdownForLocation = (searchValue) => {
//   const [options, setOptions] = useState([]);
//   const [anotherOptions, setAnotherOptions] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const getPanelValue = (searchText) =>
//     !searchText
//       ? []
//       : [
//           ...customData,
//           mockVal(searchText),
//           //   mockVal(searchText, 2),
//           //   mockVal(searchText, 3),
//         ];
//   return (
//     <Space
//       direction="vertical"
//       style={{
//         width: "100%",
//       }}
//     >
//       <AutoComplete
//         options={options}
//         onSearch={(text) => {
//           console.log(text);
//             setOptions(getPanelValue(text));
//           setSearchText(text);
//         }}
//         placeholder="Enter Location"
//         status="error"
//         style={{
//           width: 350,
//           height: 50,
//         }}
//       />
      
//     </Space>
//   );
// };

// export default DropdownForLocation;



import React from "react";
import { Select } from "antd";

const { Option } = Select;

const DropdownForLocation = ({ collaborators, setCollaborators, data }) => {
  const handleChange = (value) => {
    // console.log(value, "value")
    setCollaborators(value);
  };

  return (
    <Select
      mode="multiple" // Enable multiple selections
      style={{ width: "100%" }}
      placeholder="Select collaborators"
      onChange={handleChange}
      value={collaborators} // Use the array of selected user IDs directly
      className="w-full h-auto text-gray-700 border rounded-lg mb-2"
    >
      {data.map((user, index) => (
        <Option key={index} value={user}>
          {user}
        </Option>
      ))}
    </Select>
  );
};

export default DropdownForLocation;