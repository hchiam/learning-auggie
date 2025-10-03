# Learning [Auggie](https://github.com/augmentcode/auggie) CLI

Just one of the things I'm learning. <https://github.com/hchiam/learning>

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

```sh
# if you have the fancy CLI interface showing, you can type
/ask
# then hit enter and THEN type your prompt
```

and use

```sh
/feedback
```

to send feedback.

And to exit from the fancy CLI interface:

```sh
/exit
```

- note:
  > To view the directories that you've granted indexing permission to or
    to revoke indexing permission, see the `indexingAllowDirs` field in the
     Augment settings file (`~/.augment/settings.json`).
  - you can easily do that in shell with:

    ```sh
    less ~/.augment/settings.json
    ```

- custom slash commands:
<https://github.com/augmentcode/auggie?tab=readme-ov-file#custom-slash-commands>

- GitHub actions for PRs:
<https://github.com/augmentcode/auggie?tab=readme-ov-file#github-actions-for-prs>

- for more info, see:
  - <https://github.com/augmentcode/auggie>
  - <https://docs.augmentcode.com/cli/overview>

- my personal suggestions for faster typing in CLI: (set up in .bash_profile)

  ```bash
  alias aug='auggie'
  alias augp='auggie --print '
  alias augpq='auggie --print --quiet '
  alias augq='auggie --quiet '
  ```

## practice

- updating `~/.augment/settings.json` worked for me! (as opposed to this project's `.augment/settings.json`)

```sh
augp 'create a subfolder "chrome-built-in-ai-apis" and empty readme in it'

# then I manually wrote my own notes in the README.md

augp 'help me create a rules file to specify the allowed tools that auggie cli can use in this folder'
# this generated .augment folder, AGENTS.md, and CLAUDE.md (not sure how correct the content of those 2 md files is though)

augp "create a .sh file to run perl -i -C -pe 's/[\x{200B}-\x{200D}\x{FEFF}\x{00A0}\x{2028}\x{2029}\x{E0020}-\x{E007E}\x{FFFD}]//g' *.md"
# this generated clean_markdown.sh, which can be run with

bash clean_markdown.sh

augp 'HMW set up the rules files for auggie cli to always ask for permission before running any and all tools?'
# this created folder .augment and some files in it,
# but then it got an error

rm -rf .augment/*

# after googling, i found this: https://docs.augmentcode.com/cli/permissions#configuration-files

augp "set up the settings.json rules file for auggie cli to always ask for permission before running any and all tools? minimally do something like regex '*' and always ask"
# this generated .augment/settings.json, but seems overly verbose

augp 'simplify settings.json - its unnecessarily verbose right now'

augp "check https://docs.augmentcode.com/cli/permissions#configuration-files and confirm you've typed things out correctly in .augment/settings.json"

augp 'check https://docs.augmentcode.com/cli/permissions - are you sure that "tool-name": "*" in .augment/settings.json is correct? should it rather be "shell-input-regex": "*" or is that unnecessary to force all tool calls to require asking for explicit user permission?'

augp 'check https://docs.augmentcode.com/cli/permissions - are you sure that "tool-name": "*" in .augment/settings.json is correct? should it rather be "shell-input-regex": "*" or is that unnecessary to force all tool calls to require asking for explicit user permission? help me fix this'

augp "is it possible to simply disable all tool calls?"

augp "look at https://docs.augmentcode.com/cli/permissions#available-tools and add all available tools and make them all require user approval"
# retrying this a few times finally edited .augment/settings.json to add all currently-available rules found at https://docs.augmentcode.com/cli/permissions#available-tools

# but i'm still able to do this:
augp "change .augment/settings.json to allow write-process"
aug "change .augment/settings.json to allow write-process"
augp "clear README.md"

augp "edit AGENTS.md and CLAUDE.md if/as necessary to always require asking the user (ask-user in .augment/settings.json) even for reading/editing/creating/deleting files"
# this didn't help prevent the commands above either

aug
# auggie cli isn't respecting ask-user in the .augment/settings.json file
# it suggested updating ~/.augment/settings.json with the tool-permissions rules

augp "clear README.md"
# this was denied (non-interactive mode)
aug "clear README.md"
# this required asking user for permission to "read file" (view) and "edit file" (str-replace-editor)

# CONCLUSION: updating ~/.augment/settings.json worked for me!

augp 'generate a one-file html file demo in chrome-built-in-ai-apis'
# this now correctly won't work, so
# have to go in interactive view:
aug 'generate a one-file html file demo in chrome-built-in-ai-apis'
# Here are the messages you've sent me verbatim in this conversation:
#      1. "create an empty test.txt file"
#      2. "actually nvm"
#      3. "rm"
#      4. "now run the demo"
#      5. "repeat back to me verbatim what messages i've sent you in this conversation"

aug "make clean_markdown.sh actually apply to all file types"
# i nudged it in the conversation to clarify/narrow down the task

aug "rename clean_markdown.sh to what makes more sense from its code"
```
