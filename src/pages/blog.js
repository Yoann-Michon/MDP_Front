import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Input,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UserContext } from "./../userRole";
import CircularIndeterminate from "./../components/loader";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [newBlogUrl, setNewBlogUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { userRole } = useContext(UserContext);
  const isAdmin = userRole === "admin";
  const [articleTitle, setArticleTitle] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://mdp-back.onrender.com/blog");
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally{
      setIsLoading(false);
    }
  };

  const handleCreateBlog = async () => {
    try {
      await fetch("https://mdp-back.onrender.com/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: newBlogUrl }),
      });
      fetchArticles();
      setNewBlogUrl("");
      setOpenModal(false);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleUpdateBlog = async (id) => {
    try {
      await fetch(`https://mdp-back.onrender.com/blog/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: articleTitle,
          imageLink: articleImage,
          content: articleContent,
        }),
      });
      fetchArticles();
      setArticleTitle("");
      setArticleImage("");
      setArticleContent("");
      setOpenModal(false);
      setSelectedArticle(null);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await fetch(`https://mdp-back.onrender.com/blog/${id}`, {
        method: "DELETE",
      });
      fetchArticles();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const openEditModal = (article) => {
    setArticleTitle(article.title);
    setArticleImage(article.imageLink);
    setArticleContent(article.content);
    setSelectedArticle(article);
    setEditMode(true);
    setOpenModal(true);
  };

  return (
    <div
      className="blog"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 4 }}>
        Articles
      </Typography>

      {isLoading ? (<CircularIndeterminate />) :<Grid container spacing={4} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} px={2}>
            <Card
              sx={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "12px",
              }}
            >
              <Box
                component="img"
                src={article.imageLink}
                alt={`image: ${article.title}`}
                sx={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                }}
              />
              <a href={article.link} rel="noopener noreferrer" target="_blank" style={{textDecoration:"none"}}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                    {article.title}
                  </Typography>
                </CardContent>
              </a>
              <CardActions>
                {isAdmin && (
                  <>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => handleDeleteBlog(article.id)}
                    >
                      <DeleteIcon sx={{ color: "#7ED957" }}/>
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => openEditModal(article)}
                    >
                      <EditIcon sx={{ color: "#7ED957" }}/>
                    </Button>
                  </>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>}
      <>
        {isAdmin && (
          <Button
            onClick={() => setOpenModal(true)}
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor:"#7ED957"
            }}
          >
            <AddIcon />
          </Button>
        )}
        <Modal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
            setEditMode(false);
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: editMode ? 400 : 200,
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
              {editMode ? "Update Article" : "Add New Article"}
            </Typography>
            {editMode && (
              <>
                <Input
                  type="text"
                  placeholder="Title"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Input
                  type="text"
                  placeholder="Image URL"
                  value={articleImage}
                  onChange={(e) => setArticleImage(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Input
                  type="text"
                  placeholder="Content"
                  value={articleContent}
                  onChange={(e) => setArticleContent(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
              </>
            )}
            {!editMode && (
              <Input
                type="text"
                placeholder="URL"
                value={newBlogUrl}
                onChange={(e) => setNewBlogUrl(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
            <Box>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setOpenModal(false);
                  setEditMode(false);
                }}
                sx={{ mr: 2 }}
              >
                Cancel
              </Button>
              <Button
                onClick={() =>
                  editMode ? handleUpdateBlog(selectedArticle.id) : handleCreateBlog()
                }
              >
                {editMode ? "Update" : "Add"}
              </Button>
            </Box>
          </Box>
        </Modal>
      </>
    </div>
  );
};

export default Blog;
