angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
      function(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

        //Add to the bootstrap directive
        schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            'multiselect',
            'directives/decorators/bootstrap/multiselect/multiselect.html'
        );
        schemaFormDecoratorsProvider.createDirective(
            'multiselect',
            'directives/decorators/bootstrap/multiselect/multiselect.html'
        );
      }
    ]
);
