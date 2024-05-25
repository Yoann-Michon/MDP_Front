import {
  Button,
  Modal,
  Box,
  Typography,
  Input,
  TextField,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState, useEffect } from "react";

const Shop = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    locationImg: "",
  });
  const [products, setProducts] = useState([]);
  const isAdmin = localStorage.getItem("role") === "Admin";


  const getExcerpt = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://mdp-back.onrender.com/products");
      const data = await response.json();
      setProducts(data);
      setOpenModal(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const FileUpload = async (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, locationImg: file });
  };

  const handleCreateProduct = async () => {
    try {
      // Créer un FormData et ajouter l'image
      const formData = new FormData();
      formData.append("image", newProduct.locationImg);
  
      // Envoyer l'image à imgbb
      const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?expiration=0&key=${process.env.IMGBB_KEY}`, {
        method: "POST",
        body: formData
      });
  
      // Extraire les données de la réponse
      const imgbbData = await imgbbResponse.json();
  
      // Vérifier si la réponse contient l'URL de l'image
      if (!imgbbData.success) {
        throw new Error('Failed to upload image to imgbb');
      }
  
      // Mettre à jour l'URL de l'image dans le produit
      const updatedProduct = { ...newProduct, locationImg: imgbbData.data.url };
  
      // Envoyer les données du produit au backend
      await fetch("https://mdp-back.onrender.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
  
      // Fermer la modal et réinitialiser le produit
      setOpenModal(false);
      setProducts([...products, updatedProduct]);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        locationImg: "",
      });
  
      console.log(updatedProduct);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  

  const handleDeleteProduct = async (id) => {
    try {
      await fetch(`https://mdp-back.onrender.com/products/${id}`, {
        method: "DELETE",
      });
      console.log(id)
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="shop" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <Typography variant="h1" component="h1" sx={{ mb: 4 }}>
        Shop
      </Typography>
      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <Card key={index} sx={{ maxWidth: 300 }}>
            <Box
              component="img"
              src={product.locationImg}
              alt={`${product.name} image`}
              sx={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {getExcerpt(product.description,150)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price} €
              </Typography>
            </CardContent>
            {isAdmin && (
              <CardActions>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Supprimer
                </Button>
              </CardActions>
            )}
          </Card>
        ))}
      </Box>
      {isAdmin && (
        <Button
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
        </Button>
      )}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 300,
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
            Nouveau produit
          </Typography>
          <Box sx={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <Input
              type="text"
              placeholder="Nom"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Prix"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </Box>
          <TextField
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            multiline
            rows={4}
            variant="outlined"
            sx={{ minWidth: "400px" }}
          />
          <Box>
            <Input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              size="small"
              fullWidth
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  locationImg:  FileUpload(e),
                })
              }
            />
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpenModal(false)}
            >
              Annuler
            </Button>
            <Button onClick={handleCreateProduct}>Ajouter</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
  
};

export default Shop;
