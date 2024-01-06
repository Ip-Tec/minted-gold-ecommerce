// pages/settings.js
import { useState } from "react";
import Layout from "@/components/Layout";
import { getSession } from "next-auth/react";
import Modal from "react-modal";

const Setting = ({ isAdmin }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setSearchQuery(""); // Reset search query when closing modal
  };

  const handleSearch = () => {
    // Implement search logic based on your requirements
    // You may fetch users from the server based on the searchQuery
    // and update the state with the search results.
    // For simplicity, let's assume a mock search result here.
    const mockSearchResult = [
      { id: 1, name: "User1", role: "user" },
      { id: 2, name: "User2", role: "admin" },
      // ... more mock data
    ];

    setSelectedUser(mockSearchResult[0]); // Select the first user from the search result
  };

  const handleChangeRole = (newRole) => {
    // Implement the logic to change the user's role here
    console.log(`Changing role of ${selectedUser.name} to ${newRole}`);
    // You can make an API request to update the user's role in the database
  };

  return (
    <Layout>
      <h1>Setting</h1>
      <div className="flex">
        <button onClick={openModal} className="p-3 bg-blue-600 text-gray-100 rounded hove:bg-blue-300 hove:text-gray-500">Add New Admin</button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Change User Role"
      >
        <h2>Change User Role</h2>
        <input
          type="text"
          placeholder="Search for a user"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="py-2 px-6 bg-blue-600 text-gray-100 rounded hover:bg-blue-700 mx-3">Search</button>

        {selectedUser && (
          <div className="my-3 p-3">
            <p>User: {selectedUser.name}</p>
            <p>Current Role: {selectedUser.role}</p>
            <p>New Role:</p>
            {/* Implement a dropdown or input for selecting the new role */}
            <button onClick={() => handleChangeRole("admin")} className="py-2 px-6 bg-blue-600 text-gray-100 rounded hover:bg-blue-700 mx-3">Change Role to Admin</button>
            <button onClick={() => handleChangeRole("user")} className="py-2 px-6 bg-blue-600 text-gray-100 rounded hover:bg-blue-700 mx-3">Change Role to User</button>
          </div>
        )}

        <button onClick={closeModal} className="py-2 px-6 bg-blue-600 text-gray-100 rounded hover:bg-blue-700 mx-3">Close</button>
      </Modal>
    </Layout>
  );
};

export default Setting;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // Check if the user is authenticated
  if (!session?.user?.adminrole) {
    return {
      props: {
        isAdmin: false,
      },
    };
  }

  // Check if the admin role is one of the allowed roles
  const allowedRoles = ["God", "root", "owner", "ceo", "admin"];
  const isAdmin = allowedRoles.includes(session.user.adminrole);

  return {
    props: {
      isAdmin,
    },
  };
}
