# PWD at root of project
# Run ./scripts/export.sh
mongoexport --db MoST --collection tickets --out ./db/export/tickets.json
mongoexport --db MoST --collection villages --out ./db/export/villages.json
mongoexport --db MoST --collection booths --out ./db/export/booths.json
mongoexport --db MoST --collection interests --out ./db/export/interests.json
