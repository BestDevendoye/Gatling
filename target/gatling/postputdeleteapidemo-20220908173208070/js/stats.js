var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13",
        "ok": "13",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "percentiles1": {
        "total": "202",
        "ok": "202",
        "ko": "-"
    },
    "percentiles2": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "percentiles3": {
        "total": "837",
        "ok": "837",
        "ko": "-"
    },
    "percentiles4": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.167",
        "ok": "2.167",
        "ko": "-"
    }
},
contents: {
"req_delete-user-req-06f32": {
        type: "REQUEST",
        name: "delete user req",
path: "delete user req",
pathFormatted: "req_delete-user-req-06f32",
stats: {
    "name": "delete user req",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "193",
        "ok": "193",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "836",
        "ok": "836",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles1": {
        "total": "388",
        "ok": "388",
        "ko": "-"
    },
    "percentiles2": {
        "total": "612",
        "ok": "612",
        "ko": "-"
    },
    "percentiles3": {
        "total": "791",
        "ok": "791",
        "ko": "-"
    },
    "percentiles4": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_create-user-req-048f5": {
        type: "REQUEST",
        name: "create user req",
path: "create user req",
pathFormatted: "req_create-user-req-048f5",
stats: {
    "name": "create user req",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "percentiles1": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles2": {
        "total": "273",
        "ok": "273",
        "ko": "-"
    },
    "percentiles3": {
        "total": "631",
        "ok": "631",
        "ko": "-"
    },
    "percentiles4": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
