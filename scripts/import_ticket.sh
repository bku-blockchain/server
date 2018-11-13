# PWD at root of project
# Run ./scripts/import.sh
mongoexport --db MoST --collection tickets --file ./db/export/tickets.json
mongoexport --db MoST --collection villages --file ./db/export/villages.json
mongoexport --db MoST --collection booths --file ./db/export/booths.json
mongoexport --db MoST --collection interests --file ./db/export/interests.json
