(function() {
    'use strict';

    angular
        .module('jhSampleAngular1App')
        .controller('CountryMySuffixController', CountryMySuffixController);

    CountryMySuffixController.$inject = ['Country', 'CountrySearch'];

    function CountryMySuffixController(Country, CountrySearch) {

        var vm = this;

        vm.countries = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Country.query(function(result) {
                vm.countries = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            CountrySearch.query({query: vm.searchQuery}, function(result) {
                vm.countries = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
