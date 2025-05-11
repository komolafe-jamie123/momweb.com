/* style.css */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #FFB6C1; /* Light Pink */
    color: white;
    text-align: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
    font-family: 'Dancing Script', cursive;
}

header h1 {
    font-size: 3em;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.2em;
    font-style: italic;
}

#photo-gallery {
    padding: 2rem;
    text-align: center;
}

#photo-gallery h2 {
    font-size: 2em;
    margin-bottom: 1rem;
    color: #e91e63;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.gallery-item {
    width: 300px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden; /* Ensure images don't overflow rounded corners */
}

.gallery-item img {
    width: 100%;
    height: auto;
    display: block; /* Remove extra space below image */
    transition: transform 0.3s ease; /* Smooth zoom effect */
}

.gallery-item img:hover {
    transform: scale(1.1); /* Zoom on hover */
}

#message {
    padding: 2rem;
    text-align: center;
    background-color: #fff;
    margin: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#message h2 {
    font-size: 2em;
    margin-bottom: 1rem;
    color: #e91e63;
}

#message p {
    font-size: 1.1em;
    margin-bottom: 1rem;
}

footer {
    text-align: center;
    padding: 1rem 0;
    background-color: #333;
    color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
    .gallery-item {
        width: 100%; /* Full width on smaller screens */
    }

    header h1 {
        font-size: 2.5em;
    }

    #photo-gallery h2, #message h2 {
        font-size: 1.75em;
    }

    #message {
        margin: 1rem;
    }
}
