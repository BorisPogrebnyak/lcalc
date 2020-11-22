// Загрузить стартовую страницу сайта
// В теге <meta name="csrf-token"> найти
// csrfToken в атрибуте content=...
// Сохранть в store полученый csrfToken

import React, { Component } from "react";
import { connect } from "react-redux";

import GetCsrfToken from "./GetCsrfToken";
// import { createRequest } from '../store/URL/actions';

import { fetchCSRFToken } from '../store/CSRF/actions';

class GetCsrfTokenContainer extends Component {
  componentDidMount() {
    const { URL, fetchCSRFToken } = this.props;
    // Разобраться с createRequest ?????
    // fetchCSRFToken(createRequest(URL, 'GET'));
    fetchCSRFToken(URL);
  }
  render() {
    return <GetCsrfToken csrfToken={this.props.csrfToken} />;
  }
}

const mapStateToProps = state => ({
  csrfToken: state.csrfToken,
});

const mapDispatchToProps = dispatch => ({
  // Разобраться с createRequest ?????
  // createRequest: (URL, method) => createRequest(URL, method),
  // fetchDepartments: req => dispatch(fetchDepartments(req)),
  fetchCSRFToken: URL => dispatch(fetchCSRFToken(URL)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetCsrfTokenContainer);