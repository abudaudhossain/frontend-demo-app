import { fetchDataFromServer } from "@/lib/axios";
import ClientPosts from "../components/posts/ClientPosts";

import Post from "../components/animation/Post";

export async function generateMetadata({ params }) {
    // read route params

    return {
        title: "Post Page: ",
        description:
            "sequi sint nihil reprehenderit dolor beatae ea dolores neque",
    };
}

const page = async () => {
    const data = await fetchDataFromServer("/posts?_page=1&_limit=2");

    return (
        <div className="min-h-screen">
            <Post data={data} />
            <ClientPosts />
        </div>
    );
};

export default page;
