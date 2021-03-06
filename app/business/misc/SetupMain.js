(function (window) {
    define([
        'angular',
        '_',
        'utilities/EnvironmentSniffer',
        'CONFIG',
        'misc/controllers/EnvDetectionController'
    ], function (
        angular,
        _,
        EnvironmentSniffer,
        Configuration,
        EnvDetectionController
    ) {
        EnvDetectionController.$inject = [
            '$scope',
            '$http',
            'Environment',
            'CONFIG'
        ];

        var setup = angular.module('setup', [])
                        .controller('EnvDetectionController', EnvDetectionController)
                        .factory('Environment', EnvironmentSniffer)
                        .factory('CONFIG', Configuration);

        angular.bootstrap(document, ['setup']);
    });
}(this));
