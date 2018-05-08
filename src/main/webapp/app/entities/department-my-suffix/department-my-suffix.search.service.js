(function() {
    'use strict';

    angular
        .module('jhSampleAngular1App')
        .factory('DepartmentSearch', DepartmentSearch);

    DepartmentSearch.$inject = ['$resource'];

    function DepartmentSearch($resource) {
        var resourceUrl =  'api/_search/departments/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
