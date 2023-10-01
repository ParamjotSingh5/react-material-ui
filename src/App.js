import { Box, Stack } from "@mui/material";
import Sidebar from "./components/sidebar/sidebar";
import Rightbar from "./components/rightbar/rightbar";
import Feed from "./components/feed/feed";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">        
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
