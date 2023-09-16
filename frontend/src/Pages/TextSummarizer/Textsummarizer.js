import React, { useState, useEffect, useRef } from 'react';
import './Textsummarizer.css';

function Textsummarizer() {
    const messageInputRef = useRef(null);

    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const clearText = () => {
        setInputText('');
        setOutputText('');
    };

    const summarizeText = () => {
        const textToSummarize = inputText.trim();

        if (textToSummarize === '') {
            window.alert('Enter some text to summarize');
            return;
        }

        // Send the text to your summarization API or function
        // Replace this with your actual summarization logic
        const summarizedText = summarizeFunction(textToSummarize);

        setOutputText(summarizedText);
    };

    // Replace this function with your actual summarization logic
    const summarizeFunction = (text) => {
        // Implement your text summarization logic here
        // For this example, we'll just return the input text as-is
        return text;
    };

    return (
        <div className="container mt-5">
            <h1>Text Summarizer</h1>

            <div className="form-group mt-3">
                <textarea
                    className="form-control ta"
                    rows="10"
                    placeholder="Enter text here . . . "
                    value={inputText}
                    onChange={handleInputChange}
                ></textarea>
                <div className='my-4 uploads'>
                    <label htmlFor="myfile" className='mx-4'><u>Select a file (only PDF/CSV/XML):</u></label>
                    <input type="file" accept="application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" id="myfile" name="myfile" />
                </div>
            </div>

            <div>
                <button
                    type="button"
                    className="btn btn-primary my-4"
                    id="summarize-btn"
                    onClick={summarizeText}
                >
                    Summarize Text
                </button>

                <button type="button" className="btn btn-primary my-4 mx-5" id="send-btn" >Summarize Doc</button>

                <button
                    type="button"
                    className="btn btn-secondary my-4 mx-2"
                    id="clear-btn"
                    onClick={clearText}
                >
                    Clear
                </button>
            </div>

            <h2>Summarized Text:</h2>
            <br />

            <div className="summarized-text mt-3">
                {outputText && <p>{outputText}</p>}
            </div>
        </div>
    );
}

export default Textsummarizer;
