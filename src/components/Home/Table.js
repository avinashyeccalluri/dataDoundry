import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pagination from "@mui/material/Pagination";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {colorCodes} from '../../configurations/colourCodes';
import {tableHeads, tableValues} from '../../util/drugEvent'
import Typography from '@mui/material/Typography';
const table = () => {

  return (
    <>
      <table className="table text-muted">
        <thead className="thead-light">
          <tr>
            {tableHeads.map((data, index) => {
              return (
                <th scope="col" key={data+index} className="text-center">
                  <Typography sx={{fontWeight: 'bold'}}  component={'span'}>{data.text}</Typography>
                  {data.hasIcon === "Y" && <KeyboardArrowDownIcon />}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableValues.map((data, index) => {
            return (
              <tr scope="row" className="text-center" key={data+index}>
                <td>{data.drug}</td>
                <td>{data.event}</td>
                <td>{data.status}</td>
                <td className="row d-flex align-items-center h-43">
                  {data.alerts.map((data_1, index) => {
                    return (
                      <Stack
                        className="col-4"
                        spacing={2}
                        key={data_1+index}
                      >
                        <Avatar
                          sx={{
                            bgcolor: colorCodes[data_1],
                            width: 20,
                            height: 20,
                            fontSize: 10,
                          }}
                          alt="Remy Sharp"
                          src="/broken-image.jpg"
                        >
                          {data_1}
                        </Avatar>
                      </Stack>
                    );
                  })}
                </td>
                <td>{data.fatal_2022_q1}</td>
                <td>{data.fatal_2022_q2}</td>
                <td className="text-start">{data.comments}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="row" id="pagination">
          <div className="col-12 text-right d-flex justify-content-end align-items-center">
            <Stack spacing={2} className="align-right">
              <Pagination count={5} shape="rounded" />
            </Stack>
          </div>
      </div>
    </>
  );
};

export default table;
