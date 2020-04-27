const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    const existingUser = users.find((user) => user.room === room && user.name === name);
    if (existingUser){
        return {
            err: 'User is unavailable'
        }
    }
    users.push({id, name, room});
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index != -1){
        return users.splice(index,1);
    }
}

const getUser = (id) => users.find(user => user.id === id); 


const getUserInRoom = (room) => users.filter(user => user.room === room);

module.exports = {addUser, removeUser, getUser, getUserInRoom};
