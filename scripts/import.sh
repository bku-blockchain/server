# Import database

# PWD at root of project
# Run ./scripts/import.sh directory_name

if [ $# == 0 ]
then
  echo 'Error: Wrong statment syntax'
  echo 'Please import from db/[directory_name]'
  echo './script/import.sh [directory_name]'
  exit
fi

echo '\n\nImport database from db/'$1 '...\n\n'

mongoimport --db MoST --collection users --file ./db/$1/users.json
mongoimport --db MoST --collection records --file ./db/$1/records.json
mongoimport --db MoST --collection polls --file ./db/$1/polls.json
mongoimport --db MoST --collection votes --file ./db/$1/votes.json
mongoimport --db MoST --collection events --file ./db/$1/events.json
mongoimport --db MoST --collection villages --file ./db/$1/villages.json
mongoimport --db MoST --collection booths --file ./db/$1/booths.json
mongoimport --db MoST --collection interests --file ./db/$1/interests.json
mongoimport --db MoST --collection tickets --file ./db/$1/tickets.json
mongoimport --db MoST --collection entries --file ./db/$1/entries.json

echo '\n\nImport successfully\n\n'
