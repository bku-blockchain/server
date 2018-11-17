# PWD at root of project
# Run ./scripts/export.sh
mongoexport --db MoST --collection users --out ./db/backup/users.json
mongoexport --db MoST --collection records --out ./db/backup/records.json
mongoexport --db MoST --collection polls --out ./db/backup/polls.json
mongoexport --db MoST --collection votes --out ./db/backup/votes.json
mongoexport --db MoST --collection events --out ./db/backup/votes.json
mongoexport --db MoST --collection villages --out ./db/backup/votes.json
mongoexport --db MoST --collection booths --out ./db/backup/votes.json
mongoexport --db MoST --collection interests --out ./db/backup/votes.json
mongoexport --db MoST --collection tickets --out ./db/backup/votes.json
