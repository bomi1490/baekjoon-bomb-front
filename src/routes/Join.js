import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Join = () => {
  const [inputId, setInputId] = useState("");
  const [inputCode, setInputCode] = useState("");
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputCode = (e) => {
    setInputCode(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    if (inputId) {
      console.log(`current id : ${inputId}`);
      console.log(`current teamcode : ${inputCode}`);
      navigate(`/personal/${inputCode}/${inputId}`);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClickOpen();
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate(`/`);
  };

  return (
    <Background>
      <TitleText>Join page</TitleText>
      <br></br>
      <Chip label="teamcode:" />
      <Chip label={inputCode} />
      <Chip label="id:" />
      <Chip label={inputId} />
      <br></br>
      <div className="idimage">
        <BadgeOutlinedIcon sx={{ fontSize: 60 }} />
        <br></br>
        <br></br>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="team code Required"
          defaultValue="Hello World"
          value={inputCode}
          onChange={handleInputCode}
          onKeyPress={handleKeyPress}
        />
        <TextField
          required
          id="outlined-required"
          label="baekjoon ID Required"
          defaultValue="Hello World"
          value={inputId}
          onChange={handleInputId}
          onKeyPress={handleKeyPress}
        />
      </Box>
      <br></br>

      <EnterBtn variant="outlined" onClick={handleClickOpen}>
        Enter
      </EnterBtn>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"회원가입되었습니다."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>

      <Link to="/">
        <StartBtn>뒤로가기</StartBtn>
      </Link>
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
const QuestionText = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  color: rgb(94, 94, 94);
  font-family: serif;
  font-size: 16px;
  font-weight: 500;
`;

const EnterBtn = styled.button`
  background-color: rgb(64, 64, 64);
  color: rgb(190, 190, 190);
  margin-top: 5px;
  margin-bottom: 5px;
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

const StartBtn = styled.button`
  background-color: rgb(64, 64, 64);
  color: rgb(190, 190, 190);
  margin-top: 5px;
  margin-bottom: 5px;
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
export default Join;
