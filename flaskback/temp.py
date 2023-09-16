import fitz  # PyMuPDF library for PDF text extraction

def summarize_text_function(text):
    # Placeholder for your summarization logic
    return text[:100]  # Just returning the first 100 characters as an example

def main():
    pdf_path = "assets/IndianLegal.pdf"  # Replace with the path to your PDF file
    pdf = fitz.open(pdf_path)
    text = ""

    for page_num in range(pdf.page_count):
        page = pdf.load_page(page_num)
        text += page.get_text()
    
    print(text)
    summarized_text = summarize_text_function(text)

    with open("output_summary.txt", "w") as output_file:
        output_file.write(summarized_text)

if __name__ == '__main__':
    main()
