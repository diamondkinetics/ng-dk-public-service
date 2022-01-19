# ng-dk-public-service

A library of Angular services that integrate with the Diamond Kinetics public API.

## Notes

Any client app utilizing this package will need to implement their own request interceptor in order to hit the correct
API server based on environment. There is an example of this in
`projects/ng-dk-public-service-showcase/src/app/util/request-interceptor`.

## This is a work in progress
Every endpoint in our API may not be accounted for in this library. If you happen to need an endpoint accounted for,
please open an issue or pull request.
