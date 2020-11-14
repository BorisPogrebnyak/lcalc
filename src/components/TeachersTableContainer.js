"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import TeachersTable from "./TeachersTable";

class TeachersTableContainer extends Component {
  render() {
    const { URL, teachers, lessons } = this.props;
    console.log(this.props);
    return <TeachersTable URL={URL} teachers={teachers} lessons={lessons} />;
  }
}

const mapStateToProps = state => ({
  URL: state.URL,
  teachers: state.teachers,
  lessons: state.lessons
});

export default connect(mapStateToProps)(TeachersTableContainer);
