rsync -r src/ docs/
rsync  build/contracts/* docs/
git add .
git commit -m "smart token for texacoin ICO - set crowdsale rate"
git push -u origin master