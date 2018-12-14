// 201812141510
// https://api.github.com/


// "current_user_url": "https://api.github.com/user",
// "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
// "authorizations_url": "https://api.github.com/authorizations",
// "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
// "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
// "emails_url": "https://api.github.com/user/emails",
// "emojis_url": "https://api.github.com/emojis",
// "events_url": "https://api.github.com/events",
// "feeds_url": "https://api.github.com/feeds",
// "followers_url": "https://api.github.com/user/followers",
// "following_url": "https://api.github.com/user/following{/target}",
// "gists_url": "https://api.github.com/gists{/gist_id}",
// "hub_url": "https://api.github.com/hub",
// "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
// "issues_url": "https://api.github.com/issues",
// "keys_url": "https://api.github.com/user/keys",
// "notifications_url": "https://api.github.com/notifications",
// "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
// "organization_url": "https://api.github.com/orgs/{org}",
// "public_gists_url": "https://api.github.com/gists/public",
// "rate_limit_url": "https://api.github.com/rate_limit",
// "repository_url": "https://api.github.com/repos/{owner}/{repo}",
// "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
// "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
// "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
// "starred_gists_url": "https://api.github.com/gists/starred",
// "team_url": "https://api.github.com/teams",
// "user_url": "https://api.github.com/users/{user}",
// "user_organizations_url": "https://api.github.com/user/orgs",
// "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
// "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"

const https = require('https');

const base = 'https://api.github.com';

const user = base +'/users';
// user + '/' + username;

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/v5sollee',
    method: 'GET',
    headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
    }
}

function option(url){
    var parameters = {
        hostname: 'api.github.com',
        port: 443,
        path: url,
        method: 'GET',
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
        }
    };
    return parameters;
}


let req = https.request(option('/users/btea/followers'), function(res){
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log(chunk);
    })
});
req.on('error',function(e){
    console.log('problem with request:' + e.message);
})
req.end();

