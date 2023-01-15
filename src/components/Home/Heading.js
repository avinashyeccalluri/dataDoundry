import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {colorCodes} from '../../configurations/colourCodes'

const heading = () => {
  return (
    <div className="container" id="heading">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-3 container">
          <h1 className="h3 text-muted">Home</h1>
        </div>
        <div className="col-9">
          <Stack
            className="d-flex justify-content-start align-items-center"
            direction="row"
            spacing={3}
          >
            <Avatar
              sx={{
                bgcolor: colorCodes['F'],
                width: 30,
                height: 30,
                fontSize: 12,
              }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              F
            </Avatar>
            <div className="cp">Fatal</div>
            <Avatar
              sx={{
                bgcolor: colorCodes['D'],
                width: 30,
                height: 30,
                fontSize: 12,
              }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              D
            </Avatar>
            <div className="cp">DME 31</div>
            <Avatar
              sx={{
                bgcolor:colorCodes['T'],
                width: 30,
                height: 30,
                fontSize: 12,
              }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              T
            </Avatar>
            <div className="cp">Time 0 </div>
            <Avatar
              sx={{
                bgcolor: colorCodes['I'],
                width: 30,
                height: 30,
                fontSize: 12,
              }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              I
            </Avatar>
            <div className="cp">Interaction 360</div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default heading;
