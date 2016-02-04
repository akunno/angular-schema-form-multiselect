# angular-schema-form-multiselect
bootstrap-multiselect extension for angular-schema-form

====
Provides a decorator for the bootstrap-multiselect (https://github.com/davidstutz/bootstrap-multiselect) library. 
The multiselect is initialized with a default set of options (see angular-multiselect.json). Each form field can be given 
a specific json configuration (see http://davidstutz.github.io/bootstrap-multiselect/#configuration-options for more), 
which extend/override the defaults.

There is also a decorator and form element type called "selectWithDefault" for a single select with a default placeholder.
This decorator will take the value associated with a selectDefault key in the form definition and display it as the first, 
unselectable, empty value option in the list.

Note that bootstrap-multiselect is not added as a bower dependency. It works better on IOS devices without it. 
