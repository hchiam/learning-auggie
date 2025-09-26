# Learning [Auggie](https://github.com/augmentcode/auggie) CLI

Just one of the things I'm learning. https://github.com/hchiam/learning

```sh
npm install -g @augmentcode/auggie
# or
yarn global add @augmentcode/auggie

auggie --version

cd /path/to/a/project

auggie login
# or in future new CLIs, just:
auggie
# or:
auggie "optional starting prompt"
# or maybe preferably to get out of interactive mode (like for CI):
auggie --print "some instruction"
# add --quiet to just get the final output:
auggie --print --quiet "some instruction"
```

and use

```sh
/feedback
```

to send feedback.

- note:
  > To view the directories that you've granted indexing permission to or
    to revoke indexing permission, see the `indexingAllowDirs` field in the
     Augment settings file (`~/.augment/settings.json`).
  - you can easily do that in shell with:
    ```sh
    less ~/.augment/settings.json
    ```

- custom slash commands: 
https://github.com/augmentcode/auggie?tab=readme-ov-file#custom-slash-commands

- GitHub actions for PRs: 
https://github.com/augmentcode/auggie?tab=readme-ov-file#github-actions-for-prs

- for more info, see:
  - https://github.com/augmentcode/auggie
  - https://docs.augmentcode.com/cli/overview
