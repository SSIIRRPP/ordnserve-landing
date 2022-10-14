
npm run exp &&

aws s3 rm s3://ordnserve-testing-landing --recursive && 

aws s3 cp ./out s3://ordnserve-testing-landing --recursive &&

aws cloudfront create-invalidation --distribution-id E371HS5UDX9LF3 --paths "/index.html"

echo "$(tput setaf 2)SUCCESFULLY UPDATED"