"use server"
import {payload} from "@/lib"

export default async function getAllPosts() {
    const posts = await payload.find({
        collection: "posts",
    })
    return posts.docs
}