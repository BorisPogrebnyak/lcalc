import React, { Component } from "react";
import { connect } from "react-redux";

import TeachersTableOld from "./TeachersTableOld";

class TeachersTableContainer extends Component {
  render() {
    const { teachers, lessons } = this.props;
    return <TeachersTableOld teachers={teachers} lessons={lessons} />;
  }
}

const mapStateToProps = state => ({
  teachers: state.teachers,
  lessons: state.lessons
});

export default connect(mapStateToProps)(TeachersTableContainer);
