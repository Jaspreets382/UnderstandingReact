import config from "../config";
import { Client, ID, Databases, Storage, Query, } from "appwrite";

export class Service {
    client = new Client()
    bucket
    database
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )

        } catch (error) {
            console.log(error.message)

        }
    }
    async updatePost(slug, { title, content, featuredImage, status, }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )

        } catch (error) {
            console.log(error.message)

        }

    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }

    async getPost(slug) {
        try {
            return this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug

            )
        } catch (error) {
            console.log(error.message)
            return false
        }
    }

    async getAllPosts(queries = [
        Query.equal("status", "active")
    ]) {
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries

            )

        } catch (error) {
            console.log(error.message)
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log('Service::uploadFile error')
            return false
        }
    }
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(

                config.appwriteBucketId,
                fileId
            )

        } catch (error) {
            console.log('Service::deleteFile error')
            return false
        }
    }
    getFilePrev(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

export const appWriteService=new Service()