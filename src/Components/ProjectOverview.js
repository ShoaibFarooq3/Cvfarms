import React,{ Component, useState } from "react";
import "../Assets/ProjectOverView.css"
import { GetProjectOverviewData } from "../Utils/ApiCalls";

import { RenderableDiv } from "./RenderableDiv";
class ProjectOverview extends Component{
constructor(props)
{
    super(props)
    this.state={
        ImageLink:"",
        overViewRow1:undefined,
        overViewRow2:undefined,
        overViewRow3:undefined,
        isLoading:true
    }

}
componentDidMount(){
var Response_Data=GetProjectOverviewData()
Response_Data.then((ResponseData)=>{
if(ResponseData!==null){
    var ImageResourceId=ResponseData.items[0].fields.overViewImage.sys.id
var OverviewRow1=ResponseData.items[0].fields.overViewRow1;
var OverviewRow2=ResponseData.items[0].fields.overViewRow2;
var OverviewRow3=ResponseData.items[0].fields.overViewRow3;
var ImageLink="";
ResponseData.includes.Asset.forEach(element => {
    if(element.sys.id==ImageResourceId){
        ImageLink=element.fields.file.url
        ImageLink="https:"+ImageLink
    }
}
);
}    this.setState({
        ImageLink:ImageLink,
        overViewRow1:OverviewRow1,
        overViewRow2:OverviewRow2,
        overViewRow3:OverviewRow3,
   isLoading:false
        },()=>{
            
            console.log(ImageLink)
            document.getElementById("projectImage").style.backgroundImage="url("+ImageLink+")";
        })

})




}
render(){


        return(<>
            {!this.state.isLoading?
                <div className="row projectOverViewRow">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 imageSec" id="projectImage">
                    {/* <img src={this.state.ImageLink}/> */}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 detailsSec">

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 maskDetails OverView">
                    <i className="fa-solid fa-solar-panel ProjectIcons"></i>
                    <RenderableDiv text={this.state.overViewRow1}/>
                    <button className="btn btn-default ProjectBtn pl-0 pr-0">Learn More</button>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 OverView">
                    <i className="fa-brands fa-nfc-symbol ProjectIcons"></i>
                    <RenderableDiv text={this.state.overViewRow2}/>
                    <button className="btn btn-default ProjectBtn pl-0 pr-0">Learn More</button>

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 OverView">
                    <i className="fa-regular fa-sun ProjectIcons"></i>
                    <RenderableDiv text={this.state.overViewRow3}/>
                    <button className="btn btn-default ProjectBtn pl-0 pr-0">Learn More</button>

                    </div>
                </div>
            </div>
            :
            <></>}
            </>
        )
    

}


}




export default ProjectOverview