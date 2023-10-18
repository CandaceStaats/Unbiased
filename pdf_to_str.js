// Import libraries
const fs = require('fs');
const PDFParser = require('pdf-parse');

// Error class
class NormalizationError extends Error {
	constructor(message) {
		super(message);
		this.name = "NormalizationError"
	}
}

/**
 * @brief	Convert the PDF's text to a normalized form; inserting
 * 			line breaks between lines and sections.
 * @param	textContent The text content member of the PDF file.
 * @returns Normalized text.
 */
function process_text_content(textContent) {
	let lastY, text = '';
	let styleAscent;
	for (let item of textContent.items) {
		if (lastY == item.transform[5] || !lastY) {
			text += item.str;
		} else {
			if (styleAscent != textContent.styles[item.fontName].ascent) {
				text += '\n';
			}
			if (item.str == '●' || item.str == '-') {
				text += '\n' + item.str + ' ';
			} else {
				text += '\n' + item.str;
			}
		}
		lastY = item.transform[5];
		styleAscent = textContent.styles[item.fontName].ascent
	}
	return text
}

// PDFParser library configuration
function render_page(pageData) {
    //check documents https://mozilla.github.io/pdf.js/
    let render_options = {
        //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
        normalizeWhitespace: false,
        //do not attempt to combine same line TextItem's. The default value is `false`.
        disableCombineTextItems: false
    }
    return pageData.getTextContent(render_options).then(process_text_content);
}

let options = {
    pagerender: render_page
}

async function pdfbuf_normalize(buf) {
	let parsedBuf;
	try {
		parsedBuf = await PDFParser(buf, options);
	} catch (error) {
		throw new NormalizationError("Normalization couldn't be performed");
	}
	return parsedBuf.text;
}

/**
 * @brief	Extract raw text from a PDF file. Multiple consecutive
 * 			line breaks delineate sections.
 * @param	path	Path to the PDF to extract.
 * @return	The raw text, as one string.
 */
function pdf_normalize(path) {
	let buf;
	try {
		buf = fs.readFileSync(path);
	} catch (error) {
		throw new NormalizationError("Normalization couldn't be performed")
	}
	return pdfbuf_normalize(buf)
}

// Usage example:
/*async function test() {
	const testPath = 'Resume-Paris.pdf';
	let str;
	try {
		str = await pdf_normalize(testPath);
		console.log(str);
	} catch (e) {
		console.error(e);
	}
}
test();*/