import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";

const navBar = () => {

  const hamBurgerAnimation = (e)=>{
    for (let el of document.querySelectorAll('.nav-desc')) {
      el.classList.toggle('nav-desc-hide')
    }
    document.getElementById('naveBar-outer-container').classList.toggle('w-5');
    document.getElementById('content-outer-container').classList.toggle('w-95');
    e.target.classList.toggle("open");
    console.log(e.target)
  }
  
  return (
    <nav id="navBar">
      <div className="row  d-flex justify-content-center align-items-center pf-10 hamburger">
        <div className="col-12 h4 nav-desc">
          <strong>SAMPLE UI</strong>
        </div>

        <div class="col-12 ham-burger" onClick={hamBurgerAnimation}>
          <div class="menu btn13">
            <div class="icon"></div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 nav-content mt-10">
          <div className="d-flex justify-content-start align-items-start">
            <div className="">
              <HomeIcon className="pr-4" />
            </div>
            <div className="cp nav-desc">Home</div>
          </div>
        </div>
        <div className="col-12 nav-content mt-10">
          <div className="d-flex justify-content-start align-items-start">
            <div className="">
              <ShowChartIcon className="pr-4" />
            </div>
            <div className="cp nav-desc">Dashboard</div>
          </div>
        </div>
        <div className="col-12 nav-content mt-10">
          <div className="d-flex justify-content-start align-items-start">
            <div className="">
              <CreateIcon className="pr-4" />
            </div>
            <div className="cp nav-desc">Qualitative Estimation</div>
          </div>
        </div>
        <div className="col-12 nav-content mt-10">
          <div className="d-flex justify-content-start align-items-start">
            <div className="">
              <SettingsIcon className="pr-4" />
            </div>
            <div className="cp nav-desc">Signal Project</div>
          </div>
        </div>
        <div className="col-12 nav-content mt-10">
          <div className="d-flex justify-content-start align-items-start">
            <div className="">
              <TimerOutlinedIcon className="pr-4" />
            </div>
            <div className="cp nav-desc">Run Results</div>
          </div>
        </div>
        <div className="col-12 nav-content mt-10">
          <div className="d-flex justify-content-start align-items-start">
            <div className="">
              <ArticleOutlinedIcon className="pr-4" />
            </div>
            <div className="cp nav-desc">Reports & Review</div>
          </div>
        </div>
        <div className="col-12 nav-content mt-10">
          <div className="d-flex justify-content-start align-items-start">
            <div className="">
              <ArticleOutlinedIcon className="pr-4" />
            </div>
            <div className="cp nav-desc">Signals</div>
          </div>
        </div>
        <div className="col-12 nav-content mt-10">
          <div className="d-flex justify-content-start align-items-start">
            <div className="">
              <SignalCellularAltOutlinedIcon className="pr-4" />
            </div>
            <div className="cp nav-desc">Signal Monitoring</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
