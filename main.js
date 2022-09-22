var fs = require('fs');
var path = require('path');
var settings = fs.readFileSync(path.join(__dirname, 'settings.json'), 'utf8');
settings = JSON.parse(settings);
var PROJECT_LOCATION = settings.projectPath;
var args = process.argv.slice(2);
var generate = function (name, templateFile, replace, fileDirectory, extension, successMessage) {
    var nameClean = name.split('/').pop();
    if (fileDirectory === 'types') {
        nameClean = nameClean.charAt(0).toUpperCase() + nameClean.slice(1);
    }
    var template = fs.readFileSync(path.join(__dirname, 'templates', templateFile), 'utf8');
    if (replace) {
        template = template.replace(replace, nameClean);
    }
    var directory = "".concat(PROJECT_LOCATION, "/src/").concat(fileDirectory, "/").concat(name);
    directory = directory.split('/').slice(0, -1).join('/');
    var filePath = "".concat(PROJECT_LOCATION, "/src/").concat(fileDirectory, "/").concat(name, ".").concat(extension);
    if (!fs.existsSync(directory)) {
        console.log('(!) Directory did not exist, created a new directory');
        fs.mkdirSync(directory, { recursive: true });
    }
    fs.writeFileSync(filePath, template);
    console.log("".concat(successMessage, ": ").concat(filePath));
};
switch (args[0]) {
    case 'component':
        if (args[1][0] !== args[1][0].toUpperCase())
            throw '(!) ERROR: Component Filename Must Start With Capital Letter';
        generate(args[1], 'component.vue', 'COMPONENT_NAME', 'components', 'vue', 'New component created');
        break;
    case 'service':
        if (!args[1].includes('Service'))
            throw '(!) ERROR: Service MUST CONTAIN THE WORD SERVICE';
        generate(args[1], 'service.ts', 'useCOMPOSABLE', 'services', 'ts', 'New service created');
        break;
    case 'type':
        if (args[1][0] !== args[1][0].toLocaleLowerCase())
            throw '(!) ERROR: Type Filename Must Start With Lowercase Letter';
        generate(args[1], 'type.ts', 'MyCustomType', 'types', 'ts', 'New type created');
        break;
    case 'form':
        if (args[1][0] !== args[1][0].toLocaleLowerCase())
            throw '(!) ERROR: Form Filename Must Start With Lowercase Letter';
        generate(args[1], 'form.ts', '', 'forms', 'ts', 'New form created');
        break;
    case 'view':
        if (!args[1].includes('View'))
            throw '(!) ERROR: View MUST CONTAIN THE WORD View at the end';
        generate(args[1], 'view.vue', '', 'views', 'vue', 'New view created');
        break;
    default:
        console.log('Sorry, that is not something I know how to do.');
}
