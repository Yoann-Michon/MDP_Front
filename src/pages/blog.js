import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Input,
  Card,
  CardContent,
  CardActions,
  Grid
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [newBlogUrl, setNewBlogUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const isAdmin = localStorage.getItem("role") === "Admin";


  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://mdp-back.onrender.com/blog");
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCreateBlog = async () => {
    try {
      await fetch("https://mdp-back.onrender.com//blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: newBlogUrl }),
      });
      fetchArticles();
      setNewBlogUrl("");
      setOpenModal(false);
      console.log(newBlogUrl);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await fetch(`https://mdp-back.onrender.com//blog/${id}`, {
        method: "DELETE",
      });
      fetchArticles();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="blog" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <Typography variant="h1" component="h1" sx={{ mb: 4 }}>
        Articles
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "12px",
              }}
            >
              <a href={article.link} rel="noopener noreferrer" target="_blank">
                <CardContent sx={{ textAlign: "center" }}>
                  <Box sx={{ my: 2 }}>{/*article.image*/}</Box>
                  <Typography variant="h5" component="div">
                    {article.title}
                  </Typography>
                  {/*<Typography variant="body2" color="text.secondary">
                    {article.content}
                  </Typography>*/}
                </CardContent>
              </a>
              <CardActions>
                {isAdmin &&(<Button
                  size="small"
                  color="secondary"
                  onClick={() => handleDeleteBlog(article.id)}
                >
                  Delete
                </Button>)}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/*role === 'Admin' && */}
      <>
      {isAdmin &&(<Button
          onClick={() => setOpenModal(true)}
          variant="contained"
          color="primary"
          sx={{
            mt: 4,
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon />
        </Button>)}
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: 200,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 2,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography id="modal-modal-title" component="h2">
              Ajouter un nouvel article
            </Typography>
            <Input
              type="text"
              placeholder="URL"
              value={newBlogUrl}
              onChange={(e) => setNewBlogUrl(e.target.value)}
            />
            <Box>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpenModal(false)}
                sx={{ mr: 2 }}
              >
                Annuler
              </Button>
              <Button onClick={handleCreateBlog}>Ajouter</Button>
            </Box>
          </Box>
        </Modal>
      </>
    </div>
  );
};

export default Blog;
