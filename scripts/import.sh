# PWD at root of project
# Run ./scripts/import.sh
mongoimport --db MoST --collection users --file ./db/export/users.json
mongoimport --db MoST --collection records --file ./db/export/records.json
mongoimport --db MoST --collection polls --file ./db/export/polls.json
mongoimport --db MoST --collection votes --file ./db/export/votes.json
