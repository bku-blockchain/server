# Export database in local, files generated in db/export

# PWD at root of project
# Run ./scripts/export.sh
mongoexport --db MoST --collection users --out ./db/export/users.json
mongoexport --db MoST --collection records --out ./db/export/records.json
mongoexport --db MoST --collection polls --out ./db/export/polls.json
mongoexport --db MoST --collection votes --out ./db/export/votes.json
mongoexport --db MoST --collection events --out ./db/export/events.json
mongoexport --db MoST --collection villages --out ./db/export/villages.json
mongoexport --db MoST --collection booths --out ./db/export/booths.json
mongoexport --db MoST --collection interests --out ./db/export/interests.json
mongoexport --db MoST --collection tickets --out ./db/export/tickets.json
