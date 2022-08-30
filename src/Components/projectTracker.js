import React, { Component } from "react";
import { GetProjectTracker } from "../Utils/ApiCalls";
import PageHeader from "./PageHeader";
import { TrackerBar } from "./TrackerBar";

export default class projectTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Description: "",
     Project_Status:"",
      isLoading: true,
    };
  }
  componentWillMount() {
    var response = GetProjectTracker();

    response.then((Data) => {
      if (Data !== null) {
        var Status="";
        var Description;
        Data.data.items[0].column_values.forEach(item => {
            
            if(item.id=="long_text"){
                Description=item.text
            }
            else if(item.id=="status"){
Status=item.text;
            }

        });

        this.setState({ isLoading: false }, () => {
          this.setState({
            Title: Data.data.items[0].name,
            Description: Description,
            Project_Status:Status
          });
        });
      }
    });
  }

  render() {
    return (
      <>
        <PageHeader PageType="projectTracker_Header" />
        {!this.state.isLoading ? (
          <div className="container pt-3 pb-3">
            <div className="mt-5 block-title text-left">
              <p>DIVE INTO THE DETAILS</p>
              <h3>{this.state.Title}</h3>
              <h6 className="mt-2 text-dark">{this.state.Description}</h6>
            </div>

<TrackerBar Status={this.state.Project_Status}/>

          </div>
        ) : (
            <div className="LoaderAnimation">
            <div class="lds-grid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </>
    );
  }
}
