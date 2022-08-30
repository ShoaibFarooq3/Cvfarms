import React, { Component } from "react";
import "../../Assets/CommentSection.css";
import commentimage from "../../images/commentimage.jpeg";
import { GettingBlogComments, PostingComment } from "../../Utils/ApiCalls";
import { GetCurrDate } from "../../Utils/GlobalFunctions";
import CommentForm from "./CommentForm";
export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Comment_Message: "",
      Comment_Name: "",
      Comment_Email: "",
      CommentsData: null,
      Comment_Reply: false,
      Reply_Name: "",
      Reply_Id:"",
    };
  }

  componentWillReceiveProps(NewProp) {
    if (this.props.ID !== NewProp.ID) {
      var Comment_Response = GettingBlogComments(NewProp.ID);
      Comment_Response.then((Data) => {
        if (Data !== null) {
          this.setState({ CommentsData: Data.items });
        }
      });
    }
  }
  OpenReply = (Name,ID) => {
    this.setState({ Comment_Reply: true });
    this.setState({ Reply_Name: Name, Reply_Id:ID });
    
  };
  CloseReply = () => {
    this.setState({ Comment_Reply: false });
  };

  SetComment = (Data) => {
    var ArrayFinal = this.state.CommentsData;
    ArrayFinal.push(Data);
    this.setState({ CommentsData: ArrayFinal });
  };

  render() {
    if (this.props.ID === "null") {
      return <>Loading</>;
    } else {
      return (
        <>
          <div className="Comment_Section text-left mb-4">
            <div className="Comment_Heading">
              <h4 className="">
                Comments
                <small>
                  {" "}
                  &#40;
                  {this.state.CommentsData == null
                    ? 0
                    : this.state.CommentsData.length}
                  &#41;
                </small>
              </h4>
            </div>
            <div className="All_Comments">
              {this.state.CommentsData == null ||
              this.state.CommentsData.length === 0 ? (
                <p>No Comments</p>
              ) : (
                this.state.CommentsData.map((item, key) => {
                  while (item.body.includes("'")) {
                    item.body = item.body.replace("'", '"');
                  }

                  console.log(item.body);
                  var MainBody = JSON.parse(item.body);
                  var parent_ID = item.sys.id;
                  if (item.sys.parent === null) {
                    return (
                      <div className="row mb-5" key={key}>
                        <div className="col-lg-2 col-md-2 Comment_Image">
                          <img src={commentimage} />
                        </div>
                        <div className="col-lg-10 col-md-10 Comment_Body">
                          <h5 className="text-left">
                            {MainBody["Added By"]}{" "}
                            <span className="float-right Comment_Date">
                              <i className="fa-regular fa-calendar-minus"></i>{" "}
                              {MainBody["Added Date"]}
                            </span>
                          </h5>
                          <p className="mt-3">{MainBody.Body}</p>

                          <div className="CommentReply">
                            <button
                              className="btn btn-default ProjectBtn float-left mt-0 pl-0 pr-0"
                              onClick={() =>
                                this.OpenReply(MainBody["Added By"],item.sys.id)
                              }
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2"></div>
                        <div className="col-lg-10 col-md-10 Reply_Comments">
                          {this.state.CommentsData.map((Nested_Item, key) => {
                            while (Nested_Item.body.includes("'")) {
                              Nested_Item.body = Nested_Item.body.replace(
                                "'",
                                '"'
                              );
                            }
                            var InnerBody = JSON.parse(Nested_Item.body);
                            if (
                              Nested_Item.sys.parent !== null &&
                              Nested_Item.sys.parent.sys.id === parent_ID
                            ) {
                              return (
                                <>
                                  <div key={key}>
                                    <div className="row mt-5">
                                      <div className="col-lg-2 col-md-2 Comment_Image">
                                        <img src={commentimage} />
                                      </div>
                                      <div className="col-lg-10 col-md-10 Comment_Body">
                                        <h5 className="text-left">
                                          {InnerBody["Added By"]}{" "}
                                          <span className="float-right Comment_Date">
                                            <i className="fa-regular fa-calendar-minus"></i>{" "}
                                            {InnerBody["Added Date"]}
                                          </span>
                                        </h5>
                                        <p className="mt-3">{InnerBody.Body}</p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            } else {
                              <></>;
                            }
                          })}
                        </div>
                      </div>
                    );
                  }
                })
              )}
            </div>
          </div>
          {!this.state.Comment_Reply ? (
            <div className="Post_Comment text-left ContactForm">
              <div className="Comment_Heading">
                <h4 className="">Post A Comment</h4>
              </div>
              <CommentForm
                ID={this.props.ID}
                SetComment={(Data) => this.SetComment(Data)}
                Type={"MainComment"}
              />
            </div>
          ) : (
            <div className="Post_Comment text-left ContactForm">
              <div className="Comment_Heading">
                <h4 className="CommentReply">
                  Reply to {this.state.Reply_Name}                  
                  <button
                    className="btn btn-default ProjectBtn mt-0 pl-0 pr-0"
                    onClick={() => this.CloseReply()}
                  >
                    Cancel
                  </button>
                </h4>
              </div>
              <CommentForm
                ID={this.props.ID}
                SetComment={(Data) => this.SetComment(Data)}
                ReplyID={this.state.Reply_Id}
                Type={"reply"}
                CloseReply={()=>this.CloseReply()}
              />
            </div>
          )}
        </>
      );
    }
  }
}
