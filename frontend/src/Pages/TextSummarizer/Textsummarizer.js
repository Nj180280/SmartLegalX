import React, { useState, useRef } from 'react';
import './Textsummarizer.css';
import axios from 'axios';

function Textsummarizer() {
    const messageInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const [pdfFile, setPdfFile] = useState(null);
    const handlePDFChange = (event) => {
        setPdfFile(event.target.files[0]);
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const clearText = () => {
        setInputText('');
        setOutputText('');
    };

    const summarizeText = async () => {
        const textToSummarize = inputText.trim();

        if (textToSummarize === '') {
            window.alert('Enter some text to summarize');
            return;
        }

        // Send the text to your Flask API for summarization
        axios
            .post('/summarize', { article: textToSummarize })
            .then((response) => {
                const { summary } = response.data;
                setOutputText(summary);
            })
            .catch((error) => {
                console.error('Error summarizing text:', error);
            });
    };


    const summarizeDoc = async () => {

        // const formData = new FormData();
        // formData.append('file', pdfFile);
        try {
            const response = await axios.get("/upload");
            setOutputText(response.data.summary);
        } catch (error) {
            console.log(error);
        }

        // await fetch('/upload', {
        //     body: formData
        // }).then((response) => {
        //     console.log("PDF file sent successfully");
        //     return response.json();
        // })
        // .then((data) => {
        //     setOutputText(data.summary);
        //     console.log(data.summary);
        //     })
        // .catch((error) => {
        //     console.error('Error summarizing PDF:', error);
        // });
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
                    <label htmlFor="myfile" className='mx-4'><u>Select a file (PDF format):</u></label>
                    <input type="file" name='file' accept=".pdf" onChange={handlePDFChange} />
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

                <button
                    type="button"
                    className="btn btn-primary my-4 mx-5"
                    id="send-btn"
                    onClick={summarizeDoc}
                >
                    Summarize Doc
                </button>

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
