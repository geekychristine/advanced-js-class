# Assignments

These homework assignments are intended to test your understanding of the various concepts and skills that we encounter throughout the class, as well as concepts we've learned previously.

## Get Started

1. Firstly, make sure you're in your `advanced-js-class` directory in your terminal, and on the `main` branch with `git checkout main`.
2. Next, `git pull` to pull down and sync your local repo with the latest changes.
3. Now create a **new** branch with your name followed by the assignment name,
   i.e: `git branch christine/data-wrangling`. This is the **branch naming convention** we'll adopt for future code assignments. Adding your name will ensure your branch is unique.
4. Make sure to run `npm install` in case new project dependencies were added.
5. Navigate to the homework assignment folder in your terminal (i.e.: `cd data-wrangling`), then open up the assignment JS file for specific instructions in the comments.
6. Have fun!

## Doing the Assignments

Each folder inside `/homework/` (this folder) is a self-contained assignment. Some may focus on one particular concept, while others may require a combination of concepts to complete the task. You can test to see if your code completed the tasks by running the test suite for that specific assignment and making sure all the tests pass. They are set up purposefully to fail when you initially pull down the files, because they don't do anything yet. 😁

By default, the test suite is configured to run tests on every folder inside `/homework/`. You can narrow down the test to just the assignment you're working on by passing the filename as a command argument for Jest to search against:
`npm test [filename]`

For example: `npm test data-wrangling`. Jest will do a "fuzzy filter" and run a test against any filename that comes close to your search term, so make sure you're spelling the name correctly.

### Completing the Assignments

Once your code solution is finished and all tests pass:

1. Add the files to your commit with `git add [filename]`.
2. Commit your changes: `git commit -m "Use a descriptive message here please"`.
3. Push your changes to a new remote branch with `git push -u origin <your-branch-name>`.
   The `-u` flag sets the upstream branch at the same time as pushing your changes.
4. On GitHub, find your branch and submit a New Pull Request to the `main` branch to finish your assignment. In the comments, please include a short summary of what you did. This is how I will know you did your homework. 😉

**NOTE:** If you opened a Pull Request and you found an error in your code, don't worry! You can commit and push new changes to the same branch while a pull request is open, and the Pull Request will show the newly pushed changes.
