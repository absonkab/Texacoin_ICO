rsync -r src/ docs/
rsync  build/contracts/* docs/
git init
git add .
git commit -m "smart token for texacoin ICO"
git remote add origin https://github.com/absonkab/Texacoin_ICO.git
git push -u origin master