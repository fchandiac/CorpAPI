const { Profiles } = require('../db')
const profiles = {}


async function create(name, admin, del, update) {
    const profile = await Profiles.create({
        name: name,
        admin: admin, 
        delete:del,
        update:update
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function findAll(){
    const profile = await Profiles.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function findOneById(id){
    const profile = await Profiles.findOne({
        where: {id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function update(id, name, admin, del, update ){
    const profile = await Profiles.update({
        name:name,
        admin:admin,
        delete:del,
        update: update
    },
    {where:{id:id}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function destroy(id){
    const profile = await Profiles.destroy({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}


profiles.create = create
profiles.findAll = findAll
profiles.findOneById = findOneById
profiles.update = update
profiles.destroy = destroy




module.exports = profiles



