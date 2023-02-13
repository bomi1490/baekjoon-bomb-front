import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const Team_leader = () => {
  const { inputId } = useParams();
  const { inputCode } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/personal/${inputCode}/${inputId}`);
  };
  const [level, setLevel] = React.useState("");

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const [starttime, setStarttime] = React.useState("");

  const handleChange_st = (event) => {
    setStarttime(event.target.value);
  };

  const [finishtime, setFinishtime] = React.useState("");

  const handleChange_fin = (event) => {
    setFinishtime(event.target.value);
  };
  return (
    <Background>
      <TitleText>THE BAE/KJOON BOMB</TitleText>
      <Chip label={inputId} variant="outlined" />
      <Chip label={inputCode} />
      <div style={{ display: "flex" }}>
        <div className="levelimage">
          <StarBorderOutlinedIcon sx={{ fontSize: 40 }} />
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Team Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={level}
                label="Level"
                onChange={handleChange}
              >
                <MenuItem value={"bronze5"}>Bronze5</MenuItem>
                <MenuItem value={"bronze4"}>Bronze4</MenuItem>
                <MenuItem value={"bronze3"}>Bronze3</MenuItem>
                <MenuItem value={"bronze2"}>Bronze2</MenuItem>
                <MenuItem value={"bronze1"}>Bronze1</MenuItem>
                <MenuItem value={"silver5"}>Silver5</MenuItem>
                <MenuItem value={"silver4"}>Silver4</MenuItem>
                <MenuItem value={"silver3"}>Silver3</MenuItem>
                <MenuItem value={"silver2"}>Silver2</MenuItem>
                <MenuItem value={"silver1"}>Silver1</MenuItem>
                <MenuItem value={"gold5"}>Gold5</MenuItem>
                <MenuItem value={"gold4"}>Gold4</MenuItem>
                <MenuItem value={"gold3"}>Gold3</MenuItem>
                <MenuItem value={"gold2"}>Gold2</MenuItem>
                <MenuItem value={"gold1"}>Gold1</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="timeSelect">
          <TimerOutlinedIcon sx={{ fontSize: 40 }} />
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">StartTime</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={starttime}
                label="StartTime"
                onChange={handleChange_st}
              >
                <MenuItem value={"10:00"}>10:00</MenuItem>
                <MenuItem value={"11:00"}>11:00</MenuItem>
                <MenuItem value={"12:00"}>12:00</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">FinishTime</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={finishtime}
                label="FinishTime"
                onChange={handleChange_fin}
              >
                <MenuItem value={"10:00"}>10:00</MenuItem>
                <MenuItem value={"11:00"}>11:00</MenuItem>
                <MenuItem value={"12:00"}>12:00</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      {level && <Chip label={level} />}
      {starttime && <Chip label={starttime} />}
      {finishtime && <Chip label={finishtime} />}
      <StartBtn onClick={handleClick}>select</StartBtn>
    </Background>
  );
};

/*function BasicSelect() {
  const [TeamLevel, setTeamLevel] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">TeamLevel</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Team Level}
          label="TeamLevel"
          onChange={handleChange}
        >
          <MenuItem value={Silver 1}>Silver 1</MenuItem>
          <MenuItem value={Silver 2}>Silver 2</MenuItem>
          <MenuItem value={Gold 1}>Gold 1</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
};

function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
    </Stack>
  );
}*/

const Background = styled.div`
  background-color: skyblue;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.p`
  margin-top: 20px;
  margin-bottom: 50px;
  background: rgba(224, 198, 96, 0.77);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: serif;
  font-size: 45px;
  font-weight: 700;
`;
const QuestionText = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  color: rgb(94, 94, 94);
  font-family: serif;
  font-size: 16px;
  font-weight: 500;
`;
const StartBtn = styled.button`
  background-color: rgb(64, 64, 64);
  color: rgb(190, 190, 190);
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 80px;
  padding-right: 80px;
  font-family: serif;
  font-size: 16px;
  font-weight: 600;
  border-width: 0px;
  border-radius: 5px;
  :hover {
    background-color: rgb(33, 33, 33);
  }
`;
export default Team_leader;
