const logotext = "Bridget Kearney-Fick";
const meta = {
    title: "Bridget Kearney",
    description: "Urban Planner/Communit Engaged",
};

const introdata = {
    
    title: "Hi, I'm Bridget",
    animated: {
        first: "Aspiring Urban Planner",
        second: "3rd Year Dalhousie University Community Design Student",
        third: "Engaged Member of Dalhousie's Society of Undergraduate Planners",
        fourth: "ArcGIS Proficient",
        fifth: "Toronto/Halifax Based"
    },
    description: "Get to know me!",
    intro_img_url: "/images/bridgetStudio2.png",
    // changed based on the use case to showcase and make sure it matches it based off the animation
};

const dataabout = {
    title: "Let me introduce myself!",
    aboutme: "I'm a third-year Community Design and Planning student at Dalhousie University who is passionate about creating thriving, inclusive communities. My experience spans both academic and professional settings, where I have honed strong research, organizational, and technical skills. Whether I’m conducting environmental assessments using ArcGIS, creating visually compelling plans in Adobe Illustrator, or coordinating teams in dynamic settings like YMCA's Camp Waabanaki, I bring an adaptable, people-focused approach to every project. ",
    secondaryText: "Driven by a keen interest in sustainability, I believe thoughtful urban design can foster greater equity and accessibility for all. Having a personal experience with scoliosis, I’m especially committed to making sure built environments serve individuals of varying abilities and needs. In addition to my coursework and on-the-job experience, I enjoy travel, art, reading, and running—pursuits that energize my creativity and reinforce my belief in well-rounded, holistic community planning.",
    finalText: "Ultimately, I aim to leverage my problem-solving mindset, teamwork experience, and dedication to inclusive design to support projects that shape stronger, more resilient neighborhoods."
};

const InvolvementData = {
    title: "hello",
    textOne: "",
    textTwo: "",
    textThree: ""
};

const worktimeline = [{
        jobtitle: "Game Staff and Client Experience Desk",
        where: "Dalplex",
        date: "Jan 2024 - Present",
    },
    {
        jobtitle: "Head of Camper Care",
        where: "YMCA Camp Waabanaki",
        date: "May 2024 - Aug 2024",
    },
    {
        jobtitle: "Personal Shopper",
        where: "Loblaws",
        date: "Oct 2020 - March 2022",
    },
];

// add in code language image based visual aspect next to the names of the languages
const skills = [{
        name: "Canva",
        image: "/images/canva.webp"
    },
    {
        name: "ArcGIS",
        image: "/images/ArcGIS_logo.png"
    },
    {
        name: "Adobe Illustrator",
        image: "/images/Adobe.png"
    },
    {
        name: "Q GIS",
        image: "/images/qgislogo.png"

    },
    {
        name: "AutoCad",
        image: "/images/autocadlogo.png"
    },
    {
        name: "SketchUp",
        image: "/images/sketch.svg"
    },
    {
        name: "Microsoft Office",
        image: "/images/mlogo.png"
    }

];

const services = [{
        title: "Kickit Web Dev | React, Typescript, GraphQL, Wordpress ",
        description: "Co-founded a web development venture, enhancing SEO through Server side Rendering. Developed a streamlined pipeline for custom websites using React and WordPress, making it seamless to deliver efficient and high quality websites and applications to clients, and led e-commerce integrations utilizing Node.js with Shopify's GraphQL API. Currently catering to 5 businesses across Canada.",
        image: "images/kickit.png",
        link: "https://www.kickitweb.ca/"
    },
    {
        title: "RedBull Basement Team Canada | UI Designer",
        description: "Co-led UI design and front-end development for Estate Lynx, Team Canada’s finalist entry in the RedBull Basement global pitch competition in Japan. The AI-powered platform provides real-time listings, key metrics, and personalized insights, making real estate investment accessible for novices. After the competition, I continued as a front-end developer, in preparation for launch. ",
        image: "images/redbullGood.png",
        link: "https://www.redbull.com/ca-en/events/red-bull-basement-canada/red-bull-basement-canada-winners"
    },
    {
        title: "Dune Yourself (Coming soon) | React + Vite, AWS",
        description: "A React-based application that prompts users to upload an image and complete a questionnaire inspired by the Dune universe. Leveraging AI and canonical lore, my program then generates a personalized character—from appearance to backstory, seamlessly integrating the new persona into established Dune lore. The result is a dynamic, lore rich narrative uniquely tailored to each user’s choices and image input!",
        image: "images/dune.png"
    },
    {
        title: "Yellow Submarine | C, OpenGL, GLUT",
        description: "3D underwater submarine simulation with multiple environment models and a responsive flock of fish created by implementing Craig Reynolds's Boid algorithm into a 3D rendered environment. Programmed fully with C utlizing the OpenGL Library.",
        image: "images/yellowSubmarine.png",
        link: "https://github.com/AdamFuzesi/Yellow-Submarine/tree/main"

    },
    {
        title: "Tennis ML Analyzer/Coach | Python, YOLOv8, Pytorch, Flask ",
        description: "Computer-vision based tennis analysis software using YOLOv8 and PyTorch, creating models with custom image datasets for enhanced object detection and tracking in video streams. Trained a CNN to extract keypoints, implemented complex tracking algorithms, and utilized OpenCV for robust video processing.",
        image: "images/tennisML.png"
    },
    {
        title: "Cache Simulation System | C ",
        description: "Project simulates a Cache memory system, enabling interaction between cache and main memory. It tracks and logs cache hits and misses, offering insights into memory access patterns. The system allows for customizable memory sizes and generates random data to populate the main memory, simulating real-world behavior. Additionally, it provides detailed cache performance statistics and verifies data integrity by ensuring the consistency of values between cache and main memory.",
        image: "images/cachingProj.png",
        link: "https://github.com/AdamFuzesi/cacheSim"
    },
    {
        title: "SixSlang Translator | Swift, Swift UI",
        description: "Swift based application that takes in a users sentence, either in proper English or < Toronto > English, then translates it accordingly.",
        image: "images/sixSlang.png",
        link: "https://github.com/AdamFuzesi/SixSlang"
    },
    {
        title: "Sequestration Model Nasa Space Apps | Python, Flask, JSON",
        description: "Developed for the NASA Space Apps Hackathon, web app based sequestration model enables users to explore historical carbon emissions and sequestration potential data across Canada. Using choropleth layers and heatmaps, the platform provides an interactive map based visualization of carbon dynamics in various provinces. Additionally, it highlights algae blooms in Alberta, illustrating localized sequestration potential.",
        image: "images/spaceApps.png",
        link: "https://algaeandco2.up.railway.app/"
    },
    {
        title: "Challenger | Swift, SwiftUI, AWS",
        description: "Currently in the early stages of development, I'm very excited to introduce Challengers, an iOS application designed to connect solo-sport players and introduce a competitive edge to casual community games. Key features include local matchmaking, progress tracking, facility and court bookings, as well as community-wide win/loss leaderboards, all aimed at fostering engaging and organized events for athletes of every level, bringing a nice competitive edge back casual players.",
        image: "images/challenger.png"
    },
    {
        title: "Magical Terminal Cube | C ",
        description: "Heavily math based C program that simulates a spinning cube within the terminal. One of my first C projects! ",
        image: "images/terminalCube.png",
        link: "https://github.com/AdamFuzesi/Magical-Terminal-Cube"
    },
    {
        title: "A* Algorithm Visualizer | Python, Pygame ",
        description: "Developed an interactive pathfinding algorithm visualizer in Python, using the PyGame library to create a dynamic simulation environment. Program features user-customizable parameters, enabling the adjustment of start and end points, and the placement of obstacles within the grid.",
        image: "images/aStarVisualizer.png",
        link: "https://github.com/AdamFuzesi/A-Visualizer"

    }
    // add new sections and update based off the best projects to showcase
];

const extracurricular = [
    {
        title: "Bachelor Of Computer Science Representative",
        description: "I have been given the honor to represent my faculty as the BCS representative. My main duties include acting as a connections between faculty members and students, planning events and hackathons, meeting with companies for potential events and assigning course representatives throughout our faculties courses each semester. Fun fact, I do not watch the Social Network on 2x speed every morning, but admire the movie quite a bit.",
        image: "images/cssCouncil.png",
        link: "https://society.cs.dal.ca/about/"
    },
    {
      title: "RedBull Case Competition UI/UX Designer",
      description:
        "Co-led the UI designs in the RedBull Basement competition team representing Canada in a worldwide competition. Still on this project, as the two owners are now working towards making the startup a successful reality. Will stay on the RealEstate Lynx team as a FullStack Developer.",
      image: "images/redbullExtra.png",
      link: "https://www.redbull.com/ca-en/events/red-bull-basement-canada"
    },
    {
      title: "ICPC Programming Team Member",
      description:
        "Active member of the ICPC competitive programming team at Dalhousie Univerisity. Practicing weekly tackling complex algorithmic challenges.",
      image: "images/ICPC.png"
    },
    {
      title: "Kickit Web Startup",
      description:
        "Co-founded a web development venture, building custom solutions in React, Node, and GraphQL for local businesses. Developed a streamlined pipeline for custom websites using React and WordPress, making it seamless to deliver efficient and high quality websites/applications to clients, and led e-commerce integrations utilizing Node.js with Shopify's GraphQL API. Currently catering to 5 businesses across Canada.",
      image: "/images/kickitWeb.png",
      link: "https://www.kickitweb.ca/"
    },
    {
        title: "Dalhousie BlockChain Programmer",
        description: "Member of Dalhousie's Blockchain Society as a fullstack developer. Will be competing in Eth Denver representing the University this upcoming february. ",
        image: "images/dalhousieBlock.png",
        link: "https://www.dalbcs.com/"
    },
    {
      title: "Dal Linux Society",
      description:
              "Though my main machine is an M1 Mac, I have configured my old Razer Blade Stealth laptop to Arch Linux, and became an active member of the Linux Society.",
      image: "images/linuxSoc.png",
      link: "https://linuxsociety.ca/#about"
    },
    {
      title: "Best Buddies",
      description: "Active member of the best buddies program, fostering friendships with individuals with intellectual disabilities.",
      image: "images/pleaseWork.png",
      link: "https://carty-party.glitch.me/#About"
    }
];


const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "",
        link: "#",
    },
];

const contactConfig = {
    MY_EMAIL: "bridget.kearneyfick@gmail.com",
    MY_ALTEMAIL: "bridgetKearney@dal.ca",
    description: "Reach out to me through this contact form, or either of my emails, looking forward to chatting!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_33oc9ti",
    YOUR_TEMPLATE_ID: "",
    YOUR_USER_ID: "",
};

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/bridget-kearney-fick-9337132b1/",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/briidgetkearney/?hl=en"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    extracurricular,
    contactConfig,
    socialprofils,
    logotext,
};
