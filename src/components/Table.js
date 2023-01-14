import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pagination from "@mui/material/Pagination";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {colorCodes} from './configurations/colourCodes'
const table = () => {

  const tableHeads = [
    { hasIcon: "N", text: "Drug" },
    { hasIcon: "N", text: "Event" },
    { hasIcon: "Y", text: "Status" },
    { hasIcon: "Y", text: "Alerts" },
    { hasIcon: "Y", text: "Fatal Since 2022 Q1" },
    { hasIcon: "Y", text: "Fatal Since 2022 Q2" },
    { hasIcon: "Y", text: "Comments" },
  ];

  const tableValues = [
    {
      drug: "Paracetomol",
      event: "Diarrhea",
      status: "Active",
      alerts: ["F", "D", "I"],
      fatal_2022_q1: 13,
      fatal_2022_q2: 212,
      comments: "Pending further info",
    },
    {
      drug: "Paracetomol",
      event: "Diarrhea",
      status: "Active",
      alerts: ["F", "I"],
      fatal_2022_q1: 10,
      fatal_2022_q2: 221,
      comments: "Of Note",
    },
    {
      drug: "Paracetomol",
      event: "Diarrhea",
      status: "Active",
      alerts: ["F", "I"],
      fatal_2022_q1: 10,
      fatal_2022_q2: 1133,
      comments: "Pending further info",
    },
    {
      drug: "Paracetomol",
      event: "Diarrhea",
      status: "Active",
      alerts: ["F", "D", "I"],
      fatal_2022_q1: 9,
      fatal_2022_q2: 133,
      comments: "Of Note",
    },
    {
      drug: "Paracetomol",
      event: "Diarrhea",
      status: "Active",
      alerts: ["F", "I"],
      fatal_2022_q1: 7,
      fatal_2022_q2: 82,
      comments: "Of Note",
    },
    {
      drug: "Paracetomol",
      event: "Diarrhea",
      status: "Active",
      alerts: ["F"],
      fatal_2022_q1: 7,
      fatal_2022_q2: 96,
      comments: "Pending further info",
    },
    {
      drug: "Paracetomol",
      event: "Diarrhea",
      status: "Active",
      alerts: ["F"],
      fatal_2022_q1: 5,
      fatal_2022_q2: 89,
      comments: "Pending further info",
    },
  ];

  return (
    <>
      <table className="table text-muted">
        <thead className="thead-light">
          <tr>
            {tableHeads.map((data, index) => {
              console.log(data);
              return (
                <th scope="col" key={data} className="text-center">
                  <strong>{data.text}</strong>
                  {data.hasIcon == "Y" && <KeyboardArrowDownIcon />}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableValues.map((data, index) => {
            return (
              <tr scope="row" className="text-center">
                <td>{data.drug}</td>
                <td>{data.event}</td>
                <td>{data.status}</td>
                <td className="row d-flex align-items-center h-43">
                  {data.alerts.map((data_1, index) => {
                    return (
                      <Stack
                        className="col-4"
                        spacing={3}
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
