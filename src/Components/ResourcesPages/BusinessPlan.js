import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Assets/ResourcePages.css";
import { ResourceInnerData } from "../../Utils/ApiCalls";
import { Videos_Slider } from "./Videos_Slider";

export default class BusinessPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TabType: "",
      Tabs_Data: null,
      Strategy: "",
      Expansion: "",
      Team: "",
      Fundraising: "",
      Investor: "",
      PitchDeck: "",
      isLoading: true,
    };
  }

  componentWillMount() {
    var response = ResourceInnerData();
    response.then((data) => {
      if (data !== null) {
        this.setState({ Tabs_Data: data });
        data.items.forEach((item) => {
          if (item.fields.resourceId === "Bus_Strategy") {
            this.setState({ Strategy: item.fields.resourceEmbed });
          } else if (item.fields.resourceId === "Bus_Exp") {
            this.setState({ Expansion: item.fields.resourceEmbed });
          } else if (item.fields.resourceId === "Bus_Team") {
            this.setState({ Team: item.fields.resourceEmbed });
          } else if (item.fields.resourceId === "Bus_Fund") {
            this.setState({ Fundraising: item.fields.resourceEmbed });
          } else if (item.fields.resourceId === "Bus_Invest") {
            this.setState({ Investor: item.fields.resourceEmbed });
          } else if (item.fields.resourceId === "Bus_Pitch") {
            this.setState({ PitchDeck: item.fields.resourceEmbed });
          }
        });

        this.setState({ isLoading: false });
      }
    });
  }

  Tab_Click = (e, Type) => {
    var Tabs = document.querySelectorAll(".Resource_Tab");
    Tabs.forEach((element) => {
      element.classList.remove("Resource_Tab_Active");
    });
    e.target.classList.add("Resource_Tab_Active");

    this.setState({ TabType: Type });
  };

  render() {
    return (
      <div className="container">
        <div className="mt-5 block-title text-left">
          <p>DIVE INTO THE DETAILS</p>
          <h3>Review our Pitch Deck</h3>
        </div>

        {!this.state.isLoading ? (
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.PitchDeck,
            }}
          ></div>
        ) : (
          <>Loading</>
        )}

        <div className="mt-5 block-title text-left">
          <p>DIVE INTO THE DETAILS</p>
          <h3>Additional Decks</h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <button
              className="Resource_Tab Resource_Tab_Active"
              onClick={(e) => this.Tab_Click(e, "Strategy")}
            >
              Strategy
            </button>
            <button
              className="Resource_Tab"
              onClick={(e) => this.Tab_Click(e, "Expansion")}
            >
              Expansion
            </button>
            <button
              className="Resource_Tab"
              onClick={(e) => this.Tab_Click(e, "Overview")}
            >
              Team Overview
            </button>
            <button
              className="Resource_Tab"
              onClick={(e) => this.Tab_Click(e, "Fundraising")}
            >
              Fundraising
            </button>
            <button
              className="Resource_Tab"
              onClick={(e) => this.Tab_Click(e, "Investor")}
            >
              Investor Material
            </button>
          </div>
          <div className="col-lg-8 Resource_TabPanel">
            {this.state.TabType === "" || this.state.TabType === "Strategy" ? (
              !this.state.isLoading ? (
               <> {this.state.Strategy!==null?<Strategy Data={this.state.Strategy} />:<></>}</>
              ) : (
                <>Loading</>
              )
            ) : this.state.TabType === "Expansion" ? (
              !this.state.isLoading ? (
                <>{this.state.Expansion!==null?<Expansion Data={this.state.Expansion} />:<></>}</>
              ) : (
                <>Loading</>
              )
            ) : this.state.TabType === "Overview" ? (
              !this.state.isLoading ? (
                <>{this.state.Team!==null?<Overview Data={this.state.Team} />:<></>}</>
              ) : (
                <>Loading</>
              )
            ) : this.state.TabType === "Fundraising" ? (
              !this.state.isLoading ? (
               <> {this.state.Fundraising!==null?<Fundraising Data={this.state.Fundraising} />:<></>}</>
              ) : (
                <>Loading</>
              )
            ) : this.state.TabType === "Investor" ? (
              !this.state.isLoading ? (
                <> {this.state.Investor!==null?<Investor Data={this.state.Investor} />:<></>}</>
              ) : (
                <>Loading</>
              )
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="row Title_Div mb-5 mt-5">
          <div className="col-lg-10 col-xl-10 col-md-10 col-sm-12 block-title text-left ">
            <p>View Videos</p>
            <h3>Learn More</h3>
          </div>
          <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 Investor">
            <Link to={"/contact"}>
              <button className="btn btn-default ProjectBtn pl-0 pr-0 mt-5">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <Videos_Slider />
      </div>
    );
  }
}
const Strategy = (props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: props.Data,
        }}
      ></div>{" "}
    </>
  );
};
const Expansion = (props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: props.Data,
        }}
      ></div>{" "}
    </>
  );
};
const Overview = (props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: props.Data,
        }}
      ></div>{" "}
    </>
  );
};
const Fundraising = (props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: props.Data,
        }}
      ></div>{" "}
    </>
  );
};
const Investor = (props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: props.Data,
        }}
      ></div>{" "}
    </>
  );
};
