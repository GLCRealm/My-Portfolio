
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  fullDescription?: string;
}

//for backend
export const projects: Project[] = [
  {
    id: 1,
    title: "OVS-Using-Blockchain",
    description: "Decentralized Online Voting System Using Blockchain A secure, tamper-proof voting platform built with FastAPI and custom blockchain logic to ensure transparent and verifiable elections.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    technologies: technologies_used = ["FastAPI", "Flask", "uvicorn", "pydantic", "smtplib", "random", "time", "hashlib", "Custom Python classes", "Jinja2", "HTML/CSS", "json", "dotenv", "os", "SessionMiddleware", "Procfile", "requirements.txt"],
    fullDescription: "The Online Voting System (OVS 2.0) is a decentralized and secure digital voting platform designed to simulate real-world elections in a tamper-proof environment using blockchain technology. This project addresses key challenges in modern digital voting—such as security, transparency, user authentication, and data integrity—through a combination of technologies including FastAPI, Flask, and a custom Python blockchain.Each vote is stored as a block in a blockchain, ensuring immutability and trustless verification. The use of email-based OTP verification ensures that only registered users can participate, and their identity is confirmed before casting votes. The system supports organizational-level elections with leader and organization code management.Ideal for academic demonstrations, blockchain voting simulations, or prototype deployments in institutions, OVS 2.0 brings together web development, cryptography, and system design into one robust package."
  },
  {
    id: 2,
    title: "Duo-Layers-Website",
    description: "Developed a custom BigInteger library in C++ to handle arbitrarily large integer arithmetic, supporting core operations like addition, subtraction, multiplication, division, and modular arithmetic.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    technologies: technologies_used = ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll", "SVG", "MP4 Video", "Custom Cursor Animation", "Responsive Design"],
    fullDescription: "Duo Layers Website is a high-impact, scroll-driven portfolio website built for digital studios, designers, and creative professionals. It combines smooth user interactions, bold visuals, and fluid motion effects to deliver an immersive frontend experience.The site is designed with a minimalist aesthetic using Gilroy typography and dark/light contrast. Powered by Locomotive Scroll and GSAP, it features scroll-based animations, a custom cursor, and seamless section transitions that make navigation feel fluid and engaging. It's a frontend-only project with no backend, perfect for static hosting or creative showcases.Whether you're a UI/UX designer, front-end developer, or creative agency, Duo Layers offers a professional and visually striking template to display your work."
  },
  {
    id: 3,
    title: "NLP-Powered-LLaMA-3-Enabled-PDF-Parser",
    description: "Built an advanced PDF parser integrated with LLaMA 3 to extract, analyze, and interpret textual data using natural language processing techniques. Enabled intelligent querying and summarization of PDF content.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    technologies: ["Natural Language Processing", "Large Language Models (LLaMA 3)", "Python", "PDF Text Extraction", "OCR", "Prompt Engineering", "Document Parsing", "LangChain/LLM Integration"],
    fullDescription: "Developed a powerful NLP-based PDF parser that leverages Meta's LLaMA 3 model to perform intelligent text extraction, summarization, and semantic understanding of PDF documents. The system preprocesses PDFs using OCR and text extraction techniques, then feeds the content into LLaMA 3 to enable natural language querying, contextual comprehension, and summarization. Designed for applications where understanding and interacting with complex documents (e.g., research papers, reports) is essential. This project showcases capabilities in NLP, LLM integration, prompt engineering, and pipeline design for document intelligence."
  },
  {
    id: 4,
    title: "Optical-Character-Recognitiond",
    description: "Built an OCR system in Python using Tesseract and OpenCV to extract text from images with high accuracy, supporting image preprocessing, noise removal, and real-time text recognition.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Image Preprocessing","Text Extraction", "Automation", "Computer Vision"],
    fullDescription: "Developed a robust Optical Character Recognition (OCR) system that accurately extracts text from images using Tesseract OCR and OpenCV. The project features image preprocessing techniques such as grayscale conversion, thresholding, noise reduction, and contour detection to enhance text recognition accuracy. Designed to handle scanned documents, handwritten notes, and printed images, the system automates text extraction tasks and supports integration with downstream NLP or document analysis pipelines. This project demonstrates practical skills in image processing, OCR engines, and Python-based automation."
  } 
];


// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "IDS-Anomaly-Detection-with-NSL-KDD",
//     description: "Developed an Intrusion Detection System using an Isolation Forest-based anomaly detection model to identify unauthorized network activities. Utilized the NSL-KDD dataset to train and evaluate the system, achieving improved threat detection accuracy.",
//     image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
//     technologies: ["Network Security", "Machine Learning", "Python", "Scikit-learn", "Anomaly Detection", "Identity-Based Security"],
//     fullDescription: "Designed and implemented an Intrusion Detection System (IDS) from April to May 2024 using machine learning techniques to enhance network security. The system employed the Isolation Forest algorithm—an unsupervised anomaly detection method—to detect unusual patterns in network traffic and classify them as potential threats. Training and evaluation were conducted on the NSL-KDD dataset, a widely used benchmark for intrusion detection research. The model successfully identified and flagged unauthorized access attempts and suspicious behavior, improving the overall accuracy of threat identification. Key technologies used in this project included Python, Scikit-learn, and identity-based anomaly detection frameworks."
//   },
//   {
//     id: 2,
//     title: "BigInteger-Library",
//     description: "Developed a custom BigInteger library in C++ to handle arbitrarily large integer arithmetic, supporting core operations like addition, subtraction, multiplication, division, and modular arithmetic.",
//     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
//     technologies: ["C++", "Data Structures", "Operator Overloading", "Arbitrary-Precision Arithmetic", "Object-Oriented Programming"],
//     fullDescription: "Created a BigInteger library in C++ designed to perform arithmetic operations on integers beyond the range of built-in data types. The library supports fundamental operations such as addition, subtraction, multiplication, division, and modulo, enabling precision computations with very large numbers. Internally, it uses string-based or vector-based representations to handle digit-level operations, ensuring scalability and accuracy. This project strengthens understanding of number theory, operator overloading, and object-oriented programming in C++, and is useful for cryptographic applications, numerical simulations, and systems requiring high-precision calculations."
//   },
//   {
//     id: 3,
//     title: "NLP-Powered-LLaMA-3-Enabled-PDF-Parser",
//     description: "Built an advanced PDF parser integrated with LLaMA 3 to extract, analyze, and interpret textual data using natural language processing techniques. Enabled intelligent querying and summarization of PDF content.",
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
//     technologies: ["Natural Language Processing", "Large Language Models (LLaMA 3)", "Python", "PDF Text Extraction", "OCR", "Prompt Engineering", "Document Parsing", "LangChain/LLM Integration"],
//     fullDescription: "Developed a powerful NLP-based PDF parser that leverages Meta's LLaMA 3 model to perform intelligent text extraction, summarization, and semantic understanding of PDF documents. The system preprocesses PDFs using OCR and text extraction techniques, then feeds the content into LLaMA 3 to enable natural language querying, contextual comprehension, and summarization. Designed for applications where understanding and interacting with complex documents (e.g., research papers, reports) is essential. This project showcases capabilities in NLP, LLM integration, prompt engineering, and pipeline design for document intelligence."
//   },
//   {
//     id: 4,
//     title: "Optical-Character-Recognitiond",
//     description: "Built an OCR system in Python using Tesseract and OpenCV to extract text from images with high accuracy, supporting image preprocessing, noise removal, and real-time text recognition.",
//     image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
//     technologies: ["Python", "OpenCV", "Tesseract OCR", "Image Preprocessing","Text Extraction", "Automation", "Computer Vision"],
//     fullDescription: "Developed a robust Optical Character Recognition (OCR) system that accurately extracts text from images using Tesseract OCR and OpenCV. The project features image preprocessing techniques such as grayscale conversion, thresholding, noise reduction, and contour detection to enhance text recognition accuracy. Designed to handle scanned documents, handwritten notes, and printed images, the system automates text extraction tasks and supports integration with downstream NLP or document analysis pipelines. This project demonstrates practical skills in image processing, OCR engines, and Python-based automation."
//   } 
// ];

// for frontend
// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "OVS-Using-Blockchain",
//     description: "Decentralized Online Voting System Using Blockchain A secure, tamper-proof voting platform built with FastAPI and custom blockchain logic to ensure transparent and verifiable elections.",
//     image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
//     technologies: technologies_used = ["FastAPI", "Flask", "uvicorn", "pydantic", "smtplib", "random", "time", "hashlib", "Custom Python classes", "Jinja2", "HTML/CSS", "json", "dotenv", "os", "SessionMiddleware", "Procfile", "requirements.txt"],
//     fullDescription: "The Online Voting System (OVS 2.0) is a decentralized and secure digital voting platform designed to simulate real-world elections in a tamper-proof environment using blockchain technology. This project addresses key challenges in modern digital voting—such as security, transparency, user authentication, and data integrity—through a combination of technologies including FastAPI, Flask, and a custom Python blockchain.Each vote is stored as a block in a blockchain, ensuring immutability and trustless verification. The use of email-based OTP verification ensures that only registered users can participate, and their identity is confirmed before casting votes. The system supports organizational-level elections with leader and organization code management.Ideal for academic demonstrations, blockchain voting simulations, or prototype deployments in institutions, OVS 2.0 brings together web development, cryptography, and system design into one robust package."
//   },
//   {
//     id: 2,
//     title: "Duo-Layers-Website",
//     description: "Developed a custom BigInteger library in C++ to handle arbitrarily large integer arithmetic, supporting core operations like addition, subtraction, multiplication, division, and modular arithmetic.",
//     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
//     technologies: technologies_used = ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll", "SVG", "MP4 Video", "Custom Cursor Animation", "Responsive Design"],
//     fullDescription: "Duo Layers Website is a high-impact, scroll-driven portfolio website built for digital studios, designers, and creative professionals. It combines smooth user interactions, bold visuals, and fluid motion effects to deliver an immersive frontend experience.The site is designed with a minimalist aesthetic using Gilroy typography and dark/light contrast. Powered by Locomotive Scroll and GSAP, it features scroll-based animations, a custom cursor, and seamless section transitions that make navigation feel fluid and engaging. It's a frontend-only project with no backend, perfect for static hosting or creative showcases.Whether you're a UI/UX designer, front-end developer, or creative agency, Duo Layers offers a professional and visually striking template to display your work."
//   },
//   {
//     id: 3,
//     title: "NLP-Powered-LLaMA-3-Enabled-PDF-Parser",
//     description: "Built an advanced PDF parser integrated with LLaMA 3 to extract, analyze, and interpret textual data using natural language processing techniques. Enabled intelligent querying and summarization of PDF content.",
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
//     technologies: ["Natural Language Processing", "Large Language Models (LLaMA 3)", "Python", "PDF Text Extraction", "OCR", "Prompt Engineering", "Document Parsing", "LangChain/LLM Integration"],
//     fullDescription: "Developed a powerful NLP-based PDF parser that leverages Meta's LLaMA 3 model to perform intelligent text extraction, summarization, and semantic understanding of PDF documents. The system preprocesses PDFs using OCR and text extraction techniques, then feeds the content into LLaMA 3 to enable natural language querying, contextual comprehension, and summarization. Designed for applications where understanding and interacting with complex documents (e.g., research papers, reports) is essential. This project showcases capabilities in NLP, LLM integration, prompt engineering, and pipeline design for document intelligence."
//   },
//   {
//     id: 4,
//     title: "BigInteger-Library",
//     description: "Developed a custom BigInteger library in C++ to handle arbitrarily large integer arithmetic, supporting core operations like addition, subtraction, multiplication, division, and modular arithmetic.",
//     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
//     technologies: ["C++", "Data Structures", "Operator Overloading", "Arbitrary-Precision Arithmetic", "Object-Oriented Programming"],
//     fullDescription: "Created a BigInteger library in C++ designed to perform arithmetic operations on integers beyond the range of built-in data types. The library supports fundamental operations such as addition, subtraction, multiplication, division, and modulo, enabling precision computations with very large numbers. Internally, it uses string-based or vector-based representations to handle digit-level operations, ensuring scalability and accuracy. This project strengthens understanding of number theory, operator overloading, and object-oriented programming in C++, and is useful for cryptographic applications, numerical simulations, and systems requiring high-precision calculations."
//   },
// ];