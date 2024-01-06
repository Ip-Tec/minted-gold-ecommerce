// pages/settings.js
import { useState } from "react";
import Layout from "@/components/Layout";
import { getSession } from "next-auth/react";
import Modal from "react-modal";

const Setting = ({ isAdmin }) => {
  return (
    <Layout>
      <h1>Website Setting</h1>
    </Layout>
  );
};

export default Setting;
