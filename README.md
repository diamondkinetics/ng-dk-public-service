# ng-dk-public-service

A library of Angular services that integrate with the Diamond Kinetics public API.

## Notes

Any client app utilizing this package will need to implement their own request interceptor in order to hit the correct
API server based on environment. There is an example of this in
`projects/ng-dk-public-service-showcase/src/app/util/request-interceptor`.