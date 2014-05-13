meteor-cms-bootstrap-3
=====================================

Prerequisites
-------------

Install Meteor

`curl https://install.meteor.com/ | sh`

Install Node

`brew install node`

Use the meteorite package manager
http://oortcloud.github.com/meteorite/

`[sudo] npm install -g meteorite`

Setup
-------------
```bash
cd ~/path/to/projects
mkdir meteor-cms-bootstrap-3
git clone git@github.com:dennismonsewicz/meteor-cms-bootstrap-3.git meteor-cms-bootstrap-3
cd meteor-cms-bootstrap-3
mrt install
meteor --settings settings.json
```

First-Time Login
-------------
When you fork this repo and start up the app for the first time (after installing all dependencies)
the server will create an admin level login.

```
Username: admin
Password: abc123
```

Front-end Template
-------------
Currently, the front-end template that is in place is http://www.blacktie.co/demo/instant/index.html

Feel free to rip this out and add your own! In the long-term 10,000 foot view, there is no plan to implement Templating, but I could be persuaded :)

Settings.json
-------------
There are a few front-end helpers that are used to populate (see `client/helpers/app_helpers.js`) a few variables in the footer.
To modify these variables, please replace the placeholder text in `settings.json` with your own


Contributing
-------------
Contributors are very welcome. It's simple as cloning this repo, working on your bug or feature and putting in a Pull Request for approval

TODO
-------------
* Add form validation
* Add public routes for posts
* Build in front-end template
