# Next 14 App

## General Setup For Development

Clone this repository, install dependencies and start application:

```bash
git clone <repo url>
cd <repo name>
yarn
```

Create a file called `.env` in the root folder and add the
project's environment variables. Make sure the variables are the same as `.env.example`.

```bash
yarn dev #To run the app locally
```
Open http://localhost:3000 with your browser to see the result.

### Development

```bash
git fetch
git pull
git checkout -b <new-branch-name>
```
Make your changes on the new branch. 

### Rules for development

The following rules have been put in place to ensure proper structuring of the project. Please bear in mind that this document will be frequently reviewed and updated.

- Every folder/file name must be in lowercase.
- To name each file, the naming convention should be separated by a dash(-) when its more than one word.
- [SCSS](https://sass-lang.com/documentation/) is be used for styling. Styled component and tailwind css are not allowed. 
- [TypeScript type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) "any" is not allowed except it is ABSOLUTELY necessary.
- Whenever you add a new package or env variable, update the env.example where necessary.
- For a className more than one word, an underscore should be used to separate the words and it must be in lowercase.
- There is a global style folder so there should be no unnecessary repetition of styles.
- Following [prettier](https://prettier.io/docs/en/options.html) rules is a MUST.
- Learn about Next.js features and server components [here](https://nextjs.org/docs/app/building-your-application/rendering/server-components).

### Deployment

commit your changes:

```bash
git commit -m "Your commit message"
```

Merge your branch with the latest changes on the staging:

```bash
git merge origin/dev
```

Resolve merge conflicts, if any. Push your changes:

```bash
yarn build
git push origin <new-branch-name>
```

Create a pull request on your browser/vscode and request for a review.

### Rules for deployment
- Never commit directly to the main branch.
- Each pull request should have a detailed description of what the pr does and a link for testing must be provided.
- Ensure to add labels and tags to each pull request, where necessary.

###  Deployed Environments

- [Staging Environment](https://google.com/)
- [Production Environment](https://google.com/)


Happy coding!
