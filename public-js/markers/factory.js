angular.module('iGovMarkers')
    .factory('iGovMarkers', function ($http, iGovMarkersDefaults, iGovMarkersSchema) {
        var markers = iGovMarkersDefaults;
        var schema = iGovMarkersSchema;
        return {
            getMarkers: function () {
                return markers;
            },
            validateMarkers: function () {
                $http.post('/api/markers/validate', {
                    markers: markers,
                    schema: schema
                })
                    .then(function (response) {
                        var data = response.data;
                        if (!data.valid)
                            console.error('markers validation failed', data.errors);
                        else
                            console.log('markers are valid');
                    });
            },
            grepByPrefix: function (section, prefix) {
                return _.transform(_.pairs(markers[section]), function (result, value) {
                    if (value[0].indexOf(prefix) === 0) result.push(value[1]);
                });
            }
        }
    });
