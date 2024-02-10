// import PropTypes from "prop-types";
import Button from "./Button";
import "../App.css";

const Header = ({ title, showAddTask, toggleShow }) => {
  // const handleClick = () => {
  //   console.log("Click with handle from HEader");
  // };
  return (
    <div className="header">
      <h1>{title}</h1>
      {/* <Button
        color="purple"
        text="Show Add Task Bar"
        handleClick={handleClick}
      /> */}
      <Button
        // color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close" : "Add Task"}
        toggleShow={toggleShow}
      />
    </div>
  );
};

 
export default Header;
