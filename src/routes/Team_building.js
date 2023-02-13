import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Team_building = () => {
  const generateRandomCode = (n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 10);
    }
    return str;
  };

  const [inputCode, setInputCode] = useState("");

  const handleInputCode = (e) => {
    setInputCode(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    if (inputCode) {
      console.log(`current team : ${inputCode}`);
      navigate(`/id_login/${inputCode}`);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputCode) {
        console.log(`current team : ${inputCode}`);
        navigate(`/id_login/${inputCode}`);
      }
    }
  };

  const [level, setLevel] = React.useState("");
  const [randomcode, setRandomcode] = React.useState("");

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (level) {
      setOpen(true);
      setRandomcode(generateRandomCode(6));
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Background>
      <TitleText>THE BAE/KJOON BOMB</TitleText>
      <div style={{ display: "flex" }}>
        <div>
          <StarBorderOutlinedIcon sx={{ fontSize: 40 }} />
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          <EmailOutlinedIcon sx={{ fontSize: 40 }} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="levelimage">
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
          <br></br>
          <br></br>
          {level && <Chip label={level} />}
          <br></br>

          <StartBtn onClick={handleClickOpen}>Random Code</StartBtn>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Random Code:"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {randomcode}
                <br></br>level : {level}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="Mailimage">
          <Box sx={{ minWidth: 200 }}>
            <TextField
              required
              id="outlined-required"
              label="Team Code Required"
              defaultValue="Hello World"
              value={inputCode}
              onChange={handleInputCode}
              onKeyPress={handleKeyPress}
            />
          </Box>

          <NotionText>
            전달받은 팀 코드가 없다면, 왼쪽에서 레벨을 선택한 후<br></br> 랜덤
            코드 받기를 클릭하세요
          </NotionText>

          <StartBtn onClick={handleClick}>Enter</StartBtn>
        </div>
      </div>
    </Background>
  );
};

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
const NotionText = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  color: rgb(224, 224, 224);
  font-family: serif;
  font-size: 13px;
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
export default Team_building;
