curl -X POST "localhost:9200/cities/city/_bulk" -H 'Content-Type: application/json' -d'
{ "index":{ "_id" : 1 } }
{"id": 1, "name": "paris", "description": "paris is beautiful city", "type": "city", "tags": ["paris"] }
{ "index":{ "_id" : 2 } }
{"id": 2, "name": "Mumbai", "description": "Mumbai is beautiful city", "type": "city", "tags": ["Mumbai"] }
{ "index":{ "_id" : 3 } }
{"id": 3, "name": "Bangalore", "description": "Bengaluru (also called Bangalore) is the capital of Indias southern Karnataka state.", "type": "city", "tags": ["Bangalore"] }
{ "index":{ "_id" : 4 } }
{"id": 4, "name": "Hyderabad", "description": "Hyderabad is the capital of southern Indias Telangana state. A major center for the technology industry, its home to many upscale restaurants and shops.", "type": "city", "tags": ["Hyderabad"] }
{ "index":{ "_id" : 5 } }
{"id": 5, "name": "London", "description": "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.", "type": "city", "tags": ["London"] }
{ "index":{ "_id" : 6 } }
{"id": 6, "name": "New York City", "description": "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough thats among the worlds major commercial, financial and cultural centers.", "type": "city", "tags": ["New York City"] }
{ "index":{ "_id" : 7 } }
{"id": 7, "name": "Manchester", "description": "Manchester is a major city in the northwest of England with a rich industrial heritage.", "type": "city", "tags": ["Manchester"] }
{ "index":{ "_id" : 8 } }
{"id": 8, "name": "Liverpool", "description": "Liverpool is a maritime city in northwest England, where the River Mersey meets the Irish Sea.", "type": "city", "tags": ["Liverpool"] }
'