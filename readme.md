//Features list for Candidate Revamp

iOS vs Web app ? ------------>

Watchlist design? ----------->

Other features:

Per candidate:

On expansion:

ExpandedBasicInfo: (
id
twitterAcct
facebookAcct
leadershipRole

)

VoteInfo: (
missedvotes percentage
votesWithParty percentage
Votes against party percentage
)

OfficeInfo: (
phone#
district

)

Recent tweets
Recent votes

Polling information

Goals:

Allow users to discover and digest granular information about candidates running for President, as well as current events relative to candidates on their watchlist

User:
Active followers of US politics

Value Proposition:
Candidate is a focused, customizable hub where election information for particular candidates of a user's interest is displayed and automatically updated. Candidate allows a user to apply a filter to the massive number of political actors in the 2020 election, only viewing data and information about candidates they care about most

MVP:

All candidates information:

Watchlist / follow ability
Top of watchlist displays poll with polling data for followed members

Touching candidate will lead to candidate info page
Info page: recentTweets, segmented Flatlist with basicInfo, voteInfo, officeInfo,

API DESIGN:

Endpoints:

/figures
--endpoint which serves as point to fetch basic data for all listed candidates

/figures/following
--GET req will respond with list of candidate IDs which correspond to candidates the user had previously selected to follow

/figures/changeStatus
--Request body requirements:
candidateId: id
status: status
--PUT request to this endpoint will update the follow status of the candidate to the opposite its current status

/figures/:candidateID/data/polls
--GET request to this endpoint will send request to Pollster API for recent polling data. Response TBD

/figures/:candidateID/data/propub
--GET request to this endpoint will fetch data from Propublica API. If response is an error (candidate is not in Congress), response will contain no data.
