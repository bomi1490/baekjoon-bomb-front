import { Link, useParams, useNavigate } from "react-router-dom";
import * as React from "react";
import Alert from "@mui/material/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Chip from "@mui/material/Chip";
import moment from "moment";
import FaceIcon from "@mui/icons-material/Face";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import axios from 'axios';
import { useState } from "react";





 

  



const date = new Date();
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ alignItems: "center" }}>
      <Box sx={{ width: "200%", mr: 3 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="darkred">
          {100 - `${Math.round(props.value)}`}min. to BOMB<br></br> ABCD1234
        </Typography>
      </Box>
    </Box>
  );
}

// long polling 추가한 코드

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {

      // api 수정해야함
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ data });
      this.fetchData(); // 다시 요청을 보냄
    } catch (error) {
      console.error('Error fetching data:', error);
      setTimeout(() => this.fetchData(), 1000); // 일정 시간 이후에 다시 요청을 보냄
    }
  }

  render() {
    return (
      <div>
        <h1>Data: {this.state.data}</h1>
      </div>
    );
  }
}







LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

function createData(no, title,point) {
  return { no, title,point };
}

const rows = [
 
  createData("2344", "점프점프", "+3"),
  createData("1020", "피보나치", "+0"),
];

function createData2(ranking, id, point) {
  return { ranking, id, point };
}

const rows2 = [
  createData2("1.", "1234ABCD", "60"),
  createData2("2.", "ABCD1234", "30"),
  createData2("3.", "lalala", "0"),
];



const Personal = () => {
  const { inputId } = useParams();
  const { inputCode } = useParams();
  const [level, setLevel] = React.useState("");
  const [inputId_b, setInputId_b] = useState("");
  const [rankData, setRankData] = useState(null);
  
  const handleInputChange = (event) => {
    setInputId_b(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/rank?inputid=${inputId_b}`)
      .then((response) => response.json())
      .then((data) => setRankData(data));
  };

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const handleChange_st = (event) => {
    setStarttime(event.target.value);
  };

  const handleChange_fin = (event) => {
    setFinishtime(event.target.value);
  };
  const handleChange_num = (event) => {
    setNum(event.target.value);
  };
  const nowTime = moment().format("HH:mm");
  
  const [progress, setProgress] = React.useState(10);
  const navigate = useNavigate();
  const [show, setShow] = React.useState(0);

 
  const handleClick = () => {
    if (( inputId == "teamleader") && show == 0) {//team DB의 team_leader str과 비교해서 일치하면으로 조건 변경
      setShow(1);

      axios.get(`/rank/${inputId}`)
      .then(response => {
        // 요청에 대한 처리
        console.log(response);
        // navigate 함수 호출
        navigate(`/rank/${inputId}`);
      })

      .catch(error => {
        // 오류 처리
        console.log(error);
      });


    } else if (( inputId == "teamleader") && show == 1) {
      setShow(0);
    }
  };

  const [starttime, setStarttime] = React.useState("");
  const [finishtime, setFinishtime] = React.useState("");
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);



  return (
    <Background>
      <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input ID:
          <input type="text" value={inputId_b} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {rankData && (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Score</th>
              <th>ID</th>
              <th>Bomb_YN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{rankData.rank}</td>
              <td>{rankData.score}</td>
              <td>{rankData.id}</td>
              <td>{rankData.bomb_yn}</td></tr>
          </tbody>
        </table>
      )}
    </div>
      <TitleText>THE BAE/KJOON BOMB</TitleText>

      <Chip icon={<FaceIcon />} label={inputId} />
      <Chip label={inputCode} />
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <div className="leftside">
            <LinkIcon sx={{ fontSize: 100 }} />
            <Chip label={level} />
            <Chip label={starttime} />
            <Chip label={finishtime} />
            <Link
              to="
https://www.acmicpc.net/problem/{problem}
"
              underline="hover"
            >
              피보나치-실버3
            </Link>
            <div
              className="bomb"
              hidden={
                starttime > date.getHours() + ":" + date.getMinutes() ||
                date.getHours() + ":" + date.getMinutes() > finishtime
              }
            >
              <Box sx={{ width: "50%" }}>
                <LinearProgressWithLabel value={progress} color="error" />
              </Box>
            </div>
          </div>

         
          <div className="rightside">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <InsightsOutlinedIcon sx={{ fontSize: 40 }} />
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 1 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Ranking</TableCell>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">POINT</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows2.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.ranking}
                      </TableCell>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.point}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </div>
      <Link to="/">
        <StartBtn>나가기</StartBtn>
      </Link>

      <IconButton onClick={handleClick} aria-label="setting" size="large">
        <SettingsIcon sx={{ fontSize: 100 }} />
      </IconButton>
      <div hidden={show === 0}>
        <div style={{ display: "flex" }}>
          <div className="levelimage">
            <StarBorderOutlinedIcon sx={{ fontSize: 40 }} />
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Team Level
                </InputLabel>
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
                <InputLabel id="demo-simple-select-label">
                  FinishTime
                </InputLabel>
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
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  problemnumber
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={num}
                  label="ProblemNumber"
                  onChange={handleChange_num}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        {level && <Chip label={level} />}
        {starttime && <Chip label={starttime} />}
        {finishtime && <Chip label={finishtime} />}
        <StartBtn onClick={handleClick}>select</StartBtn>
      </div>
    </Background>
  );
};
const Background = styled.div`
  background-color: skyblue;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  margin-top: 20px;
  margin-bottom: 50px;
  background: rgba(224, 198, 96, 0.77);
  font-family: serif;
  font-size: 45px;
  font-weight: 700;
`;
const LinkText = styled.p`
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
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: serif;
  font-size: 16px;
  font-weight: 600;
  border-width: 0px;
  border-radius: 20px;
  :hover {
    background-color: rgb(33, 33, 33);
  }
`;
export default Personal;
