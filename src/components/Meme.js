import {useEffect, useState} from "react"
import GetImageIcon from "../images/getimageicon.png"

export default function Meme() {

    const [meme,setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg",
    })
    const [allMemes,setAllMemes] = useState({})

    useEffect(() => {
        // One Way
        // fetch("https://api.imgflip.com/get_memes")
        //     .then(res => res.json())
        //     .then(memeDB => setAllMemes(memeDB.data.memes))

        //Another Way
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])

    function handleChange(event) {
        const {name,value} = event.target
        setMeme(prevMeme =>({
                ...prevMeme,
                [name]: value,
        }))
    }

    function getMemeImage() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))

    }
    return (
        <main className="main">
        <div className="form">
            <input 
              type="text"
              placeholder="Top text" 
              className="form--input" 
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input 
              type="text"
              placeholder="Bottom text" 
              className="form--input" 
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button onClick={getMemeImage} className="form--button">
                <p>Get a new meme image</p>
                <img src={GetImageIcon} />
            </button>
        </div>
        <div className="meme">
        <img src={meme.randomImage} className="main--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </main>
    )
}