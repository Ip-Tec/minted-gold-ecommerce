// pages/index.js
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const [dashboardData, setDashboardData] = useState(null);
  const [recentWishlistProduct, setRecentWishlistProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session) {
          const response = await fetch("/api/dashboard/", {
            method: "GET",
          });
          // console.log(session.accessToken);
          if (response.ok) {
            const data = await response.json();
            // console.log("index-data", data);
            setDashboardData(data);
          } else {
            console.error(
              "Failed to fetch dashboard data:",
              response.statusText
            );
          }
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error.message);
      }
    };

    const fetchRecentWishlistProduct = async () => {
      try {
        const response = await fetch("/api/recent-wishlist-product");
        if (response.ok) {
          const product = await response.json();
          console.log("index-product", product);
          setRecentWishlistProduct(product);
        } else {
          // Handle error cases here
          console.error(
            "Failed to fetch recent wishlist product:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching recent wishlist product:", error.message);
      }
    };
    fetchData();
    fetchRecentWishlistProduct();
  }, [session]);

  const displayLoginUser = session?.token?.token?.token.name;
  // console.log({ session });
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        {/* Card for Total Products */}
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Total Products</h3>
          <p className="text-2xl">{dashboardData?.totalProducts}</p>
        </div>

        {/* Card for Total Users */}
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Total Users</h3>
          <p className="text-2xl">{dashboardData?.totalUsers}</p>
        </div>

        {/* Card for Wishlist Count */}
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Wishlist Count</h3>
          <p className="text-2xl">{dashboardData?.wishlistCount}</p>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="text-xl font-semibold mb-2">
          Most Recent Wishlist Product
        </h3>
        {recentWishlistProduct ? (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg">{recentWishlistProduct.name}</p>
            <p className="text-sm">{recentWishlistProduct.description}</p>
          </div>
        ) : (
          <p>No recent wishlist product found.</p>
        )}
      </div>
    </Layout>
  );
}
