set -e # halt script on error
zip -r website.zip packages/website/public
curl -H "Content-Type: application/zip" -H "Authorization: Bearer $NETLIFY_API_KEY" --data-binary "@website.zip" https://api.netlify.com/api/v1/sites/1c9ffd71-5ebe-4b76-b516-f4b4a280742d/deploys
