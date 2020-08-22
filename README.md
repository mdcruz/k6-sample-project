# K6 Example Project

This is an example github repo to show how to write performance tests using [k6](https://k6.io/).

## Running the test

Make sure you have k6 installed. Then on the root of this project, type in the following command.

`k6 run -u 10 -d 30s test-script.js`

The above script will run the test with 10 virtual users for 30 seconds.
