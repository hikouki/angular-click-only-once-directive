/*
 * angular-click-only-once-directive v1.0
 * Author: hikouki(github)
 * License: MIT
 */

'use strict';

angular.module('hkClickOnlyOnce.directive', []).directive('hkClickOnlyOnce', ['$parse', function($parse) {
    return {
        restrict : 'A',
        link: function (scope, element, attrs) {
            var handler = $parse(attrs.hkClickOnlyOnce);
            element.one('click', function (e) {
                scope.$apply(handler);
            });
        }
    };
}]);
