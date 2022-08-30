import React, { Component } from 'react'
import BlogsList from '../Components/BlogsList';
import ContactSectionNew from '../Components/contactSectionNew';
import PageHeader from '../Components/PageHeader';
import BusinessPlan from '../Components/ResourcesPages/BusinessPlan';
import Proforma_Resource from '../Components/ResourcesPages/Proforma_Resource';
import ReferalSection from '../Components/ResourcesPages/ReferalSection';
import { Comingsoon } from './NotFound';



export default class ResourcePage extends Component {
    constructor(props){
        super(props)
        this.state={
            ResourceType:null,
            BannerImage:"",
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
      }
    componentWillReceiveProps(NewProp){
if(NewProp.Type!==this.state.ResourceType)
{this.UpdateState(NewProp.Type)}
    }
componentWillMount(){
    // var pathNameOfLink = window.location.pathname;
    //     pathNameOfLink = pathNameOfLink.substring(
    //       pathNameOfLink.indexOf("/") + 1,
    //       pathNameOfLink.length
    //     );
     
   this.UpdateState(this.props.Type)
}
UpdateState=(Type)=>{
    this.setState({ResourceType:Type},()=>{
        if(this.state.ResourceType==="foodhistory")
        {
            this.setState({BannerImage:"resFood_headerImage"})
        }
        else if(this.state.ResourceType==="cogen"){
            this.setState({BannerImage:"resCogen_headerImage"})
        }
        else if(this.state.ResourceType==="proforma"){
            this.setState({BannerImage:"resProforma_headerImage"})
        }
        else if(this.state.ResourceType==="businessplan"){
            this.setState({BannerImage:"resBusinessplan_headerImage"})
        }
        else if(this.state.ResourceType==="referrals"){
          this.setState({BannerImage:"referrals_Header"})
      }

    })

}
  render() {
   
    return (
      <>
      <section>
      {this.state.BannerImage!==""?
      <>
        <PageHeader PageType={this.state.BannerImage}/>
      
        </>
    :
    <></>
    }</section>
    <section>
{
 this.state.BannerImage==="resFood_headerImage"?
 <></>
 :
 this.state.BannerImage==="resCogen_headerImage"?
<></>
 :
  this.state.BannerImage==="resBusinessplan_headerImage"?
  <BusinessPlan/>
  :
  this.state.BannerImage==="resProforma_headerImage"?
  <Proforma_Resource/>
  :
  this.state.BannerImage==="referrals_Header"?
  <ReferalSection/>
  :
  <></>
}
</section>  


    <section>
       {this.state.BannerImage!=="referrals_Header"?
        <BlogsList/>:
        <></>}
      </section>

    
      </>
    )
  }
}
