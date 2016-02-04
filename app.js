/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
angular.module('app', ['schemaForm'])
  .controller('ExampleCtrl', function($scope, $rootScope){
    $scope.schema = {
      "type": "object",
      "title": "Comment",
      "properties": {
        "name": {
          "title": "Name",
          "type": "string"
        },
        "email": {
          "title": "Email",
          "type": "string",
          "pattern": "^\\S+@\\S+$",
          "description": "Email will be used for evil."
        },
        "stuffyoulike": {
          "title": "Stuff you like",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "comment": {
          "title": "Comment",
          "type": "string",
          "maxLength": 20,
          "validationMessage": "Don't be greedy!"
        }
      },
      "required": [
        "name",
        "email",
        "comment"
      ]
    };
    $scope.model = {};
    $scope.form = [
      "name",
      "email",
      {
        "key": "comment",
        "type": "textarea",
        "placeholder": "Make a comment"
      },
      {
        "key": "stuffyoulike",
        "type": "multiselect",
        "titleMap": [
          { "name": "Option 1 Name", "value": "Option 1 Value" },
          { "name": "Option 2 Name", "value": "Option 2 Value" },
          { "name": "Option 3 Name", "value": "Option 3 Value" }
        ]
      },
      {
        "type": "submit",
        "style": "btn-info",
        "title": "OK"
      }
    ];
  });
