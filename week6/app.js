const {MongoClient} = require('mongodb')

//connection url
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const dbName = 'Product'

async function main() {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('products')

    // var obj = { name: 'Coffee Mug', price: 10}
    // const insertResult = await collection.insertOne(obj)

    // var obj = [ 
    //     { name: "Book", price: 10 },
    //     { name: "Pencil", price: 5 },
    //     { name: "Calculator", price: 40 },
    //     { name: "Notebook", price: 15 },
    //     { name: "T-Shirt", price: 20 },
    //     { name: "Jacket", price: 20 }
    //   ]
    // const insertResult = await collection.insertMany(obj); 
    // console.log('Inserted document =>',insertResult)

    // const findResult = await collection.findOne({})
    // console.log('Found documents =>', findResult)

    // const findResult = await collection.find({}).toArray()
    // console.log('Found documents =>', findResult)

    // var query = { name: "Pencil"}
    // const findResult = await collection.find(query).toArray()
    // console.log('Found documents =>', findResult)

    // var query = { name: /^C/} //ขึ้นต้นด้วย C
    // const findResult = await collection.find(query).toArray()
    // console.log('Found documents =>', findResult)

    // var key = {name : -1} // 1 = น้อยไปมาก ---- -1 มากไปน้อย
    // const findResult = await collection.find().sort(key).toArray()
    // console.log('Found documents =>', findResult)

    // var query = {name : "Book"} 
    // const findResult = await collection.deleteOne(query)
    // console.log('Found documents =>', findResult)

    // var query = {name : /^T/} // ขึ้นต้นด้วย T
    // const findResult = await collection.deleteMany(query)
    // console.log('Found documents =>', findResult)

    var query = {name : "Coffee Mug"} // ขึ้นต้นด้วย T
    var newValue = {$set: {name : "Tea Mug", pirce: 25}}
    const updateResult = await collection.updateOne(query,newValue)
    console.log('Updated documents =>', updateResult)

    return 'done'
}

main()
.then(console.log('success'))
.catch(console.error)
.finally(()=> client.close())