const { Records, Users } = require('../db')
const records = {}


async function create(table, action, description, user_id) {
    const record = await Records.create({
        table: table, action: action, description: description, user_id: user_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return record
}

async function findAll() {
    const record = await Records.findAll({
        include: { model: Users },
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return record
}

records.create = create
records.findAll = findAll

module.exports = records