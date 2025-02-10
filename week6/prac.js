const {MongoClient} = require('mongodb')

//connection url
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const dbName = 'Product'

async function main() {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('student_records')

    // var obj = [ 
    //     { name: "Bob", courseid: "egci111", coursename: "computer programming", mark: 80 },
    //     { name: "Tom", courseid: "egci111", coursename: "computer programming", mark: 50 },
    //     { name: "Sue", courseid: "egci427", coursename: "Web programming", mark: 90 },
    //     { name: "John", courseid: "egci427", coursename: "Web programming", mark: 70 },
    //     { name: "Jame", courseid: "egci472", coursename: "Web programming", mark: 60 },
    //   ]
    // const insertResult = await collection.insertMany(obj); 
    // console.log('Inserted document =>',insertResult)

    var query_course = { coursename: { $regex: /Computer programming/i}}
    const findCourse = await collection.find(query_course).toArray()
    console.log('Found Course =>', findCourse)

    var query_mark = { mark: { $gt: 60 }}
    const findMark = await collection.find(query_mark).toArray()
    console.log('Found Mark =>', findMark)

    var query_name = { name: /^J/} //ขึ้นต้นด้วย C
    const findName = await collection.find(query_name).toArray()
    console.log('Found Name =>', findName)



}

main()
.then(console.log('success'))
.catch(console.error)
.finally(()=> client.close())