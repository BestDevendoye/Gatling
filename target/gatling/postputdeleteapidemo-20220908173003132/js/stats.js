var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13",
        "ok": "3",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "278",
        "ko": "97"
    },
    "maxResponseTime": {
        "total": "826",
        "ok": "823",
        "ko": "826"
    },
    "meanResponseTime": {
        "total": "364",
        "ok": "490",
        "ko": "326"
    },
    "standardDeviation": {
        "total": "237",
        "ok": "239",
        "ko": "223"
    },
    "percentiles1": {
        "total": "278",
        "ok": "368",
        "ko": "277"
    },
    "percentiles2": {
        "total": "490",
        "ok": "596",
        "ko": "460"
    },
    "percentiles3": {
        "total": "824",
        "ok": "778",
        "ko": "695"
    },
    "percentiles4": {
        "total": "826",
        "ok": "814",
        "ko": "800"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 77
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.167",
        "ok": "0.5",
        "ko": "1.667"
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
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "490",
        "ok": "490",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles1": {
        "total": "368",
        "ok": "368",
        "ko": "-"
    },
    "percentiles2": {
        "total": "596",
        "ok": "596",
        "ko": "-"
    },
    "percentiles3": {
        "total": "778",
        "ok": "778",
        "ko": "-"
    },
    "percentiles4": {
        "total": "814",
        "ok": "814",
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
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "-",
        "ko": "97"
    },
    "maxResponseTime": {
        "total": "826",
        "ok": "-",
        "ko": "826"
    },
    "meanResponseTime": {
        "total": "326",
        "ok": "-",
        "ko": "326"
    },
    "standardDeviation": {
        "total": "223",
        "ok": "-",
        "ko": "223"
    },
    "percentiles1": {
        "total": "277",
        "ok": "-",
        "ko": "277"
    },
    "percentiles2": {
        "total": "460",
        "ok": "-",
        "ko": "460"
    },
    "percentiles3": {
        "total": "695",
        "ok": "-",
        "ko": "695"
    },
    "percentiles4": {
        "total": "800",
        "ok": "-",
        "ko": "800"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "-",
        "ko": "1.667"
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
