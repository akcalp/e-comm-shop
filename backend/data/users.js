import bcrypt from "bcryptjs"

const  users = [
    {
        name: "Admin User",
        email: "admin@test.com",
        password: bcrypt.hashSync("12345", 10),
        isAdmin: true
    },
    {
        name: "Alp Akca",
        email: "alp@test.com",
        password: bcrypt.hashSync("12345", 10),
    },
    {
        name: "Ant Akca",
        email: "ant@test.com",
        password: bcrypt.hashSync("12345", 10),
    }

];

export default users;
