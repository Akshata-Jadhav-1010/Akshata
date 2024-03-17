import  {React,useState}from 'react';
import Button from "../ui/Button"
import axios from 'axios';

const Add = () => { 
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [hashtag, setHashtag] =useState([]);

    const handleauthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleimageChange = (e) => {
        setImage(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubtitleChange = (e) => {
        setSubtitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    
      
    const handleHashChange = (e) => {
        const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
        setHashtag(tags);
    };


    const handleUplodeBlog = async () => {  
        
        try {
            // Check if both name and age are entered
            if (!author || !image ||!title ||!subtitle || !content || !hashtag ) {
              alert('Please enter all the fields.');
              return;
            }
            
            const currentDate = new Date();

            // Make a POST request to the backend to save the name
            await axios.post('http://localhost:3001/api/blogPost', { 
                
                author, image, title, subtitle, content, hashtag,
                craetedAt: currentDate.toISOString()
              });

    
              alert('Successful post');

        } catch (error) {
            console.error('Error in handleUplodeBlog:', error);
            alert('An error occurred. Please check the console for details.');
          }
          
        };
      
    return (
        <div className="w-full h-[50rem] grid place-items-center p-16">
            <h1>Blog Upload</h1>
            <div className="w-2/6">               
                <input type="text"  placeholder="enter author" value={author} onChange={handleauthorChange} />
            </div>
            <div className="w-2/6">
                <input type="text" placeholder="enter image URL" value={image} onChange={handleimageChange} />
            </div>
            <div className="w-2/6">
                <input type="text" placeholder="enter title" value={title} onChange={handleTitleChange} />
            </div>
            <div className="w-2/6">
                <input type="text"  placeholder="enter subtitle" value={subtitle} onChange={handleSubtitleChange} />
            </div>
            <div className="w-2/6">
                <input type="text"  placeholder="enter #hashtagtag" value={hashtag} onChange={handleHashChange} />
            </div>
            <div className="w-2/6">
                <textarea className="text-black w-full" placeholder="enter content" value={content} onChange={handleContentChange} />
            </div>
            <Button  onClick={handleUplodeBlog} text={"Upload Blog"}/>
            
            <div className="w-full h-16"></div>
            <div className="w-full h-16"></div>
            <div className="w-full h-16"></div>
            
        </div>
    )
}

export default Add;
