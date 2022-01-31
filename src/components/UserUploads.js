import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const userUploads = [
  {
    imgTitle: "My first code snippet.png",
    imgID: "photo-1515879218367-8466d910aaa4",
    imgURL: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    dateAdded: "12/01/2022"
  },
  {
    imgTitle: "screenshot146146.png",
    imgID: "photo-1454165205744-3b78555e5572",
    imgURL: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    dateAdded: "12/01/2022"
  },
  {
    imgTitle: "My new code snippet",
    imgID: "photo-1461749280684-dccba630e2f6",
    imgURL: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    dateAdded: "12/01/2022"
  },
  {
    imgTitle: "My last code snippet.png",
    imgID: "photo-1551033406-611cf9a28f67",
    imgURL: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dateAdded: "12/01/2022"
  },
  {
    imgTitle: "My latest code snippet.png",
    imgID: "photo-1579403124614-197f69d8187b",
    imgURL: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    dateAdded: "12/01/2022"
  },
]

const UserUploads = () => {
  return(
    <>
      <Navbar />
      <Typography
        variant="h3"
        component="h2"
        sx={{
          textAlign: 'center',
          marginTop: '16px'
        }}
      >
        My uploads
      </Typography>
      <ImageList
        sx={{
          display: 'grid',
          gridAutoColumns: '1fr',
          gap: 1
        }}
      >
        {userUploads.map((userUpload, pos) => {
          return(
            <ImageListItem key={pos}>
              <img
                src={userUpload.imgURL}
                alt={userUpload.imgTitle}
              />
              <ImageListItemBar
                title={userUpload.imgTitle}
                subtitle={userUpload.dateAdded}
              />
            </ImageListItem>
          )
        })}
      </ImageList>
    </>
  );
};

export default UserUploads;