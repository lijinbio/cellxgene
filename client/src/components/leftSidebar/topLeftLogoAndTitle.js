import { HTMLTable } from "@blueprintjs/core";
import React from "react";
import { connect } from "react-redux";

import * as globals from "../../globals";

import bcmlogo from '../../../logo/bcm_logo.png';

@connect((state) => {
  const { corpora_props: corporaProps } = state.config;
  const correctVersion =
    ["1.0.0", "1.1.0"].indexOf(corporaProps?.version?.corpora_schema_version) >
    -1;
  return {
    datasetTitle: state.config?.displayNames?.dataset ?? "",
    libraryVersions: state.config?.library_versions,
    aboutLink: state.config?.links?.["about-dataset"],
    tosURL: state.config?.parameters?.about_legal_tos,
    privacyURL: state.config?.parameters?.about_legal_privacy,
    title: correctVersion ? corporaProps?.title : undefined,
  };
})
class LeftSideBar extends React.Component {
  render() {
    const {
      datasetTitle,
      libraryVersions,
      aboutLink,
      privacyURL,
      tosURL,
      dispatch,
      title,
    } = this.props;

    return (
      <div
        style={{
          paddingLeft: 8,
          paddingTop: 8,
          width: globals.leftSidebarWidth,
          zIndex: 1,
          borderBottom: `1px solid ${globals.lighterGrey}`,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={bcmlogo}
            alt="Baylor College of Medicine"
            width="48"
            height="48"
          />
        </div>
        <div>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span
                  style={{
                    fontSize: 14,
                    position: "relative",
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: globals.logoColor,
                    userSelect: "none",
                  }}
                >
                  Spatial single cell atlas of the mouse retina
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span
                  style={{
                    fontSize: 12,
                    position: "relative",
                    fontWeight: "normal",
                    marginLeft: 10,
                    color: globals.logoColor,
                    userSelect: "none",
                  }}
                >
                  <a href="https://rchenlab.github.io">Rui Chen lab</a>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span
                  style={{
                    fontSize: 12,
                    position: "relative",
                    fontWeight: "normal",
                    marginLeft: 10,
                    color: globals.logoColor,
                    userSelect: "none",
                  }}
                >
                  <a href="https://www.bcm.edu">Baylor College of Medicine</a>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
