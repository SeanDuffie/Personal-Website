// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function education() {
    return [
        {
        name: "Childhood and Education",
        start: "1971/06/28",
        end: "1995/09/01"
        },
        {
        name: "Entrepreneur Journey",
        start: "1983/06/28",
        end: "2002/03/13"
        },
        {
        name: "Making of Tycoon",
        start: "2002/03/14",
        end: "2010/06/28"
        },
        {
        name: "Rise of Tycoon",
        start: "2010/06/29",
        end: "2030/01/01"
        }
    ];
}

function careers() {
    return [
        {
        name: "Childhood and Education",
        start: "1971/06/28",
        end: "1995/09/01"
        },
        {
        name: "Entrepreneur Journey",
        start: "1983/06/28",
        end: "2002/03/13"
        },
        {
        name: "Making of Tycoon",
        start: "2002/03/14",
        end: "2010/06/28"
        },
        {
        name: "Rise of Tycoon",
        start: "2010/06/29",
        end: "2030/01/01"
        }
    ];
}

// Co = [{
//     from: "June 2023",
//     to: null,
//     location: "Eindhoven",
//     url: "https://returnless.com",
//     type: null,
//     employment: "fulltime",
//     role: "Lead Developer",
//     company: "Returnless",
//     description: "As the Lead Developer at Returnless, me and the team are developing an all-in-one Return Platform. Using Laravel combined with Vapor and a beautiful Vue3 / Tailwind front-end we deliver a sweatless return experience for our customers."
// }, {
//     from: "June 2022",
//     to: "May 2023",
//     location: "Eindhoven",
//     url: "https://wolfpackit.nl",
//     type: null,
//     employment: "fulltime",
//     role: "Lead Developer",
//     company: "Wolfpack",
//     description: "As a Lead Developer at Wolfpack, I was working on a variety of projects all within the healthcare, education, and innovation sectors. With my past experiences I was committed of helping the company achieve an even greater success. Not only with development, but also by improving the way we're working."
// }, {
//     from: "May 2016",
//     to: "May 2022",
//     location: "Eindhoven",
//     url: "https://startselect.com",
//     type: null,
//     employment: "fulltime",
//     role: "Senior Developer",
//     company: "Startselect",
//     description: "At Startselect, I was a Fulltime Senior Developer working on a large, global webshop for digital games, gift cards, and other digital entertainment. The application was based on Laravel, and as a team, we followed the Scrum methodology for our work. As a senior, I provided assistance to various departments within the company to help them achieve their goals."
// }],
// To = [{
//     from: "Mar 2014",
//     to: "May 2014",
//     location: "Penn University",
//     url: null,
//     type: null,
//     employment: "online",
//     role: "Course",
//     company: "Gamification",
//     description: "I successfully completed a course on gamification, learning how to incorporate gaming elements and techniques into my daily work. I also enjoyed the close connection with UX that this approach brings."
// }, {
//     from: "Mar 2008",
//     to: "May 2004",
//     location: "'s-Hertogenbosch",
//     url: null,
//     type: "Minor: Multimedia",
//     employment: "bachelor",
//     role: "Computer Science",
//     company: "Avans",
//     description: "I graduated from my bachelor's degree with excellent grades. I started off with Java and gained a thorough understanding of algorithms. I also completed a minor in web and game development (multimedia)."
// }],
// Is = {
//     careers: Co,
//     educations: To
// },
// Po = Pe({
//     __name: "Experiences",
//     setup(e) {
//         var s, l;
//         const t = (s = Is.careers) != null ? s : [],
//             n = (l = Is.educations) != null ? l : [];
//         return (r, i) => (j(), W(q, null, [O("section", Ao, [O("div", Eo, [Io, (j(!0), W(q, null, Qe(xe(t), c => (j(), Et(Es, {
//             experience: c
//         }, null, 8, ["experience"]))), 256))])]), O("section", So, [O("div", Oo, [Mo, (j(!0), W(q, null, Qe(xe(n), c => (j(), Et(Es, {
//             experience: c
//         }, null, 8, ["experience"]))), 256))])])], 64))
//     }
// })
