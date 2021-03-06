import React, { Component } from "react";
import { fetchRepos } from "../../service/repos-api";
import ReposList from "./ReposList";

class ReposContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      username: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  //
  changeHandler(ev) {
    this.setState({ username: ev.target.value });
  }

  //
  submitHandler(ev) {
    ev.preventDefault();
    fetchRepos(this.state.username).then(res =>
      this.setState({ repos: res.data })
    );
  }

  //
  render() {
    return (
      <div className="container">
        <h1>Repositórios</h1>
        <form action="#" onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            style={{ width: "80%" }}
            type="search"
            placeholder="Informe o usuário do Github e tecle ENTER"
          />
        </form>
        <ReposList repos={this.state.repos} />
      </div>
    );
  }
}

export default ReposContainer;
