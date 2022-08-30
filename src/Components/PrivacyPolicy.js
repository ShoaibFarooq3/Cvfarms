import React, { Component } from 'react'
import { PostHeader } from './PostHeader'
import { RenderableDiv } from './RenderableDiv'
import '../Assets/PrivacyPolicy.css'
import { GetPrivacyPolicy } from '../Utils/ApiCalls'
export default class PrivacyPolicy extends Component {

    constructor(props){
        super(props)
        this.state={
            Content:{},
            isLoading:true
        }
    }
    componentWillMount(){
     var  respone= GetPrivacyPolicy()
       respone.then((data)=>[
        this.setState({Content:data.items[0].fields.pageContent},()=>{this.setState({isLoading:false})})
       ])
    }
  render() {
    return (<>
      
{ !this.state.isLoading?
   < div>
<PostHeader Page={true} Title="Refund and Returns Policy"/>
<div className='text-left container text-dark PrivacyPolicy'>
<RenderableDiv text={this.state.Content}/></div>
</div>
:
<></>
}


</>
      
    )
  }
}
