import { User } from '../../Domain/Entities/users.models'
import * as userHandler from '../Handlers/users.handlers';


export const createUser = () => {
    const userId = User.generateUserId();

    userHandler.handleCreateUserCommand(userId)

    return userId
}

