import { Collection, MongoClient } from "mongodb"

export const MongoHelper = {
    client: null as MongoClient,
    async connect(uri: string): Promise<void> {
        this.client = await MongoClient.connect(uri)
    },
    async disconnect(): Promise<void> {
        await this.client.close()
        this.client = null
    },
    getCollection(name: string): Collection {
        return this.client.db().collection(name)
    },
    map: (data: any): any => {
        const { _id, ...rest } = data
        return { ...rest, id: _id.toHexString() }
    },
}