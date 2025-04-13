import React,{useState} from 'react'

const CreateHW = () => {
	const[selectedQuestions,setSelectedQuestions]=useState([]);
	const [error, seterror] = useState({});
	const HandleSubmit = (e) => {
		e.preventDefault();
		const error = {};
	
		if(selectedQuestions.length==0) error.selectedQuestions="HW can't have no question!"
		seterror(error);
		if (Object.keys(error).length === 0) {
			console.log({ selectedQuestions });
			// here is the post request of the
		}
		// use this please datetime.strptime(date_time_str, "%m/%d/%Y %S:%M:%H")
	};
	
	const handleQuestionChange = (event, question) => {
		if (event.target.checked) {
		  setSelectedQuestions([...selectedQuestions, question]);
		} else {
		  const updatedQuestions = selectedQuestions.filter(
			(selectedQuestion) => selectedQuestion !== question
		  );
		  setSelectedQuestions(updatedQuestions);
		}
	  };
	let questions=[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum, ex nec cursus ornare, risus elit placerat lorem, sed mollis urna turpis vitae elit. Aenean a urna justo. Phasellus feugiat aliquet metus, ut varius nunc finibus porttitor. Nunc in scelerisque metus. Aliquam enim massa, sagittis sed erat ultricies, pharetra tincidunt leo. Aenean nulla erat, finibus eu enim sed, commodo ultrices justo. Nullam nec nibh vel magna dignissim convallis et ut felis. Praesent ut purus et odio convallis placerat et sed odio. Duis rutrum ligula nec orci efficitur, a ultrices sem mattis.

	Curabitur imperdiet placerat dolor eget rhoncus. Donec gravida turpis at porttitor dignissim. Maecenas sagittis nisi eget auctor molestie. Donec posuere sapien eros, at dignissim ante tempus in. Curabitur interdum, nisl laoreet dapibus dictum, nibh purus elementum erat, et elementum sem elit id quam. Nunc cursus quam sed vulputate ullamcorper. Nulla ultrices leo ligula, et dignissim sem blandit sed. Integer sodales magna massa, vitae elementum dui dapibus a. Fusce nec elit metus. Vivamus lacinia at libero eget rhoncus.
	
	Pellentesque ut blandit turpis. Mauris auctor enim ut pellentesque bibendum. Nunc ornare, neque eleifend luctus ullamcorper, lorem augue fermentum ex, sed ultrices quam eros quis nibh. Nam quis velit sodales, vehicula dolor vel, ornare neque. Donec eget arcu ullamcorper, porttitor tellus at, elementum dolor. Praesent sapien nunc, placerat ut ligula a, cursus aliquet arcu. Aliquam erat volutpat.` ,'2+2 = ','3+3 = ']
	return (
		<div>
			<h1 className="text-center font-bold text-4xl mb-6">Create a HW!</h1>
				<form onSubmit={HandleSubmit}
				className="bg-amber-100 flex flex-col justify-center  items-center px-4 py-2  "> 
        <div>
					<label>Questions:</label>
					<br />
					{questions.map((question, index) => (
						<div key={index} className="mb-4 hover:border hover:border-black hover:rounded-xl px-4 py-2">
							<input
								type="checkbox"
								checked={selectedQuestions.includes(question)}
								onChange={(event) => handleQuestionChange(event, question)}
								className=""
							/>
							<span>{question}</span>
							
						</div>
					))}
					 {error.selectedQuestions && (
						<p className="text-red-500 text-sm mt-1 text-center">
							{error.selectedQuestions}
						</p>
					)}
				</div>

				<button className="border border-black rounded-xl w-48 my-6 px-4 py-2 hover:bg-black hover:text-white mx-auto">
					Create
				</button>
       
			</form>
    </div>
  )
}

export default CreateHW