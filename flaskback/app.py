from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from transformers import pipeline
import fitz  # PyMuPDF library for PDF text extraction
import os
from werkzeug.utils import secure_filename
import urllib.request

app = Flask(__name__)
CORS(app)

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = "D:/35_ZXC/flaskback/assets"
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024


def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


summarizer = pipeline("summarization", model="t5-base")

@app.route('/summarize', methods=['POST'])
def summarize_text():
    try:
        article = request.json['article']
        if not article:
            return jsonify({'error': 'Empty input'})

        # Perform summarization using the pipeline
        summary = summarizer(article, max_length=130, min_length=30, do_sample=False)

        # Extract the summary text from the result
        summary_text = summary[0]['summary_text']

        # Create a dictionary to store the summary
        summary_dict = {'summary': summary_text}

        # Return the summary as JSON
        return jsonify(summary_dict)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if the post request has the file part
    if 'file' not in request.files:
        resp = jsonify({'message': 'No file part in the request'})
        resp.status_code = 400
        return resp

    file = request.files['file']

    if file.filename == '':
        resp = jsonify({'message': 'No file selected for uploading'})
        resp.status_code = 400
        return resp

    if file and allowed_file(file.filename):
        try:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

            # Extract text from the PDF file
            pdf = fitz.open(file_path)
            text = ""
            for page_num in range(pdf.page_count):
                page = pdf.load_page(page_num)
                text += page.get_text()

            # Perform summarization using the pipeline
            summary = summarizer(text, max_length=130, min_length=30, do_sample=False)

            # Extract the summary text from the result
            summary_text = summary[0]['summary_text']

            resp = jsonify({'message': 'File successfully uploaded and summarized', 'summary': summary_text})
            resp.status_code = 201
            return resp
        except Exception as e:
            resp = jsonify({'message': 'Error processing the uploaded file', 'error': str(e)})
            resp.status_code = 500
            return resp
    else:
        resp = jsonify({'message': 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})
        resp.status_code = 400
        return resp


if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0",use_reloader=False)

flask_cors.CORS(app, expose_headers='Authorization')

