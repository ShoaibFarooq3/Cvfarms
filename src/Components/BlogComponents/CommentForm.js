import React, { Component } from 'react'
import { PostingComment } from '../../Utils/ApiCalls';
import { GetCurrDate } from '../../Utils/GlobalFunctions';

export default class CommentForm extends Component {
    constructor(props){
        super(props)
        this.state={
            Email: false,
            Name: false,
            Message: false,
            Success_Msg: false,
            Fail_Msg: false,
        }
    }



    SubmitComment = (e) => {
        e.preventDefault();
        if (
          this.state.Comment_Email === "" &&
          this.state.Comment_Message === "" &&
          this.state.Comment_Name === ""
        ) {
          this.setState({ Email: true, Name: true, Message: true });
        } else if (this.state.Comment_Email === "") {
          this.setState({ Email: true, Name: false, Message: false });
        } else if (!this.state.Comment_Email.includes("@")) {
          this.setState({ Email: true, Name: false, Message: false });
        } else if (this.state.Comment_Name === "") {
          this.setState({ Email: false, Name: true, Message: false });
        } else if (this.state.Comment_Message === "") {
          this.setState({ Email: false, Name: false, Message: true });
        } else {
          var Comment_Body = {
            Body: this.state.Comment_Message,
            "Added By": this.state.Comment_Name,
            "Added Date": GetCurrDate(),
            "Added email": this.state.Comment_Email,
          };
    
          var Post_Response = PostingComment(
            this.props.ID,
            JSON.stringify(Comment_Body),
            this.props.Type,
            this.props.ReplyID
          );
          Post_Response.then((Data) => {
            if (Data !== null) {
              this.setState({ Success_Msg: true });
              this.props.SetComment(Data)
              this.props.CloseReply()
            } else {
              this.setState({ Fail_Msg: true });
            }
          });
        }
      };
  render() {
    return (
        // <div className="Post_Comment text-left ContactForm">
        // <div className="Comment_Heading">
        //   <h4 className="">Post A Comment</h4>
        // </div>
        <form className="contact-one__form">
          <div className="row low-gutters m-0">
            <div className="col-md-6 p-0 m-0">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={(e) =>
                    this.setState({ Comment_Name: e.target.value })
                  }
                />
                {this.state.Name ? (
                  <p className="text-danger m-0">Please enter your name</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-md-6 p-0 m-0">
              <div className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) =>
                    this.setState({ Comment_Email: e.target.value })
                  }
                />
                {this.state.Email ? (
                  <p className="text-danger m-0">
                    Please enter a valid email
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-md-12 p-0 m-0">
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Write comment here..."
                  onChange={(e) =>
                    this.setState({ Comment_Message: e.target.value })
                  }
                ></textarea>
                {this.state.Message ? (
                  <p className="text-danger m-0">
                    Please enter your comment
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="input-group contact__btn">
                <button
                  onClick={(e) => this.SubmitComment(e)}
                  className="thm-btn"
                >
                  Post Comment
                </button>
              </div>
              {this.state.Success_Msg ? (
                <p className="text-success text-left m-0">
                  Comment Added
                </p>
              ) : (
                <></>
              )}
              {this.state.Fail_Msg ? (
                <p className="text-danger text-left m-0">
                  Something Went Wrong
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      // </div>
    )
  }
}
