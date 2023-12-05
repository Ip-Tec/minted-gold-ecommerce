// pages/index.js
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/dashboard');
      const data = await response.json();
      setDashboardData(data);
    };

    fetchData();
  }, [session]);

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between mb-4">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>

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
    </Layout>
  );
}
