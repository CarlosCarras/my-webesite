#!/bin/bash
# Sets up the website development workflow.
# NOTE: newtab is defined in the '~/.bash_profile' file

open .
atom .
newtab eval "cd server; npm start"
newtab eval "cd client; npm start"
