import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let res = http.get('http://jsonplaceholder.typicode.com/posts');
  check(res, {
    'is status code 200': (r) => r.status === 200,
  });
}
