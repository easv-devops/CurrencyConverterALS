import http from 'k6/http';

export let options = {
    stages: [
        { duration: '30s', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
        { duration: '50s', target: 100 }, // stay at 100 users for 10 minutes
        { duration: '30s', target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
        http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },
};

export default function () {
    http.get('http://213.199.36.5:5001/currency');
}
