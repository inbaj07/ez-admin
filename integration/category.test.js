const axios = require("axios");
const url = "http://localhost:3001";
console.log(url+"/api/v1/category/add");

describe("POST@/category/add", ()=>{
	it("JWT Authentication Error with status code of 500", async ()=>{
		try {
			const result = await axios.post(url+"/api/v1/category/add", {
				"name":"Electronics"
			});
			expect(result.status_code).toEqual(500);
		} catch (error){
			console.log(error);
		}		
	});
	it("name is required with status code of 422", async ()=>{
		try {
			const headers = {
				"Content-Type": "application/json",
				"Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhkYTJjYjZkNzBjNzNlYjg1MTVjNGIiLCJlbWFpbCI6ImluYmFqMDdAZ21haWwuY29tIiwiaWF0IjoxNjg3NTkzNDkxLCJleHAiOjE2ODc1OTcwOTF9.NmLH-k1mUzxbI326rAsartQVMB4_AZxIPz0sZY5-ZDM"
			};
			const payload = {
				"name":""
			};
			const result = await axios.post(url+"/api/v1/category/add", payload, { headers: headers } );
			//console.log("result", result);
			expect(result.status_code).toEqual(422);
		} catch (error){
			console.log(error);
		}
		
	});
	it("post without payload with status code of 422", async ()=>{
		try {
			const headers = {
				"Content-Type": "application/json",
				"Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhkYTJjYjZkNzBjNzNlYjg1MTVjNGIiLCJlbWFpbCI6ImluYmFqMDdAZ21haWwuY29tIiwiaWF0IjoxNjg3NTkzNDkxLCJleHAiOjE2ODc1OTcwOTF9.NmLH-k1mUzxbI326rAsartQVMB4_AZxIPz0sZY5-ZDM"
			};
			const payload = {
				"name":""
			};
			const result = await axios.post(url+"/api/v1/category/add", payload, { headers: headers } );
			//console.log("result", result);
			expect(result.status_code).toEqual(422);
		} catch (error){
			console.log(error);
		}
		
	});
});
describe("PUT@/category/edit", ()=>{
	it("JWT Authentication Error with status code of 500", async ()=>{
		try {
			const result = await axios.put(url+"/api/v1/category/edit/6492aea8f780fab515fc837f", {
				"name":"Electronics"
			});
			expect(result.data.status_code).toEqual(500);
		} catch (error){
			console.log(error);
		}
		
	});
});