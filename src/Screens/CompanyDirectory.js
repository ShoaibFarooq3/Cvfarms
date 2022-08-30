import React, { Component } from 'react'
import ContactSectionNew from '../Components/contactSectionNew'
import PageHeader from '../Components/PageHeader'
import TeamMembers from '../Components/TeamMembers'

export default class CompanyDirectory extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (<>
      <PageHeader PageType="team_headerImage"/>
      <TeamMembers Type="full"/>
      <ContactSectionNew/>
      </>
    )
  }
}
