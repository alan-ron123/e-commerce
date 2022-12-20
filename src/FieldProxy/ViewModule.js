import Table from "react-bootstrap/Table";
import Header from "./Header";
function ViewModule() {
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
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ViewModule;
