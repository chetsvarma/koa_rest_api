# koa_rest_api

A simple REST API for simple Autocomplete using Koa.js (Nodejs) and Elasticsearch

Here I am making simple REST API with koa.js and Elasticsearch. In which we are making simple autocomple using elasticsearch.

**Versions :** 

	- npm : 3.5.2
	- node : 8.10.0
	- Koa : 2.8.1
	- elasticsearch : 6.5.4


**Folder Structure :** 
	
	- Model : Query for elasticsearch to fetch data
	- Controller : Make call to model, and return data provided
	- System/Core : Routing logic in router.js, and all error response in errorResponse.js
	
**Files :** 

	- elasticsearch_schema.json : Simple elasticsearch schema for autocomplete.
	- bulk_insert.sh : Sample records to insert into elasticsearch

**List Of API's**

	1. Insert / Update Documents into Elasticsearch
	2. Autocomplete (search) API

**Postman Request :** 

	1. Insert / Update Documents into Elasticsearch : 

		Method : POST
		Url : http://localhost:3000/api/insert
		post_data (form_data) : 

			Key = data:
			Value = {"id": 13, "name": "kathmandu", "description": "Kathmandu is the capital and largest city of Nepal", "type": "city", "tags": ["kathmandu"] }

		Output : 

		If Inserted Successfully : 
								
			{
			    "success": true,
			    "message": "Document Inserted Successfully!!!"
			}
			

		If Already Exists : 
			
			{
			    "success": true,
			    "message": "Document Updated Successfully!!!"
			}
			

		If Error Exists :  
			
			{
			    "success": false,
			    "message": "Sorry Something went Wrong!!!"
			}
			
	

	2. Autocomplete (search) API : 
		method : GET
		Url : http://localhost:3000/api/autocomplete?queryStr=par

		Output : 

		Success : 
			
			[
			    {
			        "_index": "cities",
			        "_type": "city",
			        "_id": "1",
			        "_score": 0.82257307,
			        "_source": {
			            "id": 1,
			            "name": "paris",
			            "description": "paris is beautiful city",
			            "type": "city",
			            "tags": [
			                "paris"
			            ]
			        }
			    }
			]
			

		If Routing Error : 
			
			{
			    "meta": {
			        "status": 404,
			        "is_error": 1,
			        "messages": [
			            "not found"
			        ],
			        "total_records": 0
			    },
			    "data": []
			}		

		Query String Error : 
			
			{
			    "meta": {
			        "status": 200,
			        "is_error": 1,
			        "messages": [
			            "Please Provide Query : 'queryStr'"
			        ],
			        "total_records": 0
			    },
			    "data": []
			}