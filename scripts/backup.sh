# Back up database from server, files are generated in db/backup

# PWD at root of project
# Run ./scripts/backup.sh
mongoexport --db MoST --collection users --out ./db/backup/users.json
mongoexport --db MoST --collection records --out ./db/backup/records.json
mongoexport --db MoST --collection polls --out ./db/backup/polls.json
mongoexport --db MoST --collection votes --out ./db/backup/votes.json
mongoexport --db MoST --collection events --out ./db/backup/events.json
mongoexport --db MoST --collection villages --out ./db/backup/villages.json
mongoexport --db MoST --collection booths --out ./db/backup/booths.json
mongoexport --db MoST --collection interests --out ./db/backup/interests.json
mongoexport --db MoST --collection tickets --out ./db/backup/tickets.json
