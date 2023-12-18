import React from 'react';
import NavBar from '../navigate/NavBar';
import CardUI from '../Cards/CardsUI';
import "/Users/lakshmikrishnan/Desktop/latest/src/style/MyProjects.css";
const MyProjects = () => {
  return (
    <>
    <div className='nav-app'>
        <NavBar/></div>
        <div className = "bar-cards">
        <CardUI title ='Bar Chart Animation' imageUrl ='https://sphero.com/cdn/shop/articles/coding_languages_800x.png?v=1619126283' body = ' I created an engaging bar chart animation that illustrates the changing populations of 100 cities over the years. The dynamic frames vividly showcase how these urban centers evolve, turning population data into a visually compelling story.' url="https://github.com/lkris2/Barchart-Animation"/>
        <CardUI title='Huffman Encoding' imageUrl = 'https://funmauj.b-cdn.net/test/1101959.jpg' body ='Implemented Huffman encoding in C++ to efficiently compress and decompress data, optimizing storage and transmission efficiency. Employed priority queues and binary trees to dynamically create optimal encoding schemes, showcasing algorithmic proficiency and problem-solving skills.'url ="https://github.com/lkris2/Data-Compression"/>
        <CardUI title='Search Engine' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMl6Rpb1dOm-hMN7EIaMawK3TyveWJlVIkEQ&usqp=CAU'body='Developed a search engine that efficiently filters a set of links from text files based on user-entered keywords, utilizing string matching algorithms and data structures for optimal performance. Implemented a robust solution to enhance information retrieval, showcasing strong coding skills in managing and processing large datasets.' url="https://github.com/lkris2/SearchEngine"/>
        <CardUI title='Interactive Text Adventure - UIC Campus Exploration' imageUrl='https://img.freepik.com/free-vector/gradient-futuristic-background-with-lights_52683-74115.jpg?w=740&t=st=1702880493~exp=1702881093~hmac=27cc2e1881e3e3e4e3f519f94a5f5cdaec8e0108059a14002bde950f96ffea9f' body='Developed text adventure game utilizing JSON files and dynamic Python-generated text. Showcased adeptness in data manipulation aligning with immersive and interactive user-driven content creation.' url='https://www.indivstock.com/static48/preview2/stock-photo-futuristic-digital-binary-information-data-and-streaming-binary-code-focus-on-laptop-background-complexity-data-modern-digital-age-3d-network-concept-with-digits-coding-wallpaper-3dillustration-916428.jpg'/>
        <CardUI title = 'CollegePlan App' imageUrl='https://as.virginia.edu/sites/as.virginia.edu/files/styles/natural_800/public/2023-07/Coding_Class.jpg?itok=6HD_mG8e' body='Collaborated on Web and iOS platforms utilizing modern UI frameworks. Developed application for exploring study streams and fostering student-senior interactions. Setup secure user authentication and data management efforts, designing and implementing JWT authentication system. Created REST API for seamless user authentication, enhancing usability and optimizing user credentials.(under construction to add new features)'/> 
        <CardUI title="Betting Card Game" imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/King_of_Diamonds%2C_6_of_Spades.jpg/280px-King_of_Diamonds%2C_6_of_Spades.jpg' body='Collaborated on a JavaFX-based betting card game, contributing to card drawing and score calculation features. Applied threading techniques in real-time networking solutions to ensure efficient communication and responsiveness, enhancing the overall performance of dynamic, interactive applications.' url=''></CardUI>
        <CardUI title="Personal Blog" imageUrl='https://www.digitalvidya.com/blog/wp-content/uploads/2019/03/personal-blog-952x500.webp' url='http://localhost:5173/' body='Established a personal blog  leveraging React for front-end development and Node.js for back-end functionality, ensuring a dynamic and responsive user interface. Implemented custom features and optimizations, merging technical expertise with creative expression to deliver a unique online platform for sharing insights and experiences.'/>
    </div></>
  );
};

export default MyProjects;