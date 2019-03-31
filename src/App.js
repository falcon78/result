import React, { Component } from "react";
import "./App.css";
import db from "./Firebase/firebase";
import { Table } from "semantic-ui-react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";

class App extends Component {
  data = [];
  state = { considering: 0, join: 0, NC: 0, NM: 0, NE: 0 };
  componentDidMount() {
    this.fetch();
  }
  regexnc = /\d{2}NC.{3}/i;
  regexne = /\d{2}NE.{3}/i;
  regexnm = /\d{2}NM.{3}/i;
  async fetch() {
    const docRef = db
      .collection("UserDetails")
      .doc("users")
      .collection("users");

    await docRef
      .orderBy("date","desc")
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

          console.log(object);
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
              .map((number, index) => (
                <Table.Row id={index}>
                  <Table.Cell>{number.number}</Table.Cell>
                  <Table.Cell>{number.status}</Table.Cell>
                  <Table.Cell>{number.updateCount}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
          <Table.Body>
            {this.data
              .filter(a => a.status === "入部したい！")
              .map((number, index) => (
                <Table.Row id={index}>
                  <Table.Cell>{number.number}</Table.Cell>
                  <Table.Cell>{number.status}</Table.Cell>
                  <Table.Cell>{number.updateCount}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </Style>
    );
  }
}

export default App;
const Style = styled.div`
  .cardContainer{
    justify-content: center;
  }
  width: 100vw;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .table {
    width: max-content;
  }
`;
