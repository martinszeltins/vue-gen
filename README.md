# Generate Vue 3 templates

(!) Contributions are welcome to improve this package.

This package currently works with Linux (and maybe MacOS) only.

### Instructions

````
// Install the package
$ sudo npm install -g vue-gen

// Create an alias
alias vue-gen='/home/USER/Programming/vue-gen/node_modules/.bin/ts-node --transpileOnly /home/USER/Programming/vue-gen/main.ts'

// Set up your project path in settings.json
"projectPath": "/home/USER/my-vue-project"

// Generate a component
vue-gen component directory/MyComponent

// Generate a service
vue-gen service useMyService

// Generate a view
vue-gen view DashboardView

// Generate a type
vue-gen type user

// Generate a form
vue-gen form useUserForm
````

