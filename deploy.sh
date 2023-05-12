#!/usr/bin/env sh
# 執行後，會自動更新 main 與 gh-pages
# abort on errors
set -e

# build
npm run build

read -p "請問本次commit內容是？" commidWord
test –z $commidWord && echo "字串為空" || commidWord="-"$commidWord



# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init

# 第一次執行須執行下面地，第二次就不用了
# git remote add origin https://github.com/Barret0720/FreshHanber.git
git checkout -B main
git add -A
git commit -m "deploy$commidWord"

# if you are deploying to https://Barret0720.github.io
 git push -f origin main   
# git push -f git@github.com:Barret0720/FreshHanber.github.io.git main

# navigate into the build output directory
cd dist
echo > .nojekyll
git init
git checkout -B main
git add -A
git commit -m "deploy$commidWord"
# if you are deploying to https://Barret0720.github.io/FreshHanber
git push -f git@github.com:Barret0720/FreshHanber.git main:gh-pages
cd -