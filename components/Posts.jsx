import { MdDelete, MdEdit, MdSave } from "react-icons/md";

const Posts = ({
  posts,
  handleDelete,
  handleEdit,
  handleSaveEdit,
  editingId,
  editingMessage,
  handleEditMessage,
}) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-sm ml-4 text-blue-500">Your Posts</h2>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="mt-2 p-2 bg-gray-100 rounded-lg flex items-center justify-between"
          >
            {editingId === post.id ? (
              <input
                type="text"
                value={editingMessage}
                onChange={handleEditMessage}
                className="w-full p-2 mr-2"
              />
            ) : (
              post.message
            )}
            <div className="flex items-center">
              {editingId === post.id ? (
                <MdSave
                  className="text-green-500 cursor-pointer"
                  onClick={handleSaveEdit}
                />
              ) : (
                <MdEdit
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleEdit(post)}
                />
              )}
              <MdDelete
                className="text-red-500 cursor-pointer ml-2"
                onClick={() => handleDelete(post.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
