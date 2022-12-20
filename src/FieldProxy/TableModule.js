import Table from "react-bootstrap/Table";
import Header from "./Header";
import { useNavigate } from "react-router";
function TableModule({ name = { name } }) {
  let navigate = useNavigate();
  return (
    <div>
      <Header />
      <Table striped bordered hover className="my-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Age</th>
            <th>Place</th>
          </tr>
        </thead>
        {/* {allData.map(val,i) => ( */}
        <tbody>
          <tr>
            <td>name</td>
            <td>date</td>
            <td>age</td>
            <td>place</td>
            <td className="text-center ">
              <button className="border-0 bg-danger rounded mx-1">
                Delete
              </button>
              <button className="border-0 bg-warning rounded">
                &nbsp;&nbsp;Edit&nbsp;&nbsp;
              </button>
            </td>
          </tr>
        </tbody>
        {/* )} */}
      </Table>
    </div>
  );
}

export default TableModule;
