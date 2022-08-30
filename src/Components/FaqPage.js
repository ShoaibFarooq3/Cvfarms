import React, { Component } from "react";

import PageHeader from "./PageHeader";
// import { FAQ_Data } from "../Utils/dummyData";
import { GetFaqs } from "../Utils/ApiCalls";
import "../Assets/Faq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";


import "react-accessible-accordion/dist/fancy-example.css";
import ContactSectionNew from "./contactSectionNew";
export default class FaqPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
isLoading :true,
FAQ_Data:{},
    };
  }
componentWillMount(){
    var response=GetFaqs()
    response.then((data)=>{
  if(data!==null){   this.setState({FAQ_Data:data},()=>{
     this.setState({isLoading:false})
     })}

    })
}
componentDidMount(){
  window.scrollTo(0, 0)
}
  render() {
    return (
      <>
        <PageHeader PageType="faq_headerImage" />

       {!this.state.isLoading?
        <div className="container text-left pt-5 pb-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 faqImage">
              <img src="https://biotellus.qodeinteractive.com/wp-content/uploads/2021/06/Faq-page-img-01.jpg" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
             {this.state.FAQ_Data!==null? <Accordion allowZeroExpanded={true}>
                {this.state.FAQ_Data.items.map((item, key) => (
                  <AccordionItem key={key}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {item.fields.questionField}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {item.fields.answerField}
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>:
              <></>}
            </div>
          </div>
        </div>
        :
        <></>}

      <ContactSectionNew/>
      </>
    );
  }
}
