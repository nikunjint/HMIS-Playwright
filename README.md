# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm install / yarn install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# MIDAS-HMIS Frontend Development

This document serves as a guide for working with Git in our development process. By following these steps, you can work efficiently and avoid conflicts when collaborating with others. 

## Check the branch you are on

```
// check local branch
git branch
```
Please make sure you are on develop. Your statring branch should be develop whenever you are starting a new task.

## Updating Local Repository

The first and foremost thing is to update your local repository to ensure that you have the latest source code. Use the git pull command to update your local repository.
```
git pull
```
## Creating a New Branch

When working on a new feature or module, it is important to create a new branch to avoid conflicts with the main develop branch. This can be done using the git checkout command with the -b flag.

```
git checkout -b user-organization
```
  

## Making Changes

Once you have created a new branch, you can start making changes to the code. Use your preferred editor to make changes to the files.

  

## Staging Changes and Committing

After making changes to the code, stage the modified files using the git add command. Then, commit your changes with a descriptive commit message using the git commit command.

```
git add .
git commit -m "Added new feature X to User module"
```
  

## Updating the Development Branch

To get the latest changes from the remote repository, use the git checkout command to switch to the develop branch. Then, use git pull to get the latest changes and merge them into your local develop branch.

```
git checkout develop
git pull
git merge user-organization
```
  

## Pushing Changes

Push your changes to the remote repository using the following command:
```
git push
```
  

## Deleting Local Branch

After merging your changes into the development branch, delete your local branch using the following command:

```
git branch -D user-organization
```
  

# Conclusion

By following these Git workflows, you can work efficiently and avoid conflicts when collaborating with others. Remember to always create a new branch for new features or modules, use descriptive commit messages, and push changes regularly.
