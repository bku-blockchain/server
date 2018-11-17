# Import database to localhost from db/export or db/backup

# PWD at root of project
# Run ./scripts/import.sh

if [ $# == 0 ] || ([ $# > 0 ] && [ $1 != 'backup' ] && [ $1 != 'export' ])
then
  echo 'Error: Wrong statment syntax'
  echo 'Please import from db/backup/ or db/export/'
  echo '1 - Local:   ./script/import.sh backup'
  echo '2 - Server:  ./script/import.sh export'
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

echo '\n\nImport successfully\n\n'
