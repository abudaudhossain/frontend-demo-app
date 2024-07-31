// "use client";

import { fetchData, fetchDataFromServer } from "@/lib/axios";
import ClientPosts from "../components/posts/ClientPosts";
// import { useEffect } from "react";
// import Loading from "./Loading";

const Post = async() => {
    const data = await fetchDataFromServer("/posts?_page=1&_limit=2");
    console.log("post: ", data);

    // if(isLoading){
    //     return <Loading />
    // }
    return (
        <div className="min-h-screen">
            <h1 className="text-xl text-center">Post Page</h1>
            <div>
                {data?.map((item) => (
                    <h1 key={item.id}>{item.title}</h1>
                ))}
            </div>
            <ClientPosts />

        </div>
    );
};

export default Post;
