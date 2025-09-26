# Learning [Auggie](https://github.com/augmentcode/auggie) CLI

Just one of the things I'm learning. https://github.com/hchiam/learning

```sh
npm install -g @augmentcode/auggie
# or
yarn global add @augmentcode/auggie

auggie --version

auggie login

cd /path/to/a/project
auggie "optional starting prompt"
# or maybe preferably to get out of interactive mode (like for CI):
auggie --print "some instruction"
# add --quiet to just get the final output
```

and use

```sh
/feedback
```

to send feedback.

- custom slash commands: 
https://github.com/augmentcode/auggie?tab=readme-ov-file#custom-slash-commands

- GitHub actions for PRs: 
https://github.com/augmentcode/auggie?tab=readme-ov-file#github-actions-for-prs

- see https://github.com/augmentcode/auggie for more info
