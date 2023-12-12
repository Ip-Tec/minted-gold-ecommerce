// pages/settings.js
import { getSession } from "next-auth/react";
import Layout from "@/components/Layout";

const Setting = ({ isAdmin }) => {
  // Check if the authenticated user is an admin with the required role
  if (!isAdmin) {
    return (
      <Layout>
        <h1>Unauthorized Access</h1>
        <p>You do not have the necessary permissions to access this page.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Setting</h1>
      <div className="flex">
        <p>Add New Admin</p>
      </div>
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
  const allowedRoles = ["God", "owner", "ceo", "admin"];
  const isAdmin = allowedRoles.includes(session.user.adminrole);

  return {
    props: {
      isAdmin,
    },
  };
}
