import React, { useState } from "react";
import Search from "antd/es/input/Search";
import { Button, Modal  , Calendar, theme} from "antd";
// import Calendar from "./Calender";
import DropdownForLocation from "./DropdownForLocation";
import { set } from "mongoose";
const Data = [
  "CustomValue1",
  "CustomValue2",
  "CustomValue3",
  "CustomValue4",
  "CustomValue5",
  "CustomValue6",
  "najam",
  "faraz",
];



const CreateTripModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tripName, setTripName] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [date , setDate] = useState("")

  const onPanelChange = (value) => {
    setDate(value.format('YYYY-MM-DD'));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    console.log("tripName", tripName);
    console.log("collaborators", collaborators);
    console.log("date", date);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: '100%',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <>
      <Button
        type="primary"
        className="mb-10 w-40 h-12 bg-black hover:bg-blue-500 text-white"
        onClick={showModal}
      >
        + Create Trip
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-700 mb-10">
          Create Trip
        </h1>
        <h1 className="text-2xl font-bold tracking-tight text-gray-700 mb-2">
          Trip Name
        </h1>

        <input
          type="text"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          placeholder="Enter Trip Name"
          className="w-80 border-2 border-black rounded-2xl p-4   
        "
        />

        <h1 className="text-2xl font-bold tracking-tight text-gray-700 mb-2">
          Trip Destination
        </h1>
        <DropdownForLocation
          data={Data}
          collaborators={collaborators}
          setCollaborators={setCollaborators}
        />

        <h1 className="text-2xl font-bold tracking-tight text-gray-700 mb-2">
          Trip Date
        </h1>
        {/* <Calendar /> */}
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} onChange={onPanelChange} />
        </div>
      </Modal>
    </>
  );
};
export default CreateTripModal;
