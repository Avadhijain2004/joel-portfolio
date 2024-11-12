import project1 from '../assets/projects/project-3.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.png'
import project4 from '../assets/projects/project-4.jpg'
import project5 from '../assets/projects/project-1.jpg'

export const HERO_CONTENT = `Electronics and Instrumentation Engineer specialized in PCB design, PLC programming, 3D modeling, C++ Arduino development, HMI design, and prompt engineering—creating smart, integrated systems that drive efficiency and innovation`;

export const EXPERIENCES = [
  {
    duration: "15/01/2024 - 15/02/2024",
    role: "Python Developer",
    company: "CodSoft",
    description: ` Developed various Python-based projects including a contact book app, password generator app, and to-do list app.`,
    technologies: ["Python", "Streamlit"],
  },
];

export const PROJECTS = [
  {
    title: "Sun Tracking Solar Panel System",
    image: project5,
    description:
      "A sun-tracking solar panel dynamically adjusts its position to follow the sun movement, unlike static panels that remain fixed at a single angle. This capability enables it to capture more sunlight throughout the day, thereby generating increased solar energy ",
    technologies: ["Arduino IDE" , "DipTrace", "Fusion 360"],
    code: "",
  },
  {
    title: "Line Follower",
    image: project4,
    description:
      "A Line Following Robot is an autonomous robot which is able to follow either a black or white line that is drawn on the surface consisting of a contrasting colour.",
    technologies: ["Arduino IDE"],
    code: "",
  },
  {
    title: "Plc - Traffic Control System",
    image: project1,
    description:
      "A Programmable Logic Controller (PLC) traffic control system is a system that uses a PLC to monitor input devices and control output devices to manage traffic flow and improve safety. PLCs are industrial computers that can be used in many production processes.",
    technologies: ["PLC","HMI"],
    code: "",
  },
  {
    title: "Automatic Car Washing and Parking System",
    image: project2,
    description:
      "An Automatic Car Washing and Parking System automates car cleaning and parking using sensors and robotics. It efficiently washes vehicles and parks them in available spots, streamlining both processes for convenience and time-saving.",
    technologies: [ "Ladder Programming", "C++"],
    code: "",
  },
  
];

export const CONTACT = {
  address: "Indore, Madhya Pradesh",
  phoneNo: "+91 8827020133",
  email: "joelmichael53296@gmail.com",
};