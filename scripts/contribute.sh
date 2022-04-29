#! /bin/bash
echo "Welcome to Rhymo's contribution script. You will have to respond to a few questions and you should be fine."

read -p "Did you commit anything (yes/no)? " ONE

if [ $ONE == "yes" ]
then
  read -p "What is your username? " USERNAME
  read -p "What is the title of your change (in-kebab-case)? " CHANGE
  NAME="${USERNAME}/${CHANGE}"

  git checkout -b $NAME
  yarn build

  if yarn test ; then
    echo "
Nice, all tests have passed."
    echo "Pushing..."
  
    git push origin $NAME

    echo "Done. Please go back to GitHub and create a pull request. Please follow the PR guidelines."
  else
    echo "
The tests have failed, please fix it or you won't be able to contribute."
  fi
else
  echo "If you didn't commit anything, please commit your changes and try again."
fi
