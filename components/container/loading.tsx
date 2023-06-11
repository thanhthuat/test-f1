import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export const Loading = () => {
  //   <div
  //     style={{
  //       width: "100%",
  //       height: "100%",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <Loading />
  //   </div>;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "0",
        left: "0",
        background: "#04040433",
        zIndex: "99",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Loading;
