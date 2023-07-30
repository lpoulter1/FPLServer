# FPL Fixture Difficulty Calendar - James Attrill Side Project

Side Project - A FPL Fixture Calendar that shows the upcoming fixtures for each Premier League team and ranks them based on their difficulty. I aim to use this side project to practice my React, JS and CSS skills. Will eventually merge with the official FPL API or perhaps even create my own one to practice more advanced back-end skills. Any suggestions welcome!

To run: Clone repo, navigate to FPL-fixtures folder and enter 'npm start' in command line. Will start the server and load the site in browser

Deployed at: https://fpl-fixture-calendar.vercel.app/ (currently under production - doesn't show data, unless local server is running)

E-mail address: attrill20@gmail.com

## Current To-Do List

- Add a search bar / drop down to filter fixtures
- Add home and away display
- Add a header for the site
- Add extra pages through React Router
- Fix favicon
  
- Create a proper server to allow data to be displayed on the deployed version
- Colour code fixture difficulty
- Reorder table based on fixture difficulty (create own algorithm?)
- Fix issue over blank / double GWs (may need to define each GW first)
- Check that only upcoming fixtures display
  
- Add testing
- Ensure accessibility
- Link to betting site for odds
- Clean sheet percentage

## 30/07/23

Really pleased with the progress made this weekend - it's getting there! Managed to get the opponent badges and added some nice colours based on difficulty. But kept running into problems when trying to get the table to reorder based on overall FDR and also can't work out how to remove the repeated table headings (but not sure if that's a good thing or not?), but sure I'll fix it next time! Think later this week I'll split the other player finder stuff into a new page and tidy up the site a bit to make it navigable. Enjoyable tinkering today though, learnt lots!

<img width="1738" alt="Screenshot 2023-07-30 at 19 11 09" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/fed9a4d6-9387-4174-b524-87343f45912c">


## 29/07/23

A great day! Spent a bit of time integrating the previous week's play into the Fixture Calendar and it's actually showing real data now - very exciting! It is finally actually almost useful. Was quite daunting removing the dummy array and inputting the functions that the use the API into the pre-exisitng code for the calendar, but once I ironed out a few bugs (having to detract 1 from the teamIndex for example to match up with the incoming fixtures) it actually worked! Here it is:

<img width="1654" alt="Screenshot 2023-07-29 at 13 36 03" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/babf3c67-55ff-4d6c-9431-e87529cb8302">

Haven't quite been able to add the opponent badge in yet, but the basic data is correct. Also updated the dropwdown to select more games, but formatting starts to go a bit crazy after 5 fixtures shown so will need to allow the table to scroll. Next goals are to show overall fixture difficulty, colour code based on this, reorder based on difficulty of fixtures, fix the opponent badge issue and try to resolve the blank / DGW issue. Oh, and should probably think about splitting the site across multiple pages now using React Router. Lots to do!


## 27/07/23

Been a busy time with lots of job interviews this week and graduation from the School of Code! But had some time for playing with the app this morning, so made some progress on adding i  the fixture difficulty calculation. Managed to get it displaying the 1-5 rating for each fixture from the API, and also created a total fixture difficulty rating (FDR) for the displayed number of fixtures (once I realised that I hadn't been updating the line of code for each team properly haha!). 

<img width="477" alt="Screenshot 2023-07-27 at 10 42 09" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/248486eb-4b6e-49c1-9f54-f7b55973b00a">
<img width="988" alt="Screenshot 2023-07-27 at 10 42 00" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/39c892a9-3850-47b6-9cd7-1037ed503688">

However, then discovered some tricky edge cases as Luton for example have a blank GW coming up but that wasn't showing as my function purely searches for the next n fixtures for each team, so will probably need to later define GWs based on date and then search for fixtures within this (will also be important for when there are double gameweeks for teams too). I also added a reverse FDR variable, as this will make sense when teams do have DGWs etc as this is the best solution I can think of for incorporting these DGWs fixtures for teams - therefore a higher FDR rating will be a good thing for teams! Feel like I've really opened a can of worms with the calcuation side of it today, next time I might just move fowards with embedding the logic I currently do have into my table.


## 21/07/23

Had a bit of time to work on the side project between interview prep this afternoon, so started working out how I was actually going to be able to access the fixtures for each team from the APIs. Started by making a simple array of the 20 teams in my code and giving them an ID for simplicity and then found the first fixture of the season and took the two team IDs from this and matched them to the array to generate the first fixture shown below. Then created a function that maps all of Arsenal's fixtures based on their team ID, slices the next 10 and adds in home/away info. Decent start, looking forward to building this into the fixture calendar itself soon:

<img width="350" alt="Screenshot 2023-07-21 at 15 54 01" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/70d735b4-254b-4e3c-a97c-04efb471aee6">
<img width="706" alt="Screenshot 2023-07-21 at 15 53 46" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/f60c3376-f78f-4e65-bed7-e44d65b39e8e">

## 18/07/23

Came back to my app to find that all the player images had changed! Realised that I had targeted them within the img URL by bracket notation by their position in the array - which evidently changes when new players are added to the game. Quick fix by being more specific by identifying them by their player code and  all fixed (plus added a couple of extra favourite faces) - good lesson to be learned here about making sure my code is future proofed and won't have unexpected changes like this again!

Then added a player search feature, so you can now type in a player name and it will return their image and some basic stats. All good practice in understanding the API better, learned how the web_name can be different than their surname and that capital letters were important, so added a line of code that converts both to lowercase before searching. Good progress, but need to get onto focussing on the fixtures again next time.

<img width="1354" alt="Screenshot 2023-07-18 at 15 49 05" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/d3489fc5-e498-4d12-b953-9017e7c4852b">


## 13/07/23

Had a good play around with the API today, managed to find lots of player information and display it on the site. Here is some of the results of that:

<img width="1049" alt="Screenshot 2023-07-13 at 16 40 18" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/c021a862-3108-4bca-bc06-6d3d1af60298">

However, still finding it difficult to work out how to pull 2 seperate APIs (https://fantasy.premierleague.com/api/bootstrap-static/ for player info and https://fantasy.premierleague.com/api/fixtures/ for fixtures) as await Promise.all and then mapping through them is just creating errors. Will get back to this after the weekend I think!

## 09/07/23

Good progress made today! Sorted out the CORS error by building my own server using Node.js and Express.js to handle the GET request and then allows CORS so the data can be accessed in the main app.js. This screenshot below may not look like much, but it was a big breakthrough for me to finally see real data from the FPL API being accessed by my site:

<img width="733" alt="Screenshot 2023-07-09 at 19 12 46" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/87a14913-62fa-4bd1-9f60-a5c6d0ea299a">

Also deployed the site for the first time to Vercel to ensure that there is always a place to view my changes and will hopefully eventually be useful to users!

## 07/07/23

Back to it today! Spent some time reacquainting myself with the app, good to be back on it. Tried to make a fetch request to the FPL API now the new season has launched, but struggled! Kept getting blocked by a CORS request - tried lots of things including middleware and creating my own proxy server, but kept getting errors. Will take a step back, think it over and come back to it on Sunday!

## 04/06/23

Made some changes to the site with some help from my coding buddy, and we managed to fix the filtering system so it now shows the number of fixtures that is requested. Going to take a bit of a break for a few weeks whilst I focus on my SOC final project, and then will have time to give this my full attention!

## 02/06/23

Been a busy couple of weeks with my best friend's wedding and then starting the project week, but had a bit of time this evening to have a play with the project and added home(H) and away(a) tags to each fixture, which will later play into the difficulty calculation. Added a dropdown filter as you can see in the image below, but then had a lot of difficulty trying to actually link that up using useState and onChange! had a good chat with my coding mate about it and we tried a lot of things and think I may need to restructure the layout of my components to integrate what I was thinking. Will play that over and revisit it again soon. Here's the current look of it:

![Screenshot 2023-06-04 at 20 56 40](https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/a2f11d02-e64e-49d7-af0d-37361bf0951d)

## 20/05/23

Spent a bit of time today improving the look of the site, and added a badge icon for each of the clubs which now renders below their name in the team list, and does so smaller now under the initials of the team in the GW column. A surprisngly simple job, but got caught for a while when I asked ChatGPT to reorder the dummy arrays for me, but for some reason it omly generated 18 for one of them so kept getting errors that took me far too long to realise were being caused by this! 

Tidied up the UI of the site with a slightly brighter background and clear black text for the teams. Added some padding and display issues too. Good recap of some CSS and React essential skills today. All the basic information is dispaying nciely now, so will look to add a filter search bar next, and start thinking about how to add in the calculation of fixture difficulty (which will have to factor in home / away considerations). Here's how the site is currently looking:

<img width="1768" alt="Screenshot 2023-05-21 at 20 22 01" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/b13a00c9-59ce-4836-af55-ab1753e0910e">

## 15/05/23

Did some reading and research as to what API I would need to use to implement in the project. Here are some useful links:

- Live FPL Rank: https://www.livefpl.net/rank (useful website displaying loads of data, nice new design)
- Official FPL API: https://fantasy.premierleague.com/api/fixtures/ (this is the full database, might need to filter for useful information)
- Medium article: https://medium.com/@frenzelts/fantasy-premier-league-api-endpoints-a-detailed-guide-acbd5598eb19 (explains how to use the API)
- Football Fallout Calendar: https://www.footballfallout.com/fpl/fixture-difficulty-planner (the current fixture calendar I use, aim to build on this)

Discovered that there is an inbuilt difficulty ranking buried within the FPL API ("team_h_difficulty": 4, "team_a_difficulty": 2) which ranks them out of 5. I presume this is what is being used by the other fixture difficulty calendars out there. Maybe I'll start with this, but would love to build my own algorithm for determining this possibly on a scale out of 10 for more control over this and to allow for a more refined way of navigating fixture difficulty for FPL managers.

The API seems to be divided into these sections:

1. General Information (Full URL: https://fantasy.premierleague.com/api/bootstrap-static/)
- events (basic information of every Gameweek such as average score, highest score, top scoring player, most captained, etc)
- teams (basic information of current Premier League clubs)
- total_players (total FPL players)
- elements (information of all Premier League players including points, status, value, match stats (goals, assists, etc.), ICT index, etc)
- element_types (basic information about player’s position (GK, DEF, MID, FWD))

2. Fixtures (Full URL: https://fantasy.premierleague.com/api/fixtures/)
- To get fixtures for specific Gameweek, you can add a parameter after the endpoint path (ex: fixtures?event=7)
- You can also request only the upcoming fixtures using future parameter (ex: fixtures?future=1)
- event (event id)
- team_a and team_h refers to the team id in teams section of the bootstrap-static data
- team_h_difficulty and team_a_difficulty is the FDR value calculated by FPL
- stats (contains a list of match facts that affect points of a player. It consists of goals_scored, assists, own_goals, penalties_saved, penalties_missed, yellow_cards, red_cards, saves, bonus, and bps data)

3. Player's Detailed Data (Full URL: https://fantasy.premierleague.com/api/element-summary/{element_id}/)
- fixtures (remaining fixtures), history (previous fixtures and match stats), history_past (previous season stats)

4. Gameweek Live Data (Full URL: https://fantasy.premierleague.com/api/event/{event_id}/live/)
- id (refers to element id from bootstrap-static), stats (player match stats), explain (breakdown of player's points)

5. Manager Basic Information (Full URL: https://fantasy.premierleague.com/api/entry/{manager_id}/)
- name, id, info, joined, team name, team value, leagues

6. Manager's History (Full URL: https://fantasy.premierleague.com/api/entry/{manager_id}/history/)
- previous GWs, chips used, past seasons

7. Classic League Standings (Full URL: https://fantasy.premierleague.com/api/leagues-classic/{league_id}/standings)
- league, standings, new entries

8. My Team (Full URL: https://fantasy.premierleague.com/api/my-team/{manager_id}/)
- picks (a list of players you have picked in your team), chips (list of unused chips), transfers (recent transfer information)

9. Manager's Team Per Gameweek (Full URL: https://fantasy.premierleague.com/api/entry/{manager_id}/event/{event_id}/picks/)
- automatic_subs, entry_history, picks

10. Event Status (Full URL: https://fantasy.premierleague.com/api/event-status/)
- Shows when bonus / league tables etc have been processed

11. Dream Team (Example URL: https://fantasy.premierleague.com/api/dream-team/8/)
- highest scoring team and overall star of the GW

12. Set Piece Taker Notes (Full URL: https://fantasy.premierleague.com/api/team/set-piece-notes/)
- Looks to be handwritten notes on team's set piece takers

Won't do anything with this data right now, but very interesting to have more information on how the API can be utilised. Started learning about SQL on the course today, so intrigued to see how that could possibly be implemeented into this project in the future too. A good day!

## 13/05/23

Initialised the repo on GitHub. Set up a new React project and made sure all the components are linked, passed down props of teams and GWs down from app.js down to cardlist and card. Felt good to see them successfully rendering! Set up dummy arrays of teams and GWs to check that they were diplaying properly and learnt about using [index] if mapping multiple arrays. 

Did some basic styling to check the files were all linked up properly, changed the background color and made some parts of the text bold to improve readability. Put all the fixtures into a table and ensured the width of the columns remained the same even when team name lengths changed. 

A good start. Here's the first screenshot of progress:

<img width="1652" alt="Screenshot 2023-05-13 at 23 42 55" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/4cfe2324-0614-45e3-b7b5-bb58264b75ad">




