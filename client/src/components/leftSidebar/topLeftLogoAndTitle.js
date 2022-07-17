import { HTMLTable } from "@blueprintjs/core";
import React from "react";
import { connect } from "react-redux";

import * as globals from "../../globals";

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

    console.log(datasetTitle);
    console.log(libraryVersions);
    console.log(aboutLink);
    console.log(privacyURL);
    console.log(tosURL);
    console.log(dispatch);
    console.log(title);

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
            src="https://bcm.box.com/shared/static/jj6jqc1vv5wal0rchl0yhyxvdpwxd3m1.png"
            alt="Baylor College of Medicine"
            width="48"
            height="48"
          />
        </div>
        <div>
          <HTMLTable cellpadding="0" cellspacing="0">
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
                  Spatial atlas of mouse retina
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
          </HTMLTable>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
