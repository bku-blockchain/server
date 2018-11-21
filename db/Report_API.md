### GET /report/num_booths_each_star
```json
{
    "1": 16,
    "2": 16,
    "3": 16,
    "4": 16,
    "5": 16
}
```


### GET /report/num_stars_booth/:bid
```json
{
    "bid": "5beb0925fb7f931150a7e09e",
    "star": {
        "1": {
            "total": 3,
            "Investor": 0,
            "Expert": 2,
            "Speaker": 0,
            "Organizer": 1,
            "Participant": 0
        },
        "2": {
            "total": 9,
            "Investor": 1,
            "Expert": 0,
            "Speaker": 3,
            "Organizer": 1,
            "Participant": 4
        },
        "3": {
            "total": 6,
            "Investor": 0,
            "Expert": 0,
            "Speaker": 3,
            "Organizer": 1,
            "Participant": 2
        },
        "4": {
            "total": 6,
            "Investor": 1,
            "Expert": 0,
            "Speaker": 2,
            "Organizer": 0,
            "Participant": 3
        },
        "5": {
            "total": 12,
            "Investor": 2,
            "Expert": 3,
            "Speaker": 0,
            "Organizer": 1,
            "Participant": 6
        }
    }
}
```




### GET /report/num_stars_each_booth
List results as one booth
```json
[
	{
		"bid": "",
		"star": {
			"1": {

			},
			"...": {

			}
		}
	},
	{
		"...": ""
	}
]
```
