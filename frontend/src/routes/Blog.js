import React from "react";
import Layout from "../components/Layout";
import Blogs from "../components/blogcomponents/Blogs";
const Blog = () =>{
    return (
        <Layout>
            <div className="flex flex-row center-items justify-center">
            <div className="max-w-[80%]">
                <div>
                </div>
                <div className="flex flex-row">
                    <div className="max-w-[70%]">
                        <Blogs />
                    </div>

                </div>
            </div>
            </div>
        </Layout>
    )
}
export default Blog;