const toggle = document.getElementById('menu-toggle');

if(toggle) {
    toggle.addEventListener('change', ()=>{
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}

const words = ["Student", "Developer", "Freelancer",];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

// function-->
const type = () => {
    const currentWord = words[wordIndex];

    if(!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex-1);
        charIndex--;

        if(charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', ()=> {
    if (words?.length) type();
});

const navelinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navelinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        navelinks.forEach((l) => {
            if(l === link) {
                l.classList.add("active");
            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        // service section-->
        if(tabName === "services") {
            const serviceList = [{
                id: 1,
                icon: "",
                text: "Website Development",
                para: "I create modern, high-performance websites and web applications tailored to your business needs. From clean, responsive front-end interfaces using HTML5, CSS, and React.js to robust back-end systems built with Node.js, Python, and Java, I deliver seamless, end-to-end digital experiences optimized for speed, functionality, and user engagement.",
            }, {
                id: 2,
                icon: "",
                text: "UX/UI Design",
                para: "I design intuitive, visually striking mobile interfaces for both Android and iOS that deliver smooth, native-like user experiences. Leveraging my expertise in React Native and Expo, I bridge the gap between design and development—creating clean layouts, responsive UI components, and seamless user journeys that look great on any screen size.",
            }, {
                id: 3,
                icon: "",
                text: "SEO Optimization",
                para: "I optimize websites to boost search engine visibility, drive targeted organic traffic, and improve rankings. By refining site structure, strategically targeting key keywords, and fine-tuning technical performance for lightning-fast speed, I ensure your platform stands out to both search engines and potential clients.",
            }];

            const services = document.getElementsByClassName("service-list");

            const innerContent = serviceList.map(()=> {
                return `
                <div>Inner Box</div>
                `;
            });

            Array.from(services).forEach((ele)=> {
                ele.innerHTML = innerContent;
            });
        }
    });
});