var nock = require('nock');
const customerID = "cust_test_5a4j05pd5uuk0y6y6ls";

nock('https://api.omise.co')
    .persist()
    .get('/customers/' +customerID+'/schedules')
    .reply(200, {
        "object": "list",
        "from": "1970-01-01T00:00:00Z",
        "to": "2018-03-02T08:02:29Z",
        "offset": 0,
        "limit": 20,
        "total": 15,
        "order": "chronological",
        "location": "/customers/cust_test_5a4j05pd5uuk0y6y6ls/schedules",
        "data": [
            {
                "object": "schedule",
                "id": "schd_test_5aikygh29nc6u68xuib",
                "livemode": false,
                "location": "/schedules/schd_test_5aikygh29nc6u68xuib",
                "status": "active",
                "every": 1,
                "period": "month",
                "on": {
                    "days_of_month": [
                        1
                    ]
                },
                "in_words": "Every 1 month(s) on the 1st",
                "start_date": "2018-01-04",
                "end_date": "2019-01-04",
                "charge": {
                    "amount": 200000,
                    "currency": "thb",
                    "description": "schedule charge id:1",
                    "customer": "cust_test_5a4j05pd5uuk0y6y6ls",
                    "card": "card_test_5a4j05gs3evyhnywwg8"
                },
                "occurrences": {
                    "object": "list",
                    "from": "1970-01-01T00:00:00Z",
                    "to": "2018-03-02T08:02:29Z",
                    "offset": 0,
                    "limit": 20,
                    "total": 3,
                    "order": null,
                    "location": "/schedules/schd_test_5aikygh29nc6u68xuib/occurrences",
                    "data": [
                        {
                            "object": "occurrence",
                            "id": "occu_test_5aikygh5c4qhpulod8v",
                            "livemode": false,
                            "location": "/occurrences/occu_test_5aikygh5c4qhpulod8v",
                            "schedule": "schd_test_5aikygh29nc6u68xuib",
                            "schedule_date": "2018-02-01",
                            "retry_date": null,
                            "processed_at": "2018-02-01T01:31:53Z",
                            "status": "successful",
                            "message": null,
                            "result": "chrg_test_5ath86asi8q61o7ip6u",
                            "created": "2018-01-04T04:55:30Z"
                        },
                        {
                            "object": "occurrence",
                            "id": "occu_test_5ath86lxrk25kg5686x",
                            "livemode": false,
                            "location": "/occurrences/occu_test_5ath86lxrk25kg5686x",
                            "schedule": "schd_test_5aikygh29nc6u68xuib",
                            "schedule_date": "2018-03-01",
                            "retry_date": null,
                            "processed_at": "2018-03-01T01:35:51Z",
                            "status": "failed",
                            "message": "charge could not be captured",
                            "result": "chrg_test_5b4fize4x5ee79adawo",
                            "created": "2018-02-01T01:31:53Z"
                        },
                        {
                            "object": "occurrence",
                            "id": "occu_test_5b4fizhatex2i3g2wyb",
                            "livemode": false,
                            "location": "/occurrences/occu_test_5b4fizhatex2i3g2wyb",
                            "schedule": "schd_test_5aikygh29nc6u68xuib",
                            "schedule_date": "2018-03-01",
                            "retry_date": "2018-03-02",
                            "processed_at": "2018-03-02T01:39:55Z",
                            "status": "failed",
                            "message": "charge could not be captured",
                            "result": "chrg_test_5b4tnbjlgzqajw79r8y",
                            "created": "2018-03-01T01:35:51Z"
                        }
                    ]
                },
                "next_occurrence_dates": [
                    "2018-03-01",
                    "2018-04-01",
                    "2018-05-01",
                    "2018-06-01",
                    "2018-07-01",
                    "2018-08-01",
                    "2018-09-01",
                    "2018-10-01",
                    "2018-11-01",
                    "2018-12-01",
                    "2019-01-01"
                ],
                "created": "2018-01-04T04:55:30Z"
            }

        ]
    }
        , {
            'server': 'nginx/1.1',
            'content-type': 'application/json',
        });