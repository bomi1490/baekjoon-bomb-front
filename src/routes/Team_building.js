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
import axios from 'axios';

const Team_building = () => {
  const [inputId, setInputId] = useState("");
  const [inputCode, setInputCode] = useState("");

 

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputCode = (e) => {
    setInputCode(e.target.value);
  };

  //Team_building.js의 Enter 버튼을 누를 경우

  const navigate = useNavigate();
  const handleClick = () => {
    const inputId = document.getElementById('input-id');
  const inputCode = document.getElementById('input-code');
    if (inputCode!==''&&inputId!=='') {
      
      console.log(`current id : ${inputId}`);
      console.log(`current team : ${inputCode}`);

      axios
      .post(`/api/team_building/${inputCode}/${inputId}`)
      .then((response) => {
        console.log(response.data);
        navigate(`/team_building/${inputCode}/${inputId}`);
      })
      .catch((error) => {
        console.error(error);
      });
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
  };


  return (
    <Background>
      <TitleText>팀 생성 페이지</TitleText>
      <br></br>
      <Chip label="teamcode:" />
      <Chip label={inputCode} />
      <Chip label="id:" />
      <Chip label={inputId} />
      <br></br>

      <div style={{ display: "flex" }}>
        <div>
          <EmailOutlinedIcon sx={{ fontSize: 40 }} />
        </div>

        <div className="Mailimage">
          <Box sx={{ minWidth: 200 }}>
            <TextField
              requiredd
              id="outlined-required"
              label="Team Code Required"
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
          {"팀이 생성되었습니다."}
        </DialogTitle>
        <DialogActions>
        <Link to="/">
          <Button onClick={handleClose}>확인</Button>
          </Link>
        </DialogActions>
      </Dialog>

       <Link to="/">
         <StartBtn>뒤로가기</StartBtn>
       </Link>
          </div>
       </div>
      </Background>
    );
  }



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

const EnterBtn = styled.button`
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
