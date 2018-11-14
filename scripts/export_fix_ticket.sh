# PWD at root of project
# Run ./scripts/export.sh
mongoexport --db MoST --collection events --out ./db/export/events.json
mongoexport --db MoST --collection villages --out ./db/export/villages.json
