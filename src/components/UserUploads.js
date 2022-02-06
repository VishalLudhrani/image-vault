import { Box, Button, Grid, ImageList, ImageListItem, ImageListItemBar, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '0.5rem'
};

const UserUploads = (props) => {

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return(
    <>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Upload a new image.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Upload image
          </Typography>
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={props.onFileChange} />
          <br />
          <br />
          <Box sx={{display: "flex"}}>
            <Button
              variant="outlined"
              onClick={handleModalClose}
              sx={{flex: "auto", margin: "auto 0.25rem"}}
            >
              Close
            </Button>
            <Button
              variant="contained"
              disabled={props.isImageNull}
              sx={{flex: "auto", margin: "auto 0.25rem"}}
              onClick={props.onFileUpload}
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Modal>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          marginTop: 0
        }}
      >
        <Grid item xs={8}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: "center"
            }}
          >
            My uploads
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button 
            variant="contained"
            onClick={handleModalOpen}
          >
            Upload new
          </Button>
        </Grid>
      </Grid>
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