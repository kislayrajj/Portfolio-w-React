import PortfThumb from "../../assets/images/project_data_thumbnails/beginner/portfolioWeb.png";
import MAcard from "../../assets/images/project_data_thumbnails/beginner/dynamicCard_thumb.png";
import RockPaperScissor_thumb from "../../assets/images/project_data_thumbnails/beginner/RockPaperScissor.png";
import ReactCardThumb from "../../assets/images/project_data_thumbnails/beginner/react_business_card_thumb.png";
import calculator_thum from "../../assets/images/project_data_thumbnails/beginner/calculator_thum.png";
import bmi_thumb from "../../assets/images/project_data_thumbnails/beginner/bmilogo.jpg";
import filterCards_thumb from "../../assets/images/project_data_thumbnails/beginner/filterCards_thumb.png";
import todo_thumb from "../../assets/images/project_data_thumbnails/beginner/todo_thumb.png";
import imageSlider_thumb from "../../assets/images/project_data_thumbnails/beginner/imageSlider_thumb.png";
import easyM2MThumb from "../../assets/images/project_data_thumbnails/medium/easym2mThumb.jpg";
import clinicManagementThumb from "../../assets/images/project_data_thumbnails/expert/clinic_management_thumb.png";
import reactPlayThumb from "../../assets/images/project_data_thumbnails/beginner/reactPlayThumb.jpg";
import portfolioWithBootstrapThumb from "../../assets/images/project_data_thumbnails/beginner/portfolio_with_bootstrap_thumb.png";
import academicProjCatalogueThumb from "../../assets/images/project_data_thumbnails/medium/academicProjCatalogueThumb.png"
import aiFusionThumb2 from "../../assets/images/project_data_thumbnails/medium/aiFusionThumb2.png"
const data = {
  beginnerLevel: [
    {
      id: 1,
      link: "https://kislayrajj.github.io/DynamicCard-html-css/",
      githubRepoLink: "https://github.com/kislayrajj/DynamicCard-html-css",
      image: MAcard,
      title: "Dynamic Business Card",
      description: "This is card design dedicated to Marcus Aurelius",
      languages: ["HTML", "CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "0px",
    },
    {
      id: 2,
      link: "https://kislayrajj.github.io/DevMen-Portfolio/",
      githubRepoLink: "https://github.com/kislayrajj/DevMen-Portfolio",
      image: PortfThumb,
      title: "Personalized Portfolio",
      description:
        "This was the first Portfolio website I built. This is purely built on HTML, CSS.",
      languages: ["HTML", "CSS", "JS"],
      width: "256px",
      height: "288px",
      "margin-top": "0px",
    },
    {
      id: 3,
      link: "https://kislayrajj.github.io/Rock-Paper-Scissor/",
      githubRepoLink: "https://github.com/kislayrajj/Rock-Paper-Scissor",
      image: RockPaperScissor_thumb,
      title: "Rock-Paper-Scissor Game",
      description:
        "I built this simple version of the game while learning JavaScript. Give it a go.",
      languages: ["HTML", "CSS", "JS"],
      width: "256px",
      height: "288px",
      "margin-top": "0px",
    },
    {
      id: 4,
      link: "https://react-business-card-wheat.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/React-BusinessCard",
      image: ReactCardThumb,
      title: "Business Card",
      description:
        "Custom business card design using components with a personalized touch.",
      languages: ["React", "Tailwind CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "0px",
    },
    {
      id: 5,
      link: "https://calculator-using-react-ten.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/CalculatorUsingReact",
      image: calculator_thum,
      title: "Calculator App",
      description: "This is Full-fledged calculator",
      languages: ["React", "Tailwind CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
    {
      id: 6,
      link: "https://bmi-calculator-using-react-eta.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/BmiCalculatorUsingReact",
      image: bmi_thumb,
      title: "BMI Calculator",
      description: "Have a try and find out your BMI.",
      languages: ["React", "Tailwind CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
    {
      id: 7,
      link: "https://filter-cards-react-js.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/FilterCards-React.js",
      image: filterCards_thumb,
      title: "ID Cards",
      description: "Multiple Id Cards built using React.js.",
      languages: ["React", "Tailwind CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
    {
      id: 8,
      link: "https://avance-to-do-app-react-shadcn.vercel.app/",
      githubRepoLink:
        "https://github.com/kislayrajj/AvanceTO-DO-app-React-shadcn",
      image: todo_thumb,
      title: "Advanced ToDo App",
      description:
        "This App has functionalities such as Priority level , progress and Scheduling",
      languages: ["React", "shadcn"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
    {
      id: 9,
      link: "https://image-slider-using-react-tailwind.vercel.app/",
      githubRepoLink:
        "https://github.com/kislayrajj/image-slider-using-React-Tailwind",
      image: imageSlider_thumb,
      title: "Image Slider",
      description: "Slide with image as background, Quotes and Quotee",
      languages: ["React", "Tailwind CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
    {
      id: 10,
      link: "https://react-js-play.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/react.js-play",
      image: reactPlayThumb,
      title: "React PlayGround",
      description: "Collection of small Random react apps",
      languages: ["React", "Tailwind CSS", "Redux"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
    {
      id: 11,
      link: "https://portfolio-w-bootstrap.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/portfolio-w-bootstrap",
      image: portfolioWithBootstrapThumb,
      title: "Portfolio with Bootstrap",
      description: "SPA portfolio using Bootstrap components",
      languages: ["React", "Bootstrap"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
  ],

  mediumLevel: [
    {
      id: 1,
      link: "https://easy-m2-m.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/EasyM2M",
      image: easyM2MThumb,
      title: "EasyM2M Website",
      description:
        "Website for EasyM2M Technologies Pvt. Ltd., Bangalore, India",
      languages: ["React", "Tailwind CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
    {
      id: 2,
      link: "https://academic-project-catalogue.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/Academic-Project-Catalogue",
      image: academicProjCatalogueThumb,
      title: "Academic Project Catalogue",
      description: "All projects done in college at one place",
      languages: ["React", "Tailwind"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
    {
      id: 3,
      link: "https://ai-fusion-client.vercel.app/",
      githubRepoLink: "https://github.com/kislayrajj/AiFusion-client",
      image: aiFusionThumb2,
      title: "AI Fusion",
      description:
        "Bringing Various AI Model and Expert Systems at one place",
      languages: ["React", "Tailwind CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
  ],
  expertLevel: [
    {
      id: 1,
      link: "https://manipal-client.vercel.app/home",
      githubRepoLink: "https://github.com/Vedic-Technologies/manipal-client",
      image: clinicManagementThumb,
      title: "Clinic Management Software",
      description:
        " system with capabilities such as appointment scheduling, billing, and patient record management",
      languages: ["React", "Tailwind CSS"],
      width: "256px",
      height: "288px",
      "margin-top": "30px",
    },
  ],
};

export default data;
