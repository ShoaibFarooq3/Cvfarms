
import "./App.css";
import Header from "./Components/Header";
import { Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import { Switch } from "react-router-dom";
import React, { Component, useEffect } from "react";
import GalleryPage from "./Components/GalleryPage";
import HomeNew from "./Components/HomeNew";
import storageChanged from "storage-changed";
import { Comingsoon, NotFound, Unauthorised } from "./Screens/NotFound";
import BlogArchive from "./Components/BlogComponents/BlogArchive";
import BlogPage from "./Components/BlogComponents/SingleBlog";
import BlogCategoryPage from "./Components/BlogComponents/BlogCategoryPage";
import { Toaster } from "react-hot-toast";
import { NewFooter } from "./Components/NewFooter";
import FaqPage from "./Components/FaqPage";
import ContactPage from "./Components/ContactPage";
import Login from "./Auth/login";
import Register from "./Auth/register";
import ResourcePage from "./Screens/ResourcePage";
import CompanyDirectory from "./Screens/CompanyDirectory";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import ResetPassword from "./Auth/ResetPassword";
import InvestorProgress from "./Components/InvestorProgress";
import projectTracker from "./Components/projectTracker";
import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom'



class App extends Component {

constructor(props){
  super(props)
  this.state={
    BlogsRoutes:[],
    Login_State:localStorage.getItem("LoggedStatus")
  }
}

  componentWillMount() {
   
    storageChanged('local', {
      eventName: 'Detect_New_BlogsList'
    })
     
    window.addEventListener('Detect_New_BlogsList', (event) => {
      if(event.detail.key=="Blogs_UniqueID"){
          this.setState({
            BlogsRoutes:JSON.parse(event.detail.value)
          })
      }
      if(event.detail.key=="LoggedStatus"){
        this.setState({
          Login_State:JSON.parse(event.detail.value)
        })
    }
    })
     




  }
//   fireTracking() {
//     ReactGA.pageview(window.location.pathname + window.location.search);
// }
  render() {
    
    if(this.state.Login_State==="yes")
   { return (
      <div className="App">
       <Header Type="Global"/>      
       <Toaster/>
        <Switch  >
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={HomeNew}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/AboutUS`}
              component={AboutUs}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Gallery`}
              component={GalleryPage}
            />
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/Faq`}
              component={FaqPage}
            />
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={ContactPage}
            />
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/login`}
              component={HomeNew}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/news`}
              component={BlogArchive}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/foodhistory`}
              component={()=><ResourcePage Type="foodhistory"/>}
            />
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/cogen`}
              component={()=><ResourcePage Type="cogen"/>}
            />
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/proforma`}
              component={()=><ResourcePage Type="proforma"/>}
            />
           
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/businessplan`}
              component={()=><ResourcePage Type="businessplan"/>}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/referrals`}
              component={()=><ResourcePage Type="referrals"/>}
            />
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/investor-progress`}
              component={()=><InvestorProgress/>}
            />
              <Route
             exact
              path={`${process.env.PUBLIC_URL}/project-tracker`}
              component={projectTracker}
            />
               <Route
              exact
              path={`${process.env.PUBLIC_URL}/company-directory`}
              component={CompanyDirectory}
            />
               <Route
              exact
              path={`${process.env.PUBLIC_URL}/privacy-policy`}
              component={PrivacyPolicy}
            />
            <Route
               path={`${process.env.PUBLIC_URL}/news/:id/:id2`}
               component={BlogPage}
             
             /> 
              <Route
              exact
               path={`${process.env.PUBLIC_URL}/Category/:id`}
               component={BlogCategoryPage}
             
             />     
             <Route
              exact
               path={`${process.env.PUBLIC_URL}/Tags/:id`}
               component={BlogCategoryPage}
             
             /> 
             <Route
              exact
               path={`${process.env.PUBLIC_URL}/SearchResults/:id`}
               component={BlogCategoryPage}
             
             />     
             <Route
             component={NotFound}/>
            {/* {this.state.BlogsRoutes.map((item,key)=>{
              var sdd=item.BlogTitle
              while(sdd.includes(" ")){
                sdd=sdd.replace(" ","-")
              }
              return(<Route
              key={key}
      
               path={process.env.PUBLIC_URL+"/news/"+sdd+"/"}
               component={BlogPage}
             />     )       
            })} */}
         
         <Route
            
            component={Login}
          />


        </Switch>
        <NewFooter />
 </div>
    );}
    else
   { return (
           
        <Switch>
       
            <Route
             exact
              path={`${process.env.PUBLIC_URL}/`}
              component={Login}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/reset`}
              component={ResetPassword}
            />
              <Route
             exact
              path={`${process.env.PUBLIC_URL}/login`}
              component={Login}
            />
            <Route
             exact
              path={`${process.env.PUBLIC_URL}/register`}
              component={Register}
            />
            <Route
            
              component={Unauthorised}
            />
  
        </Switch>
    );}
  }
}


const Root = () => { 
  const history = useHistory() 

  useEffect(() => {
     return history.listen((location) => { 
      ReactGA.pageview(window.location.pathname + window.location.search);


}) 
  },[history]) 

  return ( 
     <App /> 
  ) 
}

export default Root;
