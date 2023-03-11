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
      <QuestionText>꾸준히 알고리즘 문제를 풀기란 너무 어렵다.</QuestionText>
      <QuestionText>팀 단위로 폭탄돌리기처럼 문제를 풀게 해주는 웹 페이지가 있다면 어떨까?</QuestionText>
      <QuestionText>게임 요소를 사용해 백준 사이트의 문제를 보다 재미있게 풀어보고자 한다.</QuestionText>
     

      <Link to="/team_building">
        <StartBtn>팀 생성</StartBtn>
      </Link>
      <Link to="/join">
        <StartBtn>회원가입</StartBtn>
      </Link>
      <Link to="/id_login">
        <StartBtn>로그인</StartBtn>
      </Link>
      <Link to="/exit">
        <StartBtn>회원탈퇴</StartBtn>
      </Link>
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
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
export default Main;
