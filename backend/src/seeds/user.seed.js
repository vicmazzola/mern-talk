import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
      email: "padme.amidala@example.com",
      fullName: "Padmé Amidala",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      email: "leia@example.com",
      fullName: "Leia Organa",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      email: "rey.skywalker@example.com",
      fullName: "Rey Skywalker",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      email: "lara.croft@example.com",
      fullName: "Lara Croft",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      email: "sakura.chan@example.com",
      fullName: "Sakura Chan",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      email: "princess.peach@example.com",
      fullName: "Princess Peach",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      email: "zelda@example.com",
      fullName: "Princess Zelda",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      email: "elena.fischer@example.com",
      fullName: "Elena Fischer",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  
    // Male Users
    {
      email: "anakin.skywalker@example.com",
      fullName: "Anakin Skywalker",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      email: "niko.bellic@example.com",
      fullName: "Niko Bellic",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      email: "yoda@example.com",
      fullName: "Yoda",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      email: "jarjar.binks@example.com",
      fullName: "Jar Jar Binks",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      email: "tony.montana@example.com",
      fullName: "Tony Montana",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      email: "tommy.vercetti@example.com",
      fullName: "Tommy Vercetti",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      email: "cj@example.com",
      fullName: "Carl 'CJ' Johnson",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      email: "chuck.norris@example.com",
      fullName: "Chuck Norris",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
    },
  ];
  

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();