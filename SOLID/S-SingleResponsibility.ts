// class UserService {
//     createUser(userData) {
//         // 1. validation
//         if (!userData.email) {
//             throw new Error("Email required");
//         }

//         // 2. save to database
//         console.log("Saving user to DB");

//         // 3. send email
//         console.log("Sending welcome email");

//         // 4. logging
//         console.log("User created successfully");
//     }
// }
// const s = new UserService();
// const newUser = { email: "hello@example.com", name: "John Doe" };
// s.createUser(newUser)










class UserValidator {
    validate(userData: any) {
        if (!userData.email) {
            throw new Error("Email required");
        }
    }
}
class UserRepository {
    save(userData: any) {
        console.log("Saving user to DB");
    }
}
class EmailService {
    sendWelcomeEmail(email: any) {
        console.log("Sending welcome email");
    }
}

class userUservice {
    constructor(private validator: UserValidator, private repository: UserRepository, private emailService: EmailService) { }
    
    createUser(userData: any) {
        this.validator.validate(userData);
        this.repository.save(userData)
        this.emailService.sendWelcomeEmail(userData.email);
    }
}

const validator = new UserValidator();
const repository = new UserRepository();
const emailService = new EmailService();

const service = new userUservice(validator,repository,emailService);
const newUser = { email: "hello@example.com", name: "John Doe" };
service.createUser(newUser);