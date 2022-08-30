import React, { Component } from 'react'
import { GetTeamData } from '../Utils/ApiCalls';
import '../Assets/TeamMembers.css'
import { Link } from 'react-router-dom';
export default class TeamMembers extends Component {

constructor(props){
    super(props)
    this.state={
        teamLoading:true,
        TeamData:{},
        TeamArray:[]
    }
}

    componentWillMount(){

        var Team = GetTeamData();
        Team.then((data) => {
          if (data !== null) {
            this.setState({ TeamData: data }, () => { 
              var MemberObj = {};
    
              data.items.forEach((item) => {
                var MemberId = item.fields.employeeImage.sys.id;
                var MemberImg = "";
                data.includes.Asset.forEach((item2) => {
                  if (MemberId === item2.sys.id)
                    MemberImg = "https:" + item2.fields.file.url;
                });
          
                MemberObj = {
                  Img: MemberImg,
                  Name: item.fields.employeeName,
                  Title: item.fields.employeeTitle,
                  Social: item.fields.employeeSocialLinks,
                };
                this.state.TeamArray.push(MemberObj);
              });
              console.log(this.state.TeamArray);
              
              this.setState({ teamLoading: false });
            });
          }
        });

    }


    
  render() {
    return (
        <>
      {!this.state.teamLoading?
            <section className="team_one about_team_one ">
              <div className="container">
                <div className='row Title_Div mb-3'>
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 block-title text-left ">
                  <p>FARMING &amp; ENERGY EXPERTISE</p>
                  <h3>Meet the Team</h3>                  
                </div>
                <div className='col-lg-6 col-xl-6 col-md-6 col-sm-12 Investor'>
              <Link to="contact">  <button className="btn btn-default ProjectBtn pl-0 pr-0">BECOME AN INVESTOR</button></Link>
                </div>

                </div>
                
               {this.state.TeamArray!==null? <div className="row animate__animated animate__fadeInDown">
                  {this.state.TeamArray.map((item, key) => {
                    if(this.props.Type==="full")
                    {return (
                      <div className="col-xl-3 col-lg-3 col-md-6" key={key}>
                        <div className="team_one_single wow fadeInUp">
                        <div className="team_one_social Social_Icons text-left">
                              {
                              
                              item.Social.map((Link, key) => {
                            return  (  <div key={key}>
                                  {Link.includes("https://www.facebook.com") ? 
                                   <a href={Link}>
                                      <i className="fab fa-facebook"></i>
                                    </a>
                                  : Link.includes("twitter.com") ? 
                                    <a href={Link}>
                                      <i className="fab fa-twitter"></i>
                                    </a>
                                   : Link.includes(
                                      "https://www.linkedin.com"
                                    ) ? 
                                    <a href={Link}>
                                      <i className="fab fa-linkedin"></i>
                                    </a>
                                   : 
                                    <></>
                                  }
                                </div>);
                              })}
                            </div>
                          <div className="team_one_image">
                            <img
                              src={item.Img}
                              alt=""
                              // height={"354"}
                              // width={"270"}
                            />
                          </div>
                          <div className='row'>

                          </div>
                          <div className="text-left Team-Deatails">
                            <p>{item.Title}</p>
                            <h5>
                              {item.Name}
                            </h5>
                            
                          </div>
                         
                        </div>
                      </div>
                    );}
                    else{
                      if(key<4)
                      {return (
                        <div className="col-xl-3 col-lg-3 col-md-6" key={key}>
                          <div className="team_one_single wow fadeInUp">
                          <div className="team_one_social Social_Icons text-left">
                                {
                                
                                item.Social.map((Link, key) => {
                              return  (  <div key={key}>
                                    {Link.includes("https://www.facebook.com") ? 
                                     <a href={Link}>
                                        <i className="fab fa-facebook"></i>
                                      </a>
                                    : Link.includes("twitter.com") ? 
                                      <a href={Link}>
                                        <i className="fab fa-twitter"></i>
                                      </a>
                                     : Link.includes(
                                        "https://www.linkedin.com"
                                      ) ? 
                                      <a href={Link}>
                                        <i className="fab fa-linkedin"></i>
                                      </a>
                                     : 
                                      <></>
                                    }
                                  </div>);
                                })}
                              </div>
                            <div className="team_one_image">
                              <img
                                src={item.Img}
                                alt=""
                                // height={"354"}
                                // width={"270"}
                              />
                            </div>
                            <div className='row'>
  
                            </div>
                            <div className="text-left Team-Deatails">
                              <p>{item.Title}</p>
                              <h5>
                                {item.Name}
                              </h5>
                              
                            </div>
                           
                          </div>
                        </div>
                      );}
                      else{
                        return<></>
                      }
                    }
                  })}
                </div>:
                <></>}
              </div>
            </section>
          :
          <></>  
          }
          </>
    )
  }
}
