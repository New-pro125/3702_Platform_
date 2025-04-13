import React, { useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
const CreateChannel = () => {
	const [ChannelName, setChannelName] = useState("");
	const [code, setcode] = useState("");
	const [ChannelDescription, setChannelDescription] = useState("");
	const [ChannelType, setChannelType] = useState("Public");
	const [keywords, setKeywords] = useState([]);
	const [error, seterrors] = useState([]);
	const {id}=useParams();
	const options = ["Public", "Private"];
	const HandleSubmit = (e) => {
		e.preventDefault();
		const errors = {};
		if (!ChannelName) {
			errors.ChannelName = "Channel Name is required";
		}
		if (!ChannelDescription) {
			errors.ChannelDescription = "Channel Description is required";
		}
		if (keywords.length == 0) {
			errors.keywords = "keywords are required";
		}
		if(!code) errors.code="Code is required";
		seterrors(errors);
		if (Object.keys(errors).length === 0) {
			// Submit the form if there are no errors
			let keywordsarr = keywords.split(/[, ]/);
			keywordsarr.filter((word) => word);
			//console.log(keywordsarr);
			/** username = request_body["username"]
    channel_id = request_body["channel_id"]
    type = request_body["type"]
    description = request_body["description"]
    title = request_body["title"]
    code = request_body["code"]
 */
			axios.post("http://127.0.0.1:8000/channels/create-channel", 
			{
				Headers:{
					Authorization:`Bearer ${sessionStorage.getItem("JWTtoken")}`,
				},
				"channel_id":id,
				"type":ChannelType,
				"title":ChannelName,
				"code":code,
				"username":sessionStorage.getItem("username"),
				"description":ChannelDescription
			})
		}
	};
	return (
		<div className="bg-amber-100">
			<h1 className="text-center font-bold text-4xl mb-6">Create a Channel!</h1>
			<form
				onSubmit={HandleSubmit}
				className="bg-amber-100 flex flex-col justify-center  items-center px-4 py-2  ">
				<div className="mb-4">
					<label htmlFor="Name" className=" block mx-4">
						Name
					</label>
					<input
						id="Name"
						name="Name"
						placeholder="Enter the Name:"
						className="  my-1 px-2 py-1 "
						onChange={(e) => {
							setChannelName(e.target.value);
						}}
					/>
					{error.ChannelName && (
						<p className="text-red-500 text-sm mt-1 text-center">
							{error.ChannelName}
						</p>
					)}
				</div>
				<div className="mb-4">
					<div className="w-64">
						<label htmlFor="Type" className="block font-medium mb-1">
							Type
						</label>
						<select
							id="Type"
							className={`w-full p-2 border ${
								error.Type ? "border-red-500" : "border-gray-300"
							} rounded`}
							onChange={(e) => {
								setChannelType(e.target.value);
							}}>
							{error.Type && (
								<p className="text-red-500 text-sm mt-1">{error.Type}</p>
							)}
							{options.map((Type, index) => (
								<option key={index} value={Type}>
									{Type}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="mb-4">
					<label htmlFor="Description" className=" block mx-4">
						Description
					</label>
					<textarea
						rows={6}
						cols={60}
						id="Description"
						name="Description"
						placeholder="Enter the Description:"
						className="  my-1 px-2 py-1 "
						onChange={(e) => {
							setChannelDescription(e.target.value);
						}}
					/>
					{error.ChannelDescription && (
						<p className="text-red-500 text-sm mt-1 text-center">
							{error.ChannelDescription}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="Keywords" className=" block mx-4">
						Keywords
					</label>
					<input
						id="Keywords"
						name="Keywords"
						placeholder="Enter the Keywords:"
						className="  my-1 px-2 py-1 "
						onChange={(e) => {
							setKeywords(e.target.value);
						}}
					/>
					{error.keywords && (
						<p className="text-red-500 text-sm mt-1 text-center">
							{error.keywords}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="Code" className=" block mx-4">
						Code
					</label>
					<input
						id="Code"
						name="Code"
						placeholder="Enter the Code:"
						className="  my-1 px-2 py-1 "
						onChange={(e) => {
							setcode(e.target.value);
						}}
					/>
					{error.code && (
						<p className="text-red-500 text-sm mt-1 text-center">
							{error.code}
						</p>
					)}
				</div>

				<button className="border border-black rounded-xl w-48 my-6 px-4 py-2 hover:bg-black hover:text-white mx-auto">
					Create
				</button>
			</form>
		</div>
	);
};

export default CreateChannel;
