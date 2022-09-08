const { Users, Profiles } = require('../db')
const users = {}

async function create(user, pass, name,  profile_id) {
    const _user = await Users.create({
        user: user,
        pass: pass,
        name: name,
        profile_id: profile_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return _user
}

async function findOneByUser(user){
    const _user = await Users.findOne({
        where: {user:user},
        include: { model: Profiles }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return _user
}

async function findAll(){
    const _user = await Users.findAll({
        include: { model: Profiles }
    })
    .then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return _user
}

async function findOneById(id){
    const _user = await Users.findOne({
        where: {id:id},
        include: { model: Profiles }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return _user
}

async function destroy(id){
    const _user = await Users.destroy({
        where: {id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return _user
}

async function updateProfile(id, profile_id ){
    const _user = await Users.update(
        {profile_id: profile_id},
        {where: {id:id}}
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return _user
}

async function updatePass(id, pass){
    const _user = await Users.update(
        {pass: pass},
        {where: {id:id}}
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return _user
}

users.create = create
users.findOneByUser = findOneByUser
users.findAll = findAll
users.findOneById = findOneById
users.updatePass = updatePass
users.destroy = destroy
users.updateProfile = updateProfile

module.exports = users