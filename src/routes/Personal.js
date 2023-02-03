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
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Chip from "@mui/material/Chip";

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

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

function createData(no, title, point) {
  return { no, title, point };
}

const rows = [
  createData("1234", "상한토마토", "+3"),
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
  const [progress, setProgress] = React.useState(10);
  const navigate = useNavigate();
  const handleClick = () => {
    if (inputId == "teamleader") {
      navigate(`/team_leader/${inputId}`);
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Background>
      <Alert variant="outlined" severity="error">
        방금 1234ABCD님이 이 문제를 풀었습니다.
      </Alert>
      <TitleText>THE BAE/KJOON BOMB</TitleText>

      <Chip label={inputId} variant="outlined" />
      <div>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={30}
        >
          <div className="leftside">
            <br></br>
            <br></br>
            <br></br>
            <LinkIcon sx={{ fontSize: 100 }} />
            <Link
              to="
https://www.acmicpc.net/problem/1003
"
              underline="hover"
            >
              {"피보나치-실버3"}
            </Link>
            <Box sx={{ width: "100%" }}>
              <LinearProgressWithLabel value={progress} color="error" />
            </Box>
          </div>

          <div className="rightside">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Inventory2OutlinedIcon sx={{ fontSize: 40 }} />
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 1 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell align="center">TITLE</TableCell>
                    <TableCell align="center">POINT</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.no}
                      </TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">{row.point}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
        </Stack>
      </div>
      <Link to="/">
        <StartBtn>back to menu</StartBtn>
      </Link>

      <IconButton onClick={handleClick} aria-label="setting" size="large">
        <SettingsIcon sx={{ fontSize: 100 }} />
      </IconButton>
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
  background: rgba(224, 224, 224, 0.74);
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
