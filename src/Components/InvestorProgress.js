import React, { Component } from "react";
import { PostHeader } from "./PostHeader";
import "../Assets/InvestorProgress.css";
import { Investor_Progress, Send_Document } from "../Utils/ApiCalls";
import PageHeader from "./PageHeader";
import toast, {Toaster} from "react-hot-toast";
export default class InvestorProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InvestorData: null,
      isLoading: true,
    };
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  componentWillMount() {
    var responseInvestor = Investor_Progress(
      JSON.parse(localStorage.getItem("UserObj")).UserID
    );
    responseInvestor
      .then((Data) => {
        if (Data !== null) {
          this.setState(
            { InvestorData: Data.data.boards[0].items[0].subitems },
            () => {
              this.setState({ isLoading: false });
            }
          );
        }
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  }



SendDocument=(ItemID,key)=>{
  var response=Send_Document(ItemID)
 
  var submitButton=document.getElementById('myBTN'+key)

  submitButton.classList.add("DisabledInput")
  submitButton.disabled=true
  submitButton.innerText='Sending..'

 
  toast.promise(
    response,
    {
      loading: 'Please Wait',
      success: (data) => {
     if(data!==null){
      
setTimeout(() => {
  window.location.href="/investor-progress"
}, 2000);
  submitButton.innerText='Document Sent'  
  return "Document Sent"


  
     }


     else{
      return 'something went wrong'
     }
     },
      error: (err) => {
        setTimeout(() => {
          window.location.reload()  
        }, 2000);
        
        return `Something Went Wrong Please Try Again`},
    },
    {
      style: {
        minWidth: '250px',
      },
      success: {
        duration: 1500,
        
      },
    }
  );

}

  render() {
    return (
      <>
      <Toaster/>
        <PageHeader PageType={"InvestorProgress_Headerimage"}/>
        
        {!this.state.isLoading ? (
          <div className="container mt-4">

            
            { this.state.InvestorData!==null?
            this.state.InvestorData.reverse().map((item, key) => {
              var Signed_Status = "";
              var Description = "";
              var DateSigned = "";
              var DocumentLink="";
              var Item_ID="";
              
              item.column_values.forEach((e) => {
                if (e.id === "status") {
                  Signed_Status = e.text;
                } else if (e.id === "long_text") {
                  Description = e.text;
                } else if (e.id === "date0") {
                  DateSigned = e.text;
                }
                else if (e.id === "link") {
                
                  DocumentLink = e.text;
                  DocumentLink= DocumentLink.substring(DocumentLink.indexOf('http'))
                }
                else if (e.id=="item_id"){
                  Item_ID=e.text
                }
              });
              return (
                <div
                  key={key}
                  className="Contact_Text block-title text-left InvestorText pt-4"
                >
                  <p>Step {key+1}</p>
                  <h3>{item.name}</h3>
                  <span>{Description}</span>
                  {Signed_Status == "Signed" ? (
                    <div className="d-flex">
                      <button
                        className="Investor_Button Signed DisabledInput mr-4"
                        disabled
                      >
                        {Signed_Status}
                      </button>
                      {DocumentLink!==''?
                      <button  className="Investor_Button mr-4"><a className="text-white" target={"_blank"} href={DocumentLink}>View Document</a></button>
                    :
                    <></>
                    }
                      <small className="mt-3">
                        Document signed on : <strong>{DateSigned}</strong>
                      </small>
                    </div>
                  ) : Signed_Status == "Waiting" ? (
                    <div className="d-flex">
                      <button className="Investor_Button Waiting_Btn DisabledInput mr-4"
                      disabled>
                        {Signed_Status}
                      </button> {DocumentLink!==''?
                      <button  className="Investor_Button mr-4"><a className="text-white" target={"_blank"} href={DocumentLink}>View Document</a></button>
                    :
                    <></>
                    }
                      <small className="mt-3">
                        Document sent on : <strong>{DateSigned}</strong>
                      </small>
                    </div>
                  ) : Signed_Status == "Sign Document" ? (<>
                    <button className="Investor_Button mr-4"  onClick={()=>this.SendDocument(Item_ID,key)} id={"myBTN"+key}><a>{Signed_Status}</a></button>
                    {DocumentLink!==''?
                      <button  className="Investor_Button"   id="Send_Document"><a className="text-white" target={"_blank"} href={DocumentLink}>View Document</a></button>
                    :
                    <></>
                    }
                    </>
                  ) : (
                    <div className="d-flex">
                    <button className="Investor_Button NotSigned_Btn DisabledInput mr-4"
                    disabled>
                      {Signed_Status}
                    </button>   {DocumentLink!==''?
                      <button  className="Investor_Button mr-4"><a className="text-white" target={"_blank"} href={DocumentLink}>View Document</a></button>
                    :
                    <></>
                    }
                    <small className="mt-3">
                    Document sent on : <strong>{DateSigned}</strong>
                  </small>
                </div>
                  )}
                </div>
              );
            })
            :
            <></>}

           
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
