import { User } from '../../Domain/Entities/users.models'

export const handleCreateUserCommand = (userId) => {
    try {
        User.createUser(userId)
    } catch (error: any) {
        console.error(`Error creating user: ${error.message}`);
    }
}

export const getUserById = (userId) => {
    return User.users.find((user) => user.userId === userId);
}
