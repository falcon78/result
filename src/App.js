import React, { Component } from "react";
import "./App.css";
import db from "./Firebase/firebase";
import { Table } from "semantic-ui-react";
import styled from "styled-components";
import { Card, Button } from "semantic-ui-react";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";
const uuid = require("uuid/v4");

class App extends Component {
  data = [];
  state = {
    considering: 0,
    join: 0,
    NC: 0,
    NM: 0,
    NE: 0,
    auth: false,
    input: "",
    error: ""
  };
  hash = pass => {
    let hash = 0,
      i,
      chr;
    if (pass === 0) return hash;
    for (i = 0; i < pass.length; i++) {
      chr = pass.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  };
  componentDidMount() {
    const key = localStorage.getItem("auth");
    if (key === "true") {
      this.setState({
        auth: true
      });
    }
    this.fetch();
  }

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = () => {
    let passhash = this.hash(this.state.input);
    if (passhash === -1138718691) {
      this.setState({
        input: "",
        auth: true
      });
      localStorage.setItem("auth", "true");
    } else {
      this.setState({
        error: "パスワードが違います。　:("
      });
    }
  };

  regexnc = /\d{2}NC.{3}/i;
  regexne = /\d{2}NE.{3}/i;
  regexnm = /\d{2}NM.{3}/i;
  async fetch() {
    const docRef = db
      .collection("UserDetails")
      .doc("users")
      .collection("users");

    await docRef
      .orderBy("date", "desc")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(data => {
          let object = data.data();
          if (object.number.match(this.regexnc)) {
            this.setState({
              NC: this.state.NC + 1
            });
          }
          if (object.number.match(this.regexne)) {
            this.setState({
              NE: this.state.NE + 1
            });
          }
          if (object.number.match(this.regexnm)) {
            this.setState({
              NM: this.state.NM + 1
            });
          }
          this.data = this.data.concat(object);

          if (object.status === "検討中") {
            this.setState({
              considering: this.state.considering + 1
            });
          } else if (object.status === "入部したい！") {
            this.setState({
              join: this.state.join + 1
            });
          }
        });
      });
    // .catch(() => {
    //   console.log("Firebase Error");
    // });
  }

  render() {
    //this.fetch();
    if (this.state.auth) {
      return (
        <Style>
          <Card.Group>
            <Card
              fluid
              color="red"
              header={"入部したい！ : " + this.state.join}
            />
            <Card
              fluid
              color="orange"
              header={"検討中 : " + this.state.considering}
            />
          </Card.Group>
          <Card.Group className="cardContainer">
            <Card
              className="card"
              color="orange"
              header={"NC:" + this.state.NC}
            />
            <Card
              className="card"
              color="orange"
              header={"NE:" + this.state.NE}
            />
            <Card
              className="card"
              color="orange"
              header={"NM:" + this.state.NM}
            />
          </Card.Group>
          <Table unstackable class={"table"} celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>学籍番号</Table.HeaderCell>
                <Table.HeaderCell>ステータス</Table.HeaderCell>
                <Table.HeaderCell>更新回数</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.data
                .filter(a => a.status === "検討中")
                .map(number => (
                  <Table.Row id={uuid()}>
                    <Table.Cell>{number.number}</Table.Cell>
                    <Table.Cell>{number.status}</Table.Cell>
                    <Table.Cell>{number.updateCount}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
            <Table.Body>
              {this.data
                .filter(a => a.status === "入部したい！")
                .map(number => (
                  <Table.Row id={uuid()}>
                    <Table.Cell>{number.number}</Table.Cell>
                    <Table.Cell>{number.status}</Table.Cell>
                    <Table.Cell>{number.updateCount}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
          <div className="footer">
              &nbsp;
          </div>
        </Style>
      );
    } else {
      return (
        <Sub>
          <h1>PassKey</h1>
          <Input onChange={this.handleInput} value={this.state.input} />
          {this.state.error && <p> {this.state.error}</p>}
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Sub>
      );
    }
  }
}

export default App;
const Style = styled.div`
  .cardContainer {
    justify-content: center;
  }
  width: 95vw;
  margin: 3em 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .table {
    width:300px; 
  }
  .footer{
    height: 100px;
    background: #fff;
  }
`;

const Sub = styled.div`
  margin: 4em ;
  width: 90vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
