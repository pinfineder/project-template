# Koodi101 Project Template

## Forking and cloning the repository

Start by forking the repository

> If you work in a group, only one person needs to fork the repository.
> The others need to be members of the repository. See [collaborating with other users](#collaborating)

Then clone the forked repository using SSH

```bash
git clone git@github.com:<user>/project-template.git
```

> When you use SSH to clone a repository, you need a [private key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) on your account which is authorized to pull (read) the repository.
>
> Using SSH allows you to push (write) to the repository without providing you username and password! Handy, right?

## Running the project

### Prerequisites

- [nodejs](http://nodejs.org)

You need to start the backend and the frontend separately, so open two
terminal windows, or use a terminal multiplexer:
[`tmux`](https://github.com/tmux/tmux/).

### Backend

```shell
cd backend
npm install
npm run dev
```

The backend is now running at
[http://localhost:9000](http://localhost:9000/api/greeting) and
automatically reacts to changes in the source code.

### Frontend

> Notice that you need to run `npm install` in both directories `backend/` and `frontend/`

```shell
cd frontend
npm install
npm start
```

The frontend is now running at
[http://localhost:8000](http://localhost:8000) and also automatically
rebuilds when the source code changes.

## Clearing the database

The database is stored in a sqlite file in `backend/db/chat.sqlite`.

If you edit the [models](backend/src/models/), you need to remove the
database for the changes to get applied. Sequelize doesn't
automatically
[migrate](https://sequelize.org/master/manual/migrations.html) the
database to the new structure defined in the models.

To clear the database, stop the backend and remove the database file:

> You can stop a running process using `Ctrl-C`

```shell
rm backend/db/database.sqlite
```

<!-- TODO How to manually edit the database using `psql` -->

## Project ideas

- Make the graph look nicer with options from [`chart.js` docs](https://www.chartjs.org/docs/latest/).
- Add a chat application to the page.
  - Fetch all messages and display them.
    > Backend has the same `/api/chats` endpoint from lesson3 available
  - Add a message input box.
  - Optionally add rooms and nicknames. (requires backend API changes and probably nuking the database)
- Publish the frontend on [Vercel](https://vercel.com).
- Add unit tests to make sure the backend works correctly.
- Come up with more ideas and turn them into features on the page!

## Collaborating

> The owner of the forked repository in your group needs to add the
> other members as collaborators

Collaboration is the heart of Open Source software development in GitHub.

After creating/forking a repository, owner may add collaborators to it
alternatively in the GitHub repository page by clicking `settings ->
collaborators` or by going to the web page by the following URL where
`<username>` is replaced by a repository owner's username

Collaborators can clone the owner's repository using SSH and push
changes to it.

```bash
https://github.com/<username>/project-template/settings/access
```

And, by searching usernames of other members, the owner can invite
them to collaborate in the project and allow pushing to the
repository.

Upon inviting your group members, they will receive the invitation via
email. Only after accepting the invitation are they given access to
the repository.

[Here is the help page with images](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)

### Collaborating example

- Niklash on is making changes to `src/index.jsx`, committing them and finally pushing them to GitHub.

![computer1](computer1.gif)

> Git commands used:
>
> - `git add`
> - `git diff`
> - `git status`
> - `git commit -m "message"`
> - `git push`

- Severi is then pulling the changes and viewing them.

![computer1](computer2.gif)

> Git commands used:
>
> - `git pull`
> - `git show`

## Merge conflicts

Sometimes when multiple collaborators are working on the same Git repository locally at the same time, they make conflicting changes. The conflicts will show up once one of them tries to pull the other's changes and git spits out an error like the following:

```
CONFLICT (content): Merge conflict in index.js
Automatic merge failed; fix conflicts and then commit the result.
```

> Git tries to resolve merge conflicts automatically, which sometimes works. However, even after automatically resolving conflicts, one should test that the project works as there can be semantic conflicts in the code after the merge.

Some common causes for merge conflicts are:
- Both change the same part of a file, e.g. even just whitespace and indentation changes can cause a conflict
- Both move, rename or delete the same file

Here are some resources for dealing with merge conflicts:
- https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts
- https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging

## Running with Docker (advanced)

Then build the docker images and start the services

```bash
docker-compose build
docker-compose up
```

Or with a single command

```bash
docker-compose up --build
```

> Hit Ctrl+C to stop the processes

<details>
<summary> Optionally you can run the process in the background </summary>
<br>

Add `-d` to the docker-compose commands.

```bash
docker-compose build
docker-compose up -d
```

Or with a single command

```bash
docker-compose up --build -d
```

> `-d` comes from the word _detached_

To see if the project is running

```bash
docker-compose ps
```

To stop the running background processes and remove the built images

```bash
docker-compose down --rmi all --remove-orphans
```

> If the processes are not running `docker-compose down` also removes the _containers_ and images

If you don't want to remove the images, you can just run

```bash
docker-compose down
```

</details>
