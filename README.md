Example for run this task ****

curl -X GET \
  http://127.0.0.1:1337/find \
  -H 'Postman-Token: 4d282f74-6dc5-482a-a2ff-a16f713115e6' \
  -H 'cache-control: no-cache'

curl -X POST \
  http://127.0.0.1:1337/find \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: b91c41e7-2d6a-4c20-aa27-aa621a1baa19' \
  -H 'cache-control: no-cache' \
  -d '{
	"data1": [4,5,2,3],
	"data2": [1,2,3]
}'


curl -X POST \
  http://127.0.0.1:1337/find \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: b91c41e7-2d6a-4c20-aa27-aa621a1baa19' \
  -H 'cache-control: no-cache' \
  -d '{
	"data1": [4,1, 5,2,3],
	"data2": [1,2,3]
}'