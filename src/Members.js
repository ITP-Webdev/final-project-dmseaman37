import React from "react";
import TableCount from "./TableCount";
import DocumentTitle from "react-document-title";

const API = "https://dseaman-itp404-project-api.herokuapp.com";

export default class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`${API}/api/members`);
    const members = await response.json();
    this.setState({ members });
  }

  render() {
    return(
      <DocumentTitle title="Members">
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {this.state.members.map((member) => {
                return(
                  <tr>
                    <td>{member.name}</td>
                    <td>{member.year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <TableCount table={this.state.members}>
            {
              (table) => {
                return (
                  <p>{table.length} Students</p>
                );
              }
            }
          </TableCount>
        </div>
      </DocumentTitle>
    );
  }
}
