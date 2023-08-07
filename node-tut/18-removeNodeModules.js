// We cannot install every single module and add
// that to the github repository as that would 
// increase the size of our project immensely.
// Cloning would become extremely difficult if we have
// Gigabytes worth of packages to install.

// In addition to that, some packages might be
// already exisiting in the user's workspace

// So, to tackle this issue we .gitignore the 
// node modules but maintaint a list of all the
// modules in the package.json file.

// Running npm install after cloning the project
// downloads all the necessary packages and 
// dependencies. 
