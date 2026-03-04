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
var UserValidator = /** @class */ (function () {
    function UserValidator() {
    }
    UserValidator.prototype.validate = function (userData) {
        if (!userData.email) {
            throw new Error("Email required");
        }
    };
    return UserValidator;
}());
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.save = function (userData) {
        console.log("Saving user to DB");
    };
    return UserRepository;
}());
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendWelcomeEmail = function (email) {
        console.log("Sending welcome email");
    };
    return EmailService;
}());
var userUservice = /** @class */ (function () {
    function userUservice(validator, repository, emailService) {
        this.validator = validator;
        this.repository = repository;
        this.emailService = emailService;
    }
    userUservice.prototype.createUser = function (userData) {
        this.validator.validate(userData);
        this.repository.save(userData);
        this.emailService.sendWelcomeEmail(userData.email);
    };
    return userUservice;
}());
var validator = new UserValidator();
var repository = new UserRepository();
var emailService = new EmailService();
var service = new userUservice(validator, repository, emailService);
var newUser = { email: "hello@example.com", name: "John Doe" };
service.createUser(newUser);
