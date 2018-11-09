## Generate random data (Users and Records)
Run following scripts waterfall

+ gen_users
+ api_users
+ gen_contact
+ api_contact
+ gen_records
+ api_records

Database generated at `db/*.json`


## Export database from Mongo to JSON
At root of project, run
```bash
./scripts/export.sh
```
Database exported at `db/export/*.json`


## Import database from JSON to Mongo
At root of project, run
```bash
./scripts/import.sh
```
Database imported at `db/export/*.json`
