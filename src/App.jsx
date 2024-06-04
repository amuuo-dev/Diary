import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
const App = () => {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingMessage, setEditingMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const postList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postList);
    });

    return () => unsubscribe();
  }, []);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleEditMessage = (e) => {
    setEditingMessage(e.target.value);
  };

  const handleClick = async () => {
    if (message.trim()) {
      try {
        await addDoc(collection(db, "posts"), {
          message: message,
        });
        setMessage(""); // Clear the input field after adding the message
      } catch (err) {
        console.log("Error adding the message to db", err);
      }
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
    } catch (err) {
      console.log("Error deleting message from Databasa", err);
    }
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setEditingMessage(post.message);
  };

  const handleSaveEdit = async () => {
    if (editingMessage.trim()) {
      try {
        const postRef = doc(db, "posts", editingId);
        await updateDoc(postRef, {
          message: editingMessage,
        });
      } catch (err) {
        console.log("Error updating the message in Database", err);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Main
        message={message}
        handleMessage={handleMessage}
        handleClick={handleClick}
      />
      <Posts
        posts={posts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSaveEdit={handleSaveEdit}
        editingId={editingId}
        editingMessage={editingMessage}
        handleEditMessage={handleEditMessage}
      />
      <Footer />
    </div>
  );
};

export default App;
