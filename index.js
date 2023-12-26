require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const gitHubdata={
    "login": "Gobinda-A",
    "id": 75726641,
    "node_id": "MDQ6VXNlcjc1NzI2NjQx",
    "avatar_url": "https://avatars.githubusercontent.com/u/75726641?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Gobinda-A",
    "html_url": "https://github.com/Gobinda-A",
    "followers_url": "https://api.github.com/users/Gobinda-A/followers",
    "following_url": "https://api.github.com/users/Gobinda-A/following{/other_user}",
    "gists_url": "https://api.github.com/users/Gobinda-A/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Gobinda-A/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Gobinda-A/subscriptions",
    "organizations_url": "https://api.github.com/users/Gobinda-A/orgs",
    "repos_url": "https://api.github.com/users/Gobinda-A/repos",
    "events_url": "https://api.github.com/users/Gobinda-A/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Gobinda-A/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Gobinda Adhikari",
    "company": null,
    "blog": "https://gobindaprojects.netlify.app/",
    "location": "Midnapore, WB",
    "email": null,
    "hireable": null,
    "bio": "Aspiring Software Developer",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2020-12-09T09:41:09Z",
    "updated_at": "2023-12-12T15:34:42Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("You are in the twitter page: @gobu1208")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login to newbackend application</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github',(req,res)=>{
    res.json(gitHubdata)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})