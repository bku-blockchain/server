# PWD at root of project
# Run ./scripts/import.sh
mongoimport --db MoST --collection events --file ./db/export/events.json
mongoimport --db MoST --collection villages --file ./db/export/villages.json
