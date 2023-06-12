const { Client } = require('elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

class Student{
    constructor(){
        this.bulkBody = [];
    }

    Init(){
        console.log("Da vao init()");
        const students = [
            { Id: 1, name: 'John Doe', address: '123 Main St' },
            { Id: 2, name: 'Jane Smith', address: '456 Elm St' }
        ];
        
        students.forEach(student => {
            this.bulkBody.push(
                { 
                    index: { 
                        _index: 'students',
                        _id: student.Id 
                    }
                },
                student
            );
        });
    }

    async InsertBulk(req, res) {
        try {
            this.Init();
            const { body } = await client.bulk({ body: this.bulkBody });

            console.log(body);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Student;