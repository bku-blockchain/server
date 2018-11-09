# PWD at root of project
# Run ./scripts/import.sh
mongoimport --db _MoST --collection users --file ./db/export/users.json
mongoimport --db _MoST --collection records --file ./db/export/records.json
mongoimport --db _MoST --collection polls --file ./db/export/polls.json
mongoimport --db _MoST --collection votes --file ./db/export/votes.json
