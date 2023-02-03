import { Link } from "react-router-dom";
import styled from "styled-components";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const Main = () => {
  const [inputMsg, setInputMsg] = useState("");

  const handleInputMsg = (e) => {
    setInputMsg(e.target.value);
  };

  const handleClick = () => {
    if (inputMsg) {
      console.log(`개선사항 : ${inputMsg}`);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputMsg("");
  };
  return (
    <Background>
      <TitleText>THE BAE/KJOON BOMB</TitleText>
      <QuestionText>이 게임은 어쩌구저쩌구.....</QuestionText>
      <QuestionText>이 게임은 어쩌구저쩌구.....</QuestionText>
      <QuestionText>이 게임은 어쩌구저쩌구.....</QuestionText>
      <QuestionText>이 게임은 어쩌구저쩌구.....</QuestionText>
      <QuestionText>이 게임은 어쩌구저쩌구.....</QuestionText>

      <Link to="/team_building">
        <StartBtn>Start</StartBtn>
      </Link>
      <Button variant="outlined" onClick={handleClickOpen}>
        문제가 생겼나요?
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>문제가 생겼나요?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이곳에 메시지를 남겨주시면 확인 즉시 처리해드리겠습니다.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="개선사항"
            type="email"
            fullWidth
            variant="standard"
            value={inputMsg}
            onChange={handleInputMsg}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Submit</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Background>
  );
};
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
export default Main;
