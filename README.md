# MySpotBackup
This is a working version of the discontinued and unfortunately no longer working [SpotMyBackup](https://github.com/secuvera/SpotMyBackup).

> Backup and Restore your Spotify Playlists and "My Music".
> 
> This javascript based app allows you to backup all your playlists and import them in any other Spotify Account. It uses the OAuth-Functionality of Spotify to be able to handle your personal playlists.
> 
> In consequence, no credentials or data is stored or processed on the Webserver itself.

This has been hacked together last night so there is a lot of room for improvement, but at least it's working again.

There was a small issue with the authentication process, which i fixed using an express server which was faster for me, for code improvement ideas see below.

## How to use:
1) Clone/Download Repository
2) Install Node.js
3) Run ``npm install`` 
4) Create an app at https://developer.spotify.com/dashboard/
   - App name : e.g. Michaels SpotMyBackup
   - App description : For backing up my account
   -  Website : http://youripaddress:8080
   -  Redirect URIs : http://youripaddress:8080/callback
   - In the User Management, add your second (new/old) account as well
     - Second user might need to login into dashboard one time as well to confirm terms and conditions
4) Copy ``public/config.example.js`` to ``public/config.js`` and edit it to reflect the same settings and the right client id
4) Run ``npm serve-express`` (equal to running ``node index.js``, see package.json)
5) Click Login on old account
6) Export File
7) Open in incognito window
8) Click login on new account
9) Import File
10) Done

## Known Issues (probably already in the original):
- When running this on my personal account, some of the playlists were not copied fully, some were empty on the target, but it was a good start.
- Dates like the time a song was added to a playlist get lost

## Contributing:
Some ugly code here:
- we could integrate the express server functionality into the main index.html again to reduce the dependency
  - we could propose using simply http-server as dependency while still allowing other web servers
- we could use typescript instead of js
- we could properly separate html, css and js
- we could host it online (github deploy actions etc.)
- we could merge [open pull request](https://github.com/secuvera/SpotMyBackup/pulls) features and improvements from the original page
- we could use different scopes (read/write) for the different actions (export only needs reed permission from spotify)

## Helpful Links 
- https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
- https://developer.spotify.com/documentation/web-api/howtos/web-app-profile
- https://github.com/spotify/web-api-examples/tree/master/get_user_profile
- https://github.com/secuvera/SpotMyBackup/wiki
