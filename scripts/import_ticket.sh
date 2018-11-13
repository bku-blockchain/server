# PWD at root of project
# Run ./scripts/import.sh
mongoimport --db MoST --collection tickets --file ./db/export/tickets.json
mongoimport --db MoST --collection villages --file ./db/export/villages.json
mongoimport --db MoST --collection booths --file ./db/export/booths.json
mongoimport --db MoST --collection interests --file ./db/export/interests.json
