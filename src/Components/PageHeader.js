import React, { Component } from "react";
import { GetBannerImages } from "../Utils/ApiCalls";
import Slider from "./Homepage Components/Slider";
import '../Assets/PageHeader.css'
export default class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // backgroundImage:
      //   "https://images.ctfassets.net/tmrgfa4bb3pg/1glRz7clSWliuogmTU1fDx/662d00f528c20b723d9b9887f20777c1/nao-takabayashi-TlzyJStoITg-unsplash.jpg",
        isLoading:true,
        BannerData:{},
        SliderState:false,
    };
  }
  componentWillMount(){

    

    
   var response= GetBannerImages(this.props.PageType)

   response.then(
    (data)=>{
    this.setState({BannerData:data},()=>{
      this.setState({backgroundImage:"https:"+data.includes.Asset[0].fields.file.url})
      this.setState({isLoading:false})
      if(this.state.BannerData.includes.Asset.length>1){this.setState({SliderState:true})}
      
   })
   
  }
   )
  
  
 
  }
  render() {
    const myStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${this.state.backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "300px",
    };

    if (this.state.SliderState) {
      return <Slider PageType={this.props.PageType} />;
    } 
    else {
      return (<>
                       
        {!this.state.isLoading?
          <section
          className="page-header text-left"
          id="pageHeader"
          style={myStyle}
        >
         {this.state.BannerData!==null?
          <div className="container text-left Page_Header">
            <h2 className="">{this.state.BannerData.includes.Asset[0].fields.title}</h2>
            <p>{this.state.BannerData.includes.Asset[0].fields.description} </p>
          </div>
          :
          <></>
          }
        </section>
      :
      <></>  
      }
        </>
      );
    }
  }
}
