import { Configuration, OpenAIApi } from 'openai';

import '../styles/Chat.css';

import FormSection from './FormSection';
import AnswerSection from './AnswerSection';

import { useState } from 'react';

const Chat = (props) => {
    const REACT_APP_OPENAI_API_KEY=''

	const configuration = new Configuration({
		apiKey: REACT_APP_OPENAI_API_KEY,
	});

    const openai = new OpenAIApi(configuration);

	const [storedValues, setStoredValues] = useState([]);

	const generateResponse = async (newQuestion, setNewQuestion) => {
		let options = {
			model: 'text-davinci-003',
			temperature: 0,
			max_tokens: 100,
			top_p: 1,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
			stop: ['/'],
		};

		let completeOptions = {
			...options,
			prompt: newQuestion,
		};

		const response = await openai.createCompletion(completeOptions);

		if (response.data.choices) {
			setStoredValues([
				{
					question: newQuestion,
					answer: response.data.choices[0].text,
				},
				...storedValues,
			]);
			setNewQuestion('');
		}
	};

	return (props.trigger) ? (
		<div>
			<div className="header-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
			  <h1 style={{ fontSize: '24px', margin: '0', textAlign: 'center' }}>ChatGPT</h1>
			  {storedValues.length < 1 && (
			    <p></p>
			  )}
			</div>
			<FormSection generateResponse={generateResponse} />
			{storedValues.length > 0 && <AnswerSection storedValues={storedValues} />}
		</div>
	) : "";
};

export default Chat;
