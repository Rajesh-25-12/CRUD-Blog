import React, { useState, useEffect } from 'react'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { TextField, Button } from '@mui/material';
import Axios from 'axios';
import './Blog.css'
import Editpost from './editpost';
import View from './View';
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726"
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik"
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac"
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33"
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta"
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman"
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex"
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls"
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster"
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs"
  }
];
const v = "@nolanissac"
const Body = () => {
  const [data, setData] = useState([])
  const [blogdata, setBlogdata] = useState([])

  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)

  const handlechange = (id) => {
    setData(id)
    console.log(id)
  }
  const handleClose = () => {
    setOpen(false)
    Getname()
  }
  const handleClose1 = () => {
    setOpen1(false)
  }
  const Getname = () => {
    Axios.get('http://localhost:3001/read')
      .then((res) => {
        console.log(res, "response")
        setBlogdata(res.data)
        // setRowdata(res.data)
      })
      .catch((err) => {
        console.log(err, "response")

      })
  }
  useEffect(() => {
    Getname()
  }, [])

  return (
    <div    >
      <ImageList gap={30} cols={3}>
    
        {blogdata.map((item) => (
          <div>
            <ImageListItem key={item.author}>
              <img
                src={`data:image/png;base64,${item.blogphoto}`}
                alt={item.title}
                // className='image'
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author.name}
                actionIcon={

                  <IconButton

                    aria-label={`info about ${item.title}`}
                  >
                    <Button sx={{ color: 'rgba(255, 255, 255)' }} onClick={() => handlechange(item)} startIcon={<InfoIcon />}></Button>
                    <Button sx={{ color: 'rgba(255, 255, 255)' }} onClick={() => handlechange(item)} startIcon={<EditRoundedIcon />}></Button>
                    <Button sx={{ color: 'rgba(255, 255, 255)' }} onClick={() => handlechange(item)} startIcon={<DeleteRoundedIcon />}></Button>

                  </IconButton>
                }
              />
            </ImageListItem>
          </div>
        ))}
      </ImageList>
      <Editpost open={open} Close={handleClose} Data={data} />
      <View open={open1} Close={handleClose1} Data={data} />
    </div>
  )
}

export default Body
