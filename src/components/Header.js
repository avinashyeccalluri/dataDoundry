import AdjustIcon from "@mui/icons-material/Adjust";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
const header = () => {
  return (
    <header className="">
      <div className="row d-flex justify-content-end align-items-center">
        <div className="col-5">
          <div className="row d-flex flex-row justify-content-end align-items-center">
            <div className="col-4">
              <div className="row">
                <div className="col">
                  <AdjustIcon color="grey" />
                </div>
                <div className="col">
                  <SettingsIcon />
                </div>
                <div className="col">
                  <NotificationsIcon />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-8">Tigran Grigoryan</div>
                <div className="col-2">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </div>
            <div className="col-2">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
