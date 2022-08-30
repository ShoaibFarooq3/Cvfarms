import {
  About_Endpoint,
  Banner_Endpoints,
  BlogByCategories,
  BlogByTags,
  BlogComments_Endpoint,
  BlogThumb_Endpoint,
  Faq_Endpoint,
  Gallery_Endpoint,
  GetMonday_Endpoint,
  Home_Endpoint,
  Login_Endpoint,
  MondayBaseURL,
  Monday_Token,
  PostUrl,
  PrivacyPolicy_Endpoint,
  Proforma_Endpoint,
  ProjectOverview_Endpoint,
  ResourcePageData_Endpoint,
  SearchBlog_Endpoint,
  SingleBlog_Endpoint,
  Team_Endpoint,
  TrackingID_Endpoint,
} from "./Endpoints";
import contentful from "contentful-management";
import { mode } from "crypto-js";
export const GetAboutData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(About_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const GetHomeData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Home_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const GetTeamData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Team_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const GetGalleryData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Gallery_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetProformaData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Proforma_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetPrivacyPolicy = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(PrivacyPolicy_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetProjectOverviewData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(ProjectOverview_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetBannerImages = (PageType) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Banner_Endpoints + PageType, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetBlogThumbnails = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(BlogThumb_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetBlogContent = (BlogId) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(SingleBlog_Endpoint + BlogId, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const GetFaqs = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Faq_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const BlogByCategoy = (Category) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(BlogByCategories + Category, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const BlogByTag = (Tag) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(BlogByTags + Tag, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const BlogBySearch = (Query) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(SearchBlog_Endpoint + Query, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GetMonday = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(GetMonday_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const Monday_Api_One = (RawData, AuthToken) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", AuthToken);
  myHeaders.append("Content-Type", "application/json");

  var raw = RawData;

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("https://api.monday.com/v2", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const GettingBlogComments = (ID) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(PostUrl + ID + BlogComments_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const PostingComment = (ID, Body, Type, ReplyID) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (Type === "reply") {
    myHeaders.append("x-contentful-parent-id", ReplyID);
  }
  var raw = JSON.stringify({
    body: Body,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(PostUrl + ID + BlogComments_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const LoginUser = (Email, Password) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    Login_Endpoint + ".userEmail=" + Email + "&fields.userPassword=" + Password,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
export const UserExists = (Email) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Login_Endpoint + ".userEmail=" + Email, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const RegisterUser = (Email, Password, Name, ID) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Content-Type",
    "application/vnd.contentful.management.v1+json"
  );
  myHeaders.append("X-Contentful-Content-Type", "mainUserBlock");

  var raw = JSON.stringify({
    fields: {
      userName: {
        "en-US": Name,
      },
      userEmail: {
        "en-US": Email,
      },
      userPassword: {
        "en-US": Password,
      },
      userId: { "en-US": ID },
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://api.contentful.com/spaces/tmrgfa4bb3pg/environments/master/entries?access_token=CFPAT-ZcQqopTiF3Yfios9EaXAYckiVxIYOEp3W-T_U9-EYkA",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return PublishUser(result.sys.id, result.sys.version)
        .then((Data) => {
          return Data;
        })
        .catch((e) => {
          return null;
        });
    })
    .catch((error) => {
      console.log("error", error);

      return null;
    });
};

const PublishUser = (EntityID, Ver) => {
  var myHeaders = new Headers();
  myHeaders.append("X-Contentful-Version", Ver);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://api.contentful.com/spaces/tmrgfa4bb3pg/environments/master/entries/" +
      EntityID +
      "/published?access_token=CFPAT-ZcQqopTiF3Yfios9EaXAYckiVxIYOEp3W-T_U9-EYkA",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const SendResetLink = (Email, Encryptmail, Timeout) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    mode: "no-cors",
  };
  var url = Encryptmail;
  var encoded_url = encodeURIComponent(url);
  console.log(encoded_url);
  var timeOut = Timeout;
  var encoded_url_timeOut = encodeURIComponent(timeOut);
  console.log(encoded_url_timeOut);
  var FinalUrl =
    "https://flow.zoho.com/721146481/flow/webhook/incoming?zapikey=1001.a626d3f9fbe1bea99b024575488c914d.0a0d462ab4e39e7608faa52a13c4d3f8&isdebug=false&Email=" +
    Email +
    "&ResetLink=" +
    window.location.href +
    "reset?email=" +
    encoded_url +
    "&time=" +
    encoded_url_timeOut;

  console.log(FinalUrl);

  return fetch(FinalUrl, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      return "success";
    })
    .catch((error) => {
      console.log("error", error);
      return "Error";
    });
};

export const UpdateUserInfo = (Email, Password, Name, EntryID, ver, UserID) => {
  var myHeaders = new Headers();
  myHeaders.append("X-Contentful-Version", ver);
  var raw = JSON.stringify({
    fields: {
      userName: {
        "en-US": Name,
      },
      userEmail: {
        "en-US": Email,
      },
      userPassword: {
        "en-US": Password,
      },
      userId:{
        "en-US": UserID,
      }
    },
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://api.contentful.com/spaces/tmrgfa4bb3pg/environments/master/entries/" +
      EntryID +
      "?access_token=CFPAT-ZcQqopTiF3Yfios9EaXAYckiVxIYOEp3W-T_U9-EYkA",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return PublishUser(result.sys.id, result.sys.version)
        .then((Data) => {
          return Data;
        })
        .catch((e) => {
          return null;
        });
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export const GetUserVersion = (EntryID) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://api.contentful.com/spaces/tmrgfa4bb3pg/environments/master/entries/" +
      EntryID +
      "?access_token=CFPAT-ZcQqopTiF3Yfios9EaXAYckiVxIYOEp3W-T_U9-EYkA",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
// Mondays API CALLS

export const Getting_Info_Of_Item = (itemID) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", Monday_Token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    query:
      "query { items (ids: [" + itemID + "]){name,column_values {id,value}}}",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(MondayBaseURL, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const UpdatingStatus_Of_Item = (itemID, statusID) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", Monday_Token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    query:
      "mutation {change_simple_column_value (board_id: 2844323354, item_id: " +
      itemID +
      ', column_id: "status", value: "' +
      statusID +
      '") {id}}',
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(MondayBaseURL, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const ResourceInnerData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  return fetch(ResourcePageData_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const AddingQuery_Monday = (ItemID, Query) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3MzU0ODMxNywidWlkIjozMjQ5MzU1NywiaWFkIjoiMjAyMi0wOC0wM1QwNjo0ODo1NC4xNTdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTI1MDgxNjIsInJnbiI6InVzZTEifQ.Un3uu52-h_RNch99nEqw5c8KV03rVa5iLtfS3nFptIo"
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    query:
      "mutation {create_update (item_id: " +
      ItemID +
      ', body: "' +
      Query +
      '") {id}}',
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("https://api.monday.com/v2", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("error", error);

      return null;
    });
};

export const UpdatingQuery_Monday = (ItemID) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3MzU0ODMxNywidWlkIjozMjQ5MzU1NywiaWFkIjoiMjAyMi0wOC0wM1QwNjo0ODo1NC4xNTdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTI1MDgxNjIsInJnbiI6InVzZTEifQ.Un3uu52-h_RNch99nEqw5c8KV03rVa5iLtfS3nFptIo"
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    query:
      "mutation {change_simple_column_value (board_id: 2844323354, item_id: " +
      ItemID +
      ', column_id: "status", value: "6") {id}}',
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("https://api.monday.com/v2", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const Investor_Progress = (ItemID) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3MzU0ODMxNywidWlkIjozMjQ5MzU1NywiaWFkIjoiMjAyMi0wOC0wM1QwNjo0ODo1NC4xNTdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTI1MDgxNjIsInJnbiI6InVzZTEifQ.Un3uu52-h_RNch99nEqw5c8KV03rVa5iLtfS3nFptIo"
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    query:
      "{ boards(ids: 2844323354) { id name items (ids: " +
      ItemID +
      ") { id name column_values { id value text } subitems { id name column_values { id value text } } } } } ",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("https://api.monday.com/v2", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const Send_Document = (ItemID) => {

  // myHeaders.append("Content-Type", "application/json");
 
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3MzU0ODMxNywidWlkIjozMjQ5MzU1NywiaWFkIjoiMjAyMi0wOC0wM1QwNjo0ODo1NC4xNTdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTI1MDgxNjIsInJnbiI6InVzZTEifQ.Un3uu52-h_RNch99nEqw5c8KV03rVa5iLtfS3nFptIo");
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "query": "mutation {change_simple_column_value (board_id: 2844323433, item_id: "+ItemID+", column_id: \"status\", value: \"0\") {id}}"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  return fetch("https://api.monday.com/v2", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
    return result
    })
    .catch(error =>{ console.log('error', error)
  
  return null
  });

};

export const GetProjectTracker=()=>{

  var myHeaders = new Headers();
myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3MzU0ODMxNywidWlkIjozMjQ5MzU1NywiaWFkIjoiMjAyMi0wOC0wM1QwNjo0ODo1NC4xNTdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTI1MDgxNjIsInJnbiI6InVzZTEifQ.Un3uu52-h_RNch99nEqw5c8KV03rVa5iLtfS3nFptIo");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "query": "query { items (ids: [3040292921]){name,column_values {id,value,text}}}"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch("https://api.monday.com/v2", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
  return result;
  })
  .catch(error => {console.log('error', error)
return null
});
}

export const GetTrackingID=()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch(TrackingID_Endpoint, requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
    return result
    })
    .catch(error => {console.log('error', error)
  return null
  });
}