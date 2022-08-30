import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../Assets/ResourcePages.css'
import { ResourceInnerData } from "../../Utils/ApiCalls";
import { Videos_Slider } from "./Videos_Slider";



export default class Proforma_Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TabType: "",
      Tabs_Data:null,
      IncomeStatement:"",
      CashFlow:"",
      BalanceSheet:"",
      Expense:"",
      ROI:"",
      isLoading:true,
    };
  }

componentWillMount(){
  var response= ResourceInnerData();
  response.then((data)=>{
    if(data!==null){
      this.setState({Tabs_Data:data})
      data.items.forEach(item => {
        if(item.fields.resourceId==="Pro_Income"){
          this.setState({IncomeStatement:item.fields.resourceEmbed})
        }
        else if(item.fields.resourceId==="Pro_Balance"){
          this.setState({BalanceSheet:item.fields.resourceEmbed})
        }
        else if(item.fields.resourceId==="Pro_Cash"){
          this.setState({CashFlow:item.fields.resourceEmbed})
        }
        else if(item.fields.resourceId==="Pro_Expense"){
          this.setState({Expense:item.fields.resourceEmbed})
        }
        else if(item.fields.resourceId==="Pro_ROI"){
          this.setState({ROI:item.fields.resourceEmbed})
        }
      });
      
      this.setState({isLoading:false})
    }
    
  })
}


Tab_Click=(e,Type)=>{
    
var Tabs=document.querySelectorAll(".Resource_Tab2");
Tabs.forEach(element => {
    element.classList.remove('Resource_Tab_Active2')
});
e.target.classList.add('Resource_Tab_Active2');

this.setState({TabType:Type})


}
render() {
    return (
      <div className="container">
        <div className="mt-5 block-title text-left">
          <p>DIVE INTO THE DETAILS</p>
          <h3>Pro Forma</h3>
        </div>
        <div className="">
<div className="d-flex">
<button className="Resource_Tab2 Resource_Tab_Active2" onClick={(e)=>this.Tab_Click(e,"IncomeStatement")}>
Income Statement
</button>
<button className="Resource_Tab2"  onClick={(e)=>this.Tab_Click(e,"BalanceSheet")}>
Balance Sheet
</button>
<button className="Resource_Tab2" onClick={(e)=>this.Tab_Click(e,"CashFlow")}>
Cash Flow
</button>
<button className="Resource_Tab2" onClick={(e)=>this.Tab_Click(e,"Expenses")}>
Expenses
</button>
<button className="Resource_Tab2" onClick={(e)=>this.Tab_Click(e,"ROI")}>
ROI
</button>
</div>
<div className="Resource_TabPanel2">
{this.state.TabType===""||this.state.TabType==="IncomeStatement"?
!this.state.isLoading?
  <> {this.state.IncomeStatement !==null? <IncomeStatement Data={this.state.IncomeStatement}/>:<></>}</>:
    <>Loading</>
    :
    this.state.TabType==="BalanceSheet"?
    !this.state.isLoading?
    <> {this.state.BalanceSheet !==null? <BalanceSheet Data={this.state.BalanceSheet}/>:<></>}</>:<>Loading</>
    :
    this.state.TabType==="CashFlow"?
    !this.state.isLoading?
    <> {this.state.CashFlow !==null? <CashFlow Data={this.state.CashFlow}/>:<></>}</>:<>Loading</>
    :
    this.state.TabType==="Expenses"?
    !this.state.isLoading?
    <> {this.state.Expense !==null? <Expenses Data={this.state.Expense}/>:<></>}</>:
    <>Loading</>
    :
    this.state.TabType==="ROI"?
    <> {this.state.ROI !==null? <ROI Data={this.state.ROI}/>:<></>}</>
    :
    <></>
    
    }


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
 <Videos_Slider/>




        </div>
        
        
        
        )
        }
}
const IncomeStatement=(props)=>{
useEffect(() => {
//  alert(props.Data)

 
}, [])

    
    return(
        <>
        <div dangerouslySetInnerHTML={{
                          __html: props.Data
                        }}></div>
        </>
    )
}
const BalanceSheet=(props)=>{
    return(
        <>
            <div dangerouslySetInnerHTML={{
                          __html: props.Data
                        }}></div>
        </>
    )
}
const CashFlow=(props)=>{
    return(
        <>
            <div dangerouslySetInnerHTML={{
                          __html: props.Data
                        }}></div>
        </>
    )
}
const Expenses=(props)=>{
    return(
        <>
            <div dangerouslySetInnerHTML={{
                          __html: props.Data
                        }}></div>
        </>
    )
}
const ROI=(props)=>{
    return(
        <>
            <div dangerouslySetInnerHTML={{
                          __html: props.Data
                        }}></div>
        </>
    )
    }