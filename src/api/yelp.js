import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XRecb8vigwaBkqStmR-SVRcyDsT_iGfUZTBoPRoKBcDPfMXShHOZ9rf42hGKW_oCnqiErGL0fgIREVxE9Cr8UhI4nbN2hwo8Y7RvMHhOykXc1O5oPf2sbjtdnUSIZXYx",
  },
});
