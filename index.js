require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000  //range 0–65535. //Only 65535 possible ports exist per IP address.

const githubData={
  "login": "Ayush247874",
  "id": 124272617,
  "node_id": "U_kgDOB2g_6Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/124272617?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ayush247874",
  "html_url": "https://github.com/Ayush247874",
  "followers_url": "https://api.github.com/users/Ayush247874/followers",
  "following_url": "https://api.github.com/users/Ayush247874/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ayush247874/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ayush247874/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ayush247874/subscriptions",
  "organizations_url": "https://api.github.com/users/Ayush247874/orgs",
  "repos_url": "https://api.github.com/users/Ayush247874/repos",
  "events_url": "https://api.github.com/users/Ayush247874/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ayush247874/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": " Ayush Kumar",
  "company": "Stark Edge",
  "blog": "ayushusanews.in",
  "location": "Bhubaneswar",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 27,
  "public_gists": 0,
  "followers": 4,
  "following": 4,
  "created_at": "2023-02-02T13:43:39Z",
  "updated_at": "2025-08-20T17:51:42Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Enter In Twiter');
})

app.get('/login',(req,res)=>{
    res.send('<h1> Page Login Just </h1>');
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Please Watch Youtube Video </h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
