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

const Team_leader = () => {
  const { inputId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/personal/${inputId}`);
  };
  return (
    <Background>
      <TitleText>THE BAE/KJOON BOMB</TitleText>
      <QuestionText>팀 리더 레벨선택/시간선택</QuestionText>
      <QuestionText>{inputId}</QuestionText>

      <StartBtn onClick={handleClick}>personal로 돌아가기</StartBtn>
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
  background-color: #6b93bb;
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
  background: rgb(224, 224, 224);
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
