"use server"

import { Client, Databases, Query } from "node-appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import type { Article } from "@/lib/types/article"

export const getAllArticles = async (limit = 10, offset = 0) => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.apiKey)

  const databases = new Databases(client)

  try {
    const res = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.articlesCollectionId, [
      Query.orderDesc("$createdAt"),
      Query.limit(limit),
      Query.offset(offset),
    ])

    return { success: true, data: res.documents as Article[], total: res.total }
  } catch (error) {
    console.error("Error fetching articles:", error)
    return { success: false, error: "Could not fetch articles." }
  }
}
